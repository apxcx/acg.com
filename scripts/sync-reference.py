#!/usr/bin/env python3
"""Mirror the public ACG homepage frontend into this project's Vite client.

This preserves the reference's markup, CSS cascade, responsive rules, and animation
configuration instead of inferring those values from screenshots. It does not
copy WordPress backend files, prefetch visitors' navigation, or send analytics.
"""
from __future__ import annotations

import hashlib
import json
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote

import requests
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
CLIENT = ROOT / "client"
PUBLIC = CLIENT / "public"
SOURCE = "https://n2.apx.cx/acg/"
SNAPSHOT = Path("/home/ubuntu/acg-reference-source/homepage.html")
AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36"
CACHE = SNAPSHOT.parent / "cache"
CACHE.mkdir(parents=True, exist_ok=True)
URL_PATTERN = re.compile(r"url\(\s*(['\"]?)([^)]+?)\1\s*\)", re.I)
imports = re.compile(r"@import\s+(?:url\()?['\"]([^'\"]+)['\"]\)?", re.I)
mapping: dict[str, str] = {}
raw: dict[str, bytes] = {}
failures: list[dict[str, str]] = []


def absolute(url: str, base: str = SOURCE) -> str:
    return urljoin(base, url.strip()).replace("&amp;", "&")


def local_path(url: str, kind: str | None = None) -> str:
    if url in mapping:
        return mapping[url]
    p = urlsplit(url)
    name = unquote(Path(p.path).name) or "asset"
    name = re.sub(r"[^a-zA-Z0-9._-]", "-", name)
    ext = Path(name).suffix.lower()
    if kind is None:
        if ext == ".css" or "fonts.googleapis.com" in p.netloc:
            kind = "styles"
        elif ext == ".js":
            kind = "scripts"
        elif ext in (".woff", ".woff2", ".ttf", ".otf", ".eot"):
            kind = "fonts"
        else:
            kind = "images"
    if "fonts.googleapis.com" in p.netloc:
        name = "google-fonts.css"
    digest = hashlib.sha1(url.encode()).hexdigest()[:10]
    path = f"/reference/{kind}/{digest}-{name}"
    mapping[url] = path
    return path


def request_asset(url: str) -> tuple[str, bytes]:
    cached = CACHE / hashlib.sha1(url.encode()).hexdigest()
    if cached.exists():
        return url, cached.read_bytes()
    for attempt in range(2):
        try:
            result = requests.get(url, headers={"User-Agent": AGENT}, timeout=40)
            result.raise_for_status()
            cached.write_bytes(result.content)
            return url, result.content
        except requests.RequestException as error:
            if attempt == 1:
                raise RuntimeError(f"{url}: {error}") from error
    raise RuntimeError(url)


def download_batch(urls: set[str]) -> None:
    pending = [url for url in urls if url not in raw]
    if not pending:
        return
    with ThreadPoolExecutor(max_workers=8) as pool:
        tasks = {pool.submit(request_asset, u): u for u in pending}
        for index, task in enumerate(as_completed(tasks), 1):
            url = tasks[task]
            try:
                url, content = task.result()
                raw[url] = content
            except RuntimeError as error:
                failures.append({"url": url, "error": str(error)})
                print(f"FAILED {url}", flush=True)
            if index % 8 == 0 or index == len(tasks):
                print(f"Downloaded {index}/{len(tasks)} dependencies", flush=True)


def css_urls(css: str, base: str) -> set[str]:
    found = [match[1].strip().strip("'\"") for match in URL_PATTERN.findall(css)]
    found += imports.findall(css)
    return {absolute(u, base) for u in found if u and not u.startswith(("data:", "#")) and not u.endswith("icons/eye.svg")}


def rewrite_css(css: str, base: str) -> str:
    def replace(match: re.Match[str]) -> str:
        url = match.group(2).strip().strip("'\"")
        if url.endswith("icons/eye.svg"):
            return "none"  # Source 404; only used by an absent password widget.
        full = absolute(url, base)
        if full in mapping:
            return f'url("{mapping[full]}")'
        return match.group(0)
    css = URL_PATTERN.sub(replace, css)
    for url in imports.findall(css):
        full = absolute(url, base)
        if full in mapping:
            css = css.replace(url, mapping[full])
    return css


