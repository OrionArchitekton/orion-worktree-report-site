# Worktree report Works page

Implemented release candidate. Dan approved the package release at the selected destinations; required CI, qualified source review and hosted acceptance remain separate gates. Runtime adoption is outside this release.

Primary seam: a browser consuming the built static page at the canonical Works prefix, backed by initial HTML checks.

1. A developer sees the explicit repository/registered-worktree scope and one synthetic overlap example; one main heading, source and guide links are usable with JavaScript disabled.
2. The example distinguishes complete coverage with a positive observation from a partial result. Adding an unavailable selection shows two selected repositories, an unknown registered total and the known observed subset separately. The unread selection is visible and the positive pair is labeled as an observed subset. Both controls work after hydration of the actual built page. It never implies task ownership, merge safety or an integrated estate service.
3. Installation points to the checksum-pinned guide and exact v0.1.0 release assets. Supported acceptance target and private-path exposure are visible; there are no runtime dependencies.
4. Mobile and desktop layouts remain readable with keyboard focus and reduced motion. Initial markup and hydrated markup agree.
5. Canonical metadata and every asset use the Works prefix, while the external origin serves root-relative upstream files for the hub to proxy. Only the hub supplies robots/sitemap.

MIT code and owner-controlled brand favicons. External project identity: orion-worktree-report-site. The public source repository and its separate Vercel project exist; deployment and canonical hosted acceptance are release-time checks. No estate runtime, credentials or copied .vercel state is included in the source/build. The built-bundle DOM test uses a development-only DOM environment; final browser layout and canonical routing require their own consumer checks.
