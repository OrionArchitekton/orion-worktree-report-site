# orion-worktree-report product demo

Recorded local output from v0.1.0. Synthetic data, edited replay; no external provider calls.

### SHOT clean
- target: terminal
- url: index.html?scene=clean
- narration: Orion Worktree Report observes the local repositories you select. In this disposable example, the first scan observes three registered worktrees and reports no uncommitted path overlap.
- action: goto url="index.html?scene=clean"
- action: wait ms=400

### SHOT overlap
- target: terminal
- url: index.html?scene=overlap
- narration: Now two worktrees change the same tracked path. The scan reports the shared path and exits one, with complete coverage. It observes this overlap without deciding which worker should proceed.
- action: goto url="index.html?scene=overlap"
- action: wait ms=400

### SHOT partial
- target: terminal
- url: index.html?scene=partial
- narration: Add an unavailable repository and coverage becomes partial. The known overlap stays visible, while the total is unknown. This report grants no task ownership, file lock or merge permission. The source and walkthrough are linked below.
- action: goto url="index.html?scene=partial"
- action: wait ms=400
