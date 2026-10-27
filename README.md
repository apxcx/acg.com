# ACG — source-faithful homepage replica

This project reproduces the [ACG landing page/homepage](https://n2.apx.cx/acg/) with its original public frontend markup, responsive CSS, photos/logos, fonts and motion settings. It is not a redesigned approximation.

## Run and build

```sh
pnpm install --frozen-lockfile
pnpm dev:static
```

The development page uses port 3000. `pnpm build:static` produces `dist/public/`. No WordPress server, backend, database, credentials or remote reference assets are required. `pnpm check` runs TypeScript diagnostics.

## Source organization

`client/index.html` contains the original homepage. Local assets under `client/public/reference/` are separated into `styles/`, `scripts/`, `images/` and `fonts/`. The manifest records source-to-local file mappings. Former inline CSS is linked separately; the original 78 initializer blocks are kept in order in `scripts/homepage-init.js`.

The original scripts own the menu, reveal/parallax effects, counters, three Swipers, FAQs and accordions. The 72-image client rail retains its 150px boxes, 120px gaps and 130-second loop. `client/src/homepage.ts` does not rewrite the DOM or override controls. `client/public/homepage-accessibility.css` adds keyboard-focus and reduced-motion support without changing normal page layout.

The downloadable standalone archive contains only active HTML/CSS/JS/media and minimal Vite setup. Run `npm install`, `npm run dev`, `npm run typecheck` or `npm run build` there. `scripts/sync-reference.py` records the optional repeatable mirror process, requiring Python, requests and BeautifulSoup.

Placeholder source buttons—including Watch Reels, Gallery, legal/article and href-less consultation buttons—retain their original behavior. The replica does not invent footage, pages or destinations. Original telephone anchors remain functional; the public email is decoded locally and its `mailtto:` typo is corrected to `mailto:`. Nonvisual WordPress emoji/prefetch/discovery metadata is omitted, runtime settings use local paths, and social-card imagery points to the local hero asset.
