# ACG Reference Design Spec

**Design Read:** One-page B2B human-capital website, serving enterprise leaders and HR decision makers; preserve-mode exact reference replication. Visual variance 1/10, motion intensity 6/10, information density 6/10, asset dependence 10/10, brand fidelity 10/10. The opening view balances an expansive brand headline and a four-cell proof-point block before the large collaborative-training photograph. The overall temperature is clear, optimistic, and credible; small-screen composition stacks the same message and proof points without losing the source hierarchy.

**Reference:** [ACG reference homepage](https://n2.apx.cx/acg/). The site is an editorial human-capital-services landing page, with familiar white/near-white surfaces, deep ACG green, spacious section breaks, alternating image/text compositions, a continuous client-logo rail, service navigation, value blocks, a testimonial carousel, FAQs, editorial cards, and a dark-green inquiry footer.

## Brand assets

All copied, self-hosted visual assets are from the reference site's own `/wp-content/uploads/sites/35/` image paths. Do not replace them with generated/stock imagery or redraw its logo. Primary wordmark: `client/public/assets/acg-logo-transparent.webp`; alternate lockups: `acg-logo-1.webp` and `logo-4-1.png`. Core imagery: `hero-4-1-1-1536x593.webp`, `about-1-1-1.webp`, `about-1-2-1.webp`, `service-4-1-1.webp`, `choose-4-1-1.webp`, and `case-4-1.webp`. Service marks: `lifo.webp`, `its-logo.webp`, `sqs-logo.webp`, `future-fit-collab-1.webp`. Reuse the reference's own affiliate and client logo images in their original carousels/strips.

## Design system

- **Colors:** ACG brand green `#0D5901`; heading green `#113F1F`; body charcoal `#383F3E`; first-viewport pale blue-gray `#F8FAFC`; white `#FFFFFF`; light divider `#E2E8F0`.
- **Typography:** Body uses DM Sans (the reference's actual body font). Use the original system/Inter-style heavy sans display treatment for headlines, keeping the original uppercase hero headline and tight leading. Download/use DM Sans and Inter web fonts, with system sans-serif fallback.
- **Spacing and framing:** Desktop centered content on an approximately 1,180–1,230px reading width; broad full-bleed photo and logo sections; opening block begins below a white header with generous top padding. Use a 4px base spacing rhythm, scale containers fluidly, and stack/compact layouts at the source's tablet/mobile breakpoints.
- **Shape/elevation:** Predominantly square, restrained surfaces; modest 6–10px rounding for photos/buttons and larger radius only where the source uses it. No generic UI-card shadow treatment. Thin quiet borders divide stat/service items.
- **Motion/interaction:** Preserve the source's reveal-in movement and staggered entrance. Use a soft `cubic-bezier(.22,.61,.36,1)` reveal and 300ms ease-in-out micro-interactions; the logo rail moves continuously and pauses on hover/focus. Reduced-motion preference disables auto-motion. Navigation menus and mobile menu remain keyboard accessible. Testimonials support autoplay, prev/next and pagination. FAQ items expose proper `aria-expanded` and animate their answer panels.

## Reference image inventory

- `acg-logo-transparent.webp` / `acg-logo-1.webp` / `logo-4-1.png` — authentic ACG logo locks.
- `hero-4-1-1536x593.webp` — collaborative training image used below the introduction.
- `about-1-1-1.webp`, `about-1-2-1.webp` — company-story photos.
- `service-4-1-1.webp`, `choose-4-1-1.webp`, `case-4-1.webp` — service, value and case-study visuals.
- `logo-*.webp` — client carousel marks; `csc.webp`, `pmap-logo.webp`, `pahrodf.webp`, `tesda.webp`, `pstd.webp` — affiliated organizations.
- `lifo.webp`, `its-logo.webp`, `sqs-logo.webp`, `future-fit-collab-1.webp` — product/service marks.


## Measured source details

At an available 1265px desktop viewport, the reference header is 171px high. The H1 begins at x=65/y=225, is Inter 700 at 80/80px, and uses -8px letterspacing. Its paragraph is 536px wide, DM Sans 20px/28px; its consultation button is 232×58px. The green 2×2 proof block is 436×258px at x=809/y=451. The collaborative hero image is intentionally overscaled to 1715×662px at x=-225/y=614, inside clipped viewport bounds. The 893px tablet screenshot uses the 55px/-3px H1 rule and the photo begins directly below the text/proof layout.

The computed desktop source section heights are: opening content 709px; overlapping hero image/logos sequence 473px + 250px; About 381px; Mission/Vision/Values 637px; Expertise 741px; Services 972px; Affiliations 996px; values 1,311px; Testimonials 1,271px; FAQ 963px. Case studies and Insights are in markup but their source CSS sets both sections to `display:none` at the measured desktop view.

The source Affiliated Organizations Swiper shows three slides per view at desktop, one per view at portrait-tablet widths, starts on slide 1, uses bullets, 2,000ms slide speed, and has autoplay disabled. The testimonial swiper loops, autoplays every 3,000ms, and transitions in 1,000ms. The client marks are a separate continuous rail. Keep all three controls distinct rather than treating every carousel as a single slider configuration.