def main() -> None:
    source = SNAPSHOT.read_text() if SNAPSHOT.exists() else requests.get(SOURCE, timeout=40).text
    soup = BeautifulSoup(source, "html.parser")

    # Non-visual WordPress helpers are not part of the requested replica.
    for script in list(soup.find_all("script")):
        src = script.get("src", "")
        content = script.get_text()
        if (
            "breeze-prefetch" in src
            or "cloudflare-static/email-decode" in src
            or script.get("id") in ("breeze-prefetch-js-extra", "wp-emoji-settings")
            or script.get("type") == "speculationrules"
            or 'script#wp-emoji-settings' in content
            or "DestinySearchConfig" in content
        ):
            script.decompose()

    # Decode the source's obfuscated public email without retaining Cloudflare JS.
    for email in soup.select("[data-cfemail]"):
        encoded = email.get("data-cfemail", "")
        try:
            key = int(encoded[:2], 16)
            text = "".join(chr(int(encoded[i:i + 2], 16) ^ key) for i in range(2, len(encoded), 2))
            email.replace_with(text)
        except (ValueError, IndexError):
            pass
    for link in soup.select('a[href^="mailtto:"]'):
        link["href"] = link["href"].replace("mailtto:", "mailto:", 1)

    dependencies: set[str] = set()
    for link in soup.select('link[rel="stylesheet"]'):
        url = absolute(link["href"])
        local_path(url, "styles")
        dependencies.add(url)
    for script in soup.select("script[src]"):
        url = absolute(script["src"])
        local_path(url, "scripts")
        dependencies.add(url)
    for item in soup.select("img,source,video"):
        for attribute in ("src", "data-src", "poster"):
            url = item.get(attribute)
            if url and not url.startswith(("data:", "#")):
                url = absolute(url)
                local_path(url)
                dependencies.add(url)
        for attribute in ("srcset", "data-srcset"):
            if item.get(attribute):
                for entry in item[attribute].split(","):
                    url = absolute(entry.strip().split()[0])
                    local_path(url)
                    dependencies.add(url)
    for style in soup.select("style"):
        for url in css_urls(style.get_text(), SOURCE):
            local_path(url)
            dependencies.add(url)
    for item in soup.select("[style]"):
        for url in css_urls(item["style"], SOURCE):
            local_path(url)
            dependencies.add(url)
    for link in soup.select('link[rel="icon"],link[rel="apple-touch-icon"]'):
        url = absolute(link["href"])
        local_path(url)
        dependencies.add(url)

    print(f"Mirroring {len(dependencies)} initial dependencies", flush=True)
    download_batch(dependencies)
    # Public stylesheets reference additional font files and background images.
    for _ in range(3):
        nested: set[str] = set()
        for url, content in list(raw.items()):
            if mapping[url].endswith(".css"):
                for asset in css_urls(content.decode("utf-8", errors="replace"), url):
                    local_path(asset)
                    if asset not in raw:
                        nested.add(asset)
        if not nested:
            break
        print(f"Mirroring {len(nested)} stylesheet/font dependencies", flush=True)
        download_batch(nested)
    if failures:
        (ROOT / "reference-failures.json").write_text(json.dumps(failures, indent=2))
        raise RuntimeError(f"{len(failures)} required assets failed; page not replaced")

    for url, content in raw.items():
        destination = PUBLIC / mapping[url].lstrip("/")
        destination.parent.mkdir(parents=True, exist_ok=True)
        if destination.suffix == ".css":
            content = rewrite_css(content.decode("utf-8", errors="replace"), url).encode()
        destination.write_bytes(content)

    for item in soup.find_all(True):
        for attr in ("href", "src", "poster", "data-src"):
            value = item.get(attr)
            if isinstance(value, str) and absolute(value) in mapping:
                item[attr] = mapping[absolute(value)]
        for attr in ("srcset", "data-srcset"):
            if item.get(attr):
                entries = []
                for entry in item[attr].split(","):
                    parts = entry.strip().split()
                    if parts:
                        parts[0] = mapping.get(absolute(parts[0]), parts[0])
                        entries.append(" ".join(parts))
                item[attr] = ", ".join(entries)
        if item.get("style"):
            item["style"] = rewrite_css(item["style"], SOURCE)
        if item.name == "style":
            item.string = rewrite_css(item.get_text(), SOURCE)

    # Separate source inline styles without changing their cascade position.
    styles_directory = PUBLIC / "reference/styles"
    for index, style in enumerate(list(soup.select("style"))):
        filename = f"source-inline-{index + 1:02}.css"
        (styles_directory / filename).write_text(style.get_text())
        link = soup.new_tag("link", rel="stylesheet", href=f"/reference/styles/{filename}")
        style.replace_with(link)

    # Library scripts retain original order. All initializers are DOMContentLoaded
    # callbacks, so concatenating them after the libraries preserves their order.
    initializers: list[str] = []
    for script in list(soup.select("script:not([src])")):
        if script.get("type") in ("application/ld+json", "application/json"):
            continue
        text = script.get_text()
        if "BreakdanceFrontend.data" in text:
            text = text.replace(r"https:\/\/n2.apx.cx\/acg\/wp-admin\/admin-ajax.php", "")
            text = text.replace(r"https:\/\/n2.apx.cx\/acg\/wp-content\/plugins\/breakdance\/subplugins\/breakdance-elements\/", "/reference/elements/")
            text = text.replace(r"https:\/\/n2.apx.cx\/acg", "")
        if text.strip():
            initializers.append(text)
        script.decompose()
    init_path = PUBLIC / "reference/scripts/homepage-init.js"
    init_path.write_text("/* Original ACG homepage frontend initialization, preserved in order. */\n" + "\n\n".join(initializers) + "\n")
    init_tag = soup.new_tag("script", src="/reference/scripts/homepage-init.js")
    soup.body.append(init_tag)
    enhancements = soup.new_tag("script", type="module", src="/src/homepage.ts")
    soup.body.append(enhancements)

    # The host owns current origin metadata; no private server endpoint is used.
    for link in soup.select('link[rel="canonical"],link[rel="https://api.w.org/"],link[rel="EditURI"]'):
        link.decompose()
    for meta in soup.select('meta[property="og:url"],meta[name="generator"]'):
        meta.decompose()
    for link in soup.select('link[rel="shortlink"],link[rel="alternate"],link[rel="preconnect"],link[rel="dns-prefetch"]'):
        link.decompose()
    for script in soup.select('script[type="application/ld+json"]'):
        script.decompose()
    for meta in soup.select('meta[name="msapplication-TileImage"]'):
        meta.decompose()
    hero = soup.select_one('img.bde-image2-30-131') or soup.select_one('.bde-image2-30-131 img') or soup.select_one('main img')
    if hero:
        for meta in soup.select('meta[property^="og:image"],meta[name="twitter:image"]'):
            if meta.get("property") in ("og:image:width", "og:image:height", "og:image:type"):
                meta.decompose()
            elif meta.get("property") == "og:image:alt":
                meta["content"] = "ACG Human Capital Solutions"
            else:
                meta["content"] = hero["src"]
    if not soup.select_one('meta[name="viewport"]'):
        soup.head.append(soup.new_tag("meta", attrs={"name": "viewport", "content": "width=device-width, initial-scale=1"}))

    soup.head.append(soup.new_tag("link", rel="stylesheet", href="/homepage-accessibility.css"))
    document = "<!doctype html>\n" + str(soup.html) + "\n"
    document = "\n".join(line.rstrip() for line in document.splitlines()) + "\n"
    (CLIENT / "index.html").write_text(document)
    manifest = {"source": SOURCE, "assets": mapping, "inlineInitializerCount": len(initializers)}
    (PUBLIC / "reference/asset-manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"Exact homepage generated: {len(raw)} local dependencies; {len(initializers)} source initializers.", flush=True)


if __name__ == "__main__":
    main()
