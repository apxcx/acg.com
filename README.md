# ACG Reference Replica

A responsive, single-page React recreation of the [ACG Human Capital Solutions homepage](https://n2.apx.cx/acg/). Its modular TSX components, vanilla-CSS design system and authentic locally served images are organized so the frontend works without an application server or database.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev:static
```

The site serves on port 3000. Build a production static bundle with `pnpm build:static`; output is `dist/public/`.

## Source structure

- `client/src/pages/Home.tsx` assembles the one-page section order and accessible reel-preview dialog.
- `client/src/components/acg/Header.tsx` provides the responsive desktop/mobile menu.
- `client/src/components/acg/Hero.tsx` contains the opening copy, proof points, image and continuous client-mark rail.
- `client/src/components/acg/CompanySections.tsx` contains About, mission/vision/values, Expertise, Services, Affiliations and the ACG values composition.
- `client/src/components/acg/Testimonials.tsx` implements the looping, auto-advancing quote carousel; `FAQ.tsx` and `Accordion.tsx` implement contact details and the five-question FAQ with semantic animated controls.
- `client/src/components/acg/Reveal.tsx` provides reusable staggered, scroll-triggered entrance motion.
- `client/src/components/acg/Footer.tsx` provides the source-matched footer; `Insights.tsx` retains the source editorial cards (the reference CSS hides that section at the measured desktop view).
- `client/src/index.css` defines font imports, colors and base type; `client/src/styles/landing.css` contains responsive page styling and interaction states; `client/public/assets/` holds the reference ACG images.

All consultation actions use the source phone link (`tel:63286520211`). The source exposes a reel poster but no playable video asset, so “Watch Reels” opens an accessible poster preview and a consultation action.

For the portable, frontend-only copy, use the standalone source ZIP attached with this project handoff.
