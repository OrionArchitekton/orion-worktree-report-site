---
verified: 2026-10-19
review_after: 2026-11-18
topics: [works-site, worktree-report]
references: [../../vite.config.ts, ../../App.tsx, ../../constants.ts, ../../vercel.json, ../../specs/worktree-report-product-page-spec.md]
---

# Worktree report Works page

Dan has approved the release. The public source repository and the separate Vercel project `orion-worktree-report-site` have been created. Deployment and hosted acceptance remain pending. The intended external Vercel origin is `https://orion-worktree-report-site.vercel.app/`; verify its project identity before deploying, and use a revised reviewed hub mapping if the origin changes. No DNS, secret, runtime service or copied .vercel project state is included.

Local validation: `npm ci`, `npm run typecheck`, `npm test`, `npm audit`. Serve the build locally at `/works/orion-worktree-report/` for desktop/mobile, keyboard, reduced-motion, no-script and hydration checks. The local server must listen only on 127.0.0.1. The initial HTML contains the real page, including the complete synthetic observation; JavaScript switches the explanatory example to partial coverage. It performs no scan or network API call.

The public repository contains fresh selected history. Required CI and a qualified non-author human review remain gates. Publish and verify the accepted core files first, then stage the named origin for file-level preflight. Enable the hub guide/index/sitemap and prefix-stripped proxy only after the core is available and the origin is verified. Source and guide links in this candidate identify release destinations; they do not establish package, deployment or guide availability.

The hub owns the no-slash redirect, bare `/works/orion-worktree-report/` rewrite and `/works/orion-worktree-report/:path*` rewrite before its SPA catch-all. Do not create a physical hub route or another robots/sitemap. The origin serves dist at root: strip the canonical prefix when checking each upstream JS/CSS/image/manifest file, with content type and byte digest checks. The unprefixed origin is an upstream file endpoint, not a second supported browser address. Canonical consumer rendering is verified only at the Works URL after the hub release.

Release verification: unauthenticated Works HTML has the exact title/canonical/source/guide links; every prefixed asset returns the right type/bytes; the guide has its own canonical, visible body and Article data. Inspect desktop/mobile, toggle behavior, no-JS and keyboard focus. Origin HTTP 200 alone does not prove any of this. No background monitor or timer is created.

Rollback after separately approved release: protected revert of the hub's new entry/redirect/two rewrites/sitemap and guide, plus same-project redeployment of the accepted known-good build if needed. Do not alter the original helper, other Works routes or estate runtime. A PyPI release cannot be replaced in place; any later package correction requires a new version and approval.
