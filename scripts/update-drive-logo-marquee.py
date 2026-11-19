#!/usr/bin/env python3
"""Update only the ACG Logo Marquee from locally downloaded Google Drive logos."""
from pathlib import Path
from urllib.parse import quote
import html
import re

ROOT = Path(__file__).resolve().parents[1]
HTML_PATH = ROOT / "client/index.html"
LOGO_DIR = ROOT / "client/public/reference/images/drive-logos"
SECTION_START = '<section class="bde-section-30-1586 bde-section">'
SECTION_END = "</section>"
MARQUEE_CLASS = '<div class="un-logo-bar__marquee-content carousel-type__infinite">'

files = sorted(
    (p for p in LOGO_DIR.iterdir() if p.is_file() and p.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"}),
    key=lambda p: p.name.casefold(),
)
if not files:
    raise SystemExit(f"No Drive logo files found in {LOGO_DIR}")


def logo_markup(path: Path, decorative: bool) -> str:
    relative = "/reference/images/drive-logos/" + quote(path.name)
    alt = "" if decorative else html.escape(path.stem, quote=True)
    hidden = ' aria-hidden="true"' if decorative else ""
    return (
        '  <div class="un-logo-bar__logo-wrapper">\n'
        f'    <img alt="{alt}" class="breakdance-image-object" decoding="async" '
        f'loading="lazy" src="{relative}"{hidden}/>\n'
        "  </div>"
    )

first_pass = "\n".join(logo_markup(p, False) for p in files)
second_pass = "\n".join(logo_markup(p, True) for p in files)
marquee = f"{MARQUEE_CLASS}\n{first_pass}\n{second_pass}\n</div>"

html_text = HTML_PATH.read_text()
start = html_text.index(SECTION_START)
end = html_text.index(SECTION_END, start) + len(SECTION_END)
section = html_text[start:end]
marquee_start = section.index(MARQUEE_CLASS)
# This marquee is the only nested motion content in this section. The final
# closing div immediately before </section> closes the marquee's container.
section = (
    section[:marquee_start]
    + marquee
    + "\n</div></div>"
    + section[section.rfind("</div></div>") + len("</div></div>") :]
)
html_text = html_text[:start] + section + html_text[end:]
HTML_PATH.write_text(html_text)
print(f"Updated Logo Marquee with {len(files)} Drive logos in two seamless passes")
