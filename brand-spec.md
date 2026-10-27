# ACG source-reference specification

**Mode:** Preserve the supplied source design exactly. The active homepage now uses the reference's original public HTML/CSS/browser scripts and its images/fonts, all served locally. Do not recompose sections or replace assets with generated imagery. Visual variance 0/10; brand fidelity 10/10; source-driven animation retained.

**Reference:** [ACG homepage](https://n2.apx.cx/acg/). The page uses a pale near-white introduction, dark-green typography, a 2×2 green proof grid and overscaled collaborative-training photo. The long page then moves through a continuous client logo strip, company/mission/vision/values, expertise accordion, services and partner/case study/testimonial/FAQ content. Several case-study/insights elements remain hidden as they are in the reference CSS.

## Source and asset organization

`client/index.html` contains the source-generated homepage markup. `client/public/reference/styles/`, `scripts/`, `images/` and `fonts/` contain the locally mirrored CSS, behavior scripts, artwork and font files. `asset-manifest.json` maps public source asset URLs to local paths. All 147 assets resolve locally; the live page loads without contacting the original host for CSS, fonts, scripts or images. The public images are from the reference website itself, including the logo/hero/about/service, brand, client and partner marks. Preserve their responsive variants and aspect ratios.

## Measured source design

At the reference's 1280px browser viewport, the page content is 1265px wide after its scrollbar and the header is 171px tall. At desktop, the H1 element begins at x=65/y=225 and is Inter 700 at 80/80px with -8px letter spacing. Its paragraph is 536px wide in DM Sans 20px/28px. The consultation CTA is 232×58px. The proof panel begins at y=451 and is a 2×2 green grid, aligned over the photo. The image is intentionally enlarged and clipped; its scale/parallax is controlled by the source initializer. The visible consultation label is “Get Consultation.”

The reference defines desktop-to-tablet breakpoints at max-widths 1119px and 1023px, and phone-landscape/portrait breakpoints at 767px and 479px. The screenshot checked at 390px keeps the original hamburger header, stacks the copy and CTA, then shows the four proof points before the same photograph. Avoid a horizontally fixed desktop canvas at narrow widths.

Section heights at the inspected desktop width: intro 709px; photo-and-proof continuation 473px; client-logo rail 250px; About 381px; mission/vision/values 637px; expertise 741px; services 972px; affiliations 996px; second values section 1,311px; testimonials 1,271px; and FAQ 963px. Main section classes and their spacing come from original stylesheets and should not be renamed.

## Original motion and interaction behavior

The local bundle loads the original Breakdance, Awesome Menu, GSAP 3.12.2, ScrollTrigger, entrance, counter, parallax, FAQ, advanced-accordion and Swiper 8 scripts before the 78 source `DOMContentLoaded` initializers. The header uses the native responsive dropdown menu. Counters animate toward their original values. Entrances repeat/trigger per the source settings, and the hero photo retains original parallax. The local reduced-motion rule pauses the logo rail and the small added focus rule does not affect normal screenshots.

Three Swipers retain distinct source settings: the affiliations slider starts at its original initial position, shows three slides on desktop/one on portrait tablet, uses 2,000ms transitions and bullets, and does not autoplay. The middle slider is a two-at-a-time, 1,000ms, manually navigated case study panel without pagination. The testimonial slider displays one slide, loops, autoplays every 3,000ms and uses the 1,000ms default transition. The client logo rail is not Swiper: it contains 72 image instances with 150×150px wrappers, 120px gaps and a 130-second linear loop.

Source accordions and FAQs begin collapsed and retain their own smooth toggle handlers. The source contains no playable Watch Reels URL and no local article, Gallery or legal destination; do not fabricate pages/video. Phone consultation links remain `tel:63286520211`; the locally decoded public email remains available with a corrected `mailto:` scheme.
