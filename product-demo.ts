export const PRODUCT_DEMO = {
  "slug": "orion-worktree-report",
  "title": "Watch orion-worktree-report in action",
  "disclosure": "Recorded CLI output from the checksum-verified Orion Worktree Report v0.1.0 wheel. Disposable synthetic Git repositories, edited replay; private absolute paths are omitted. Coverage is an observation, not ownership or merge authority. Locally synthesized Dan narration.",
  "transcript": "Orion Worktree Report observes the local repositories you select. In this disposable example, the first scan observes three registered worktrees and reports no uncommitted path overlap. Now two worktrees change the same tracked path. The scan reports the shared path and exits one, with complete coverage. It observes this overlap without deciding which worker should proceed. Add an unavailable repository and coverage becomes partial. The known overlap stays visible, while the total is unknown. This report grants no task ownership, file lock or merge permission. The source and walkthrough are linked below.",
  "publishedVideo": null
} as const;
