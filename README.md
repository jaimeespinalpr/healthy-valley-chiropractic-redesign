# Healthy Valley Chiropractic — Redesign

A modern redesign of the Healthy Valley Chiropractic website (State College, PA), built with [Astro](https://astro.build) and Tailwind CSS 4.

**Live site:** https://jaimeespinalpr.github.io/healthy-valley-chiropractic-redesign/

## Highlights

- Immersive full-screen hero using the practice's own photography
- 18 static pages: home, 8 service pages, 8 policy pages, and a new patient special page — no links out to the original site
- Brand palette drawn from the official logo (navy, lime, mint)
- Scroll-reveal animations, marquee of conditions, and a parallax welcome band
- Services, testimonials, hours (with "today" highlight), map, and contact — all from the official site
- Fully responsive with a mobile menu, and respectful of `prefers-reduced-motion`

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

Deployment to GitHub Pages runs automatically on every push to `main` (see `.github/workflows`).
