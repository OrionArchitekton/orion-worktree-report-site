# Orion Worktree Report Works site

MIT product page for the separately licensed `orion-worktree-report` core. Canonical route: https://www.danmercede.com/works/orion-worktree-report/ . Guide: https://www.danmercede.com/guides/git-worktree-overlap-report .

Use `npm ci`, `npm run typecheck`, `npm test` and `npm audit`. `npm run dev` and `npm run preview` listen on loopback. Static initial HTML and client hydration use the same App. The example is illustrative, with no Git reader, reporting endpoint or estate integration.

Deployment identity, proxy ordering, verification and rollback are in [the runbook](docs/runbooks/works-site.md). Build output alone does not establish hosted availability. Never copy another site's `.vercel` directory or credentials.
