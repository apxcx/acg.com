# Exact ACG homepage implementation

Use the supplied reference at https://n2.apx.cx/acg/ as the design and behavior contract. Continue the existing ACG project and homepage route. The active page uses the reference's public HTML, CSS, JavaScript, responsive rules, copy and media rather than a redesigned approximation.

The page is static HTML5. Original scripts own menus, scroll reveals, counters, three Swipers, FAQs and accordions. The TypeScript module entry does not mount React, rewrite the DOM, or invent actions on source placeholder buttons. A backend/database is not needed. Retain Inter/DM Sans fonts, green palette, source photography, image layering, class selectors and section hierarchy.

The Vite root is `client/`. Its `index.html` holds source section markup. `client/public/reference/` separates styles, scripts, images and fonts; the manifest maps source URLs to local files. Former inline style blocks are separate linked CSS files, while source initializers are combined in order in `homepage-init.js`. `client/src/homepage.ts` documents the unchanged control ownership. `homepage-accessibility.css` adds only focus/reduced-motion support. The static bundle is `dist/public/`; the single page route `/` is declared in `/manus-routes.json`.

Keep source headers, numerical proof points, copy, legal notice, source layout states and animation timing. The client rail is 72 marks in 150px boxes with 120px gaps and a 130-second linear loop. Swipers preserve their own slide-group, speed, pagination and autoplay settings. Original telephone/email anchors remain functional. Do not fabricate videos, pages or actions on source no-op buttons. Correct the misspelled email scheme only; remove unnecessary WordPress emoji/prefetch/discovery metadata and use local paths for runtime configuration/social assets.

Remove the earlier React approximation from the active source tree. Deliver a minimal standalone archive containing the exact HTML/CSS/JS/media and run/build instructions. Preserve current static build settings and logo metadata. Save the intended correction through the canonical homepage checkpoint without enabling/requesting publication.
