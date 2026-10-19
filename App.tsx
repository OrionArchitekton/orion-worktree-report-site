import { useState } from 'react';
import { PRODUCT_DATA as p } from './constants';

function Observation() {
  const [partial, setPartial] = useState(false);
  return <section aria-labelledby="example-title" className="my-12 md:my-16">
    <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
      <h2 id="example-title" className="font-mono text-xs tracking-widest text-neutral-600">ONE SYNTHETIC EXAMPLE</h2>
      <div className="flex gap-2 text-xs" role="group" aria-label="Example coverage">
        <button type="button" aria-pressed={!partial} onClick={() => setPartial(false)} className="example-switch border px-3 py-2 rounded">Complete</button>
        <button type="button" aria-pressed={partial} onClick={() => setPartial(true)} className="example-switch border px-3 py-2 rounded">Add unavailable selection</button>
      </div>
    </div>
    <div className="observation-panel rounded p-5 md:p-7 font-mono text-sm leading-7">
      <p className="text-neutral-300 text-xs mb-5">1 REPOSITORY / 3 REGISTERED WORKTREES</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs md:text-sm">
        <div className="col-span-2 md:col-span-1"><p className="text-neutral-400 text-xs">main</p><p className="mt-2">clean</p></div>
        <div><p className="text-neutral-400 text-xs">worker-a</p><p className="mt-2 text-copper-light break-all">shared.txt</p></div>
        <div><p className="text-neutral-400 text-xs">worker-b</p><p className="mt-2 text-copper-light break-all">shared.txt</p></div>
      </div>
      <div aria-live="polite" aria-atomic="true" className="border-t border-neutral-700 mt-6 pt-4">
        <p>{partial ? 'PARTIAL COVERAGE · EXIT 3' : 'COMPLETE COVERAGE · EXIT 1'}</p>
        <p className="text-copper-light mt-1">1 shared path · 1 worktree pair</p>
        <p className="text-neutral-300 text-xs mt-3">{partial ? 'One added repository is unavailable. Registered total: unknown. The observed pair remains a subset.' : 'All three registered worktrees were observed. The two dirty checkouts share one exact path.'}</p>
      </div>
    </div>
    <p className="text-xs text-neutral-600 mt-3 leading-5">Illustration of the guide’s disposable example. A shared path is an observation; it does not establish a merge conflict or who owns the work.</p>
  </section>;
}
const Title = ({ number, children }: { number: string; children: string }) => <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-600 border-b border-neutral-200 pb-3 mb-5"><span className="text-copper-dark" aria-hidden="true">{number} // </span>{children}</h2>;

export default function App() {
  return <>
    <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white p-2" href="#main-content">Skip to main content</a>
    <main id="main-content" tabIndex={-1} className="max-w-3xl mx-auto px-6 py-10 md:py-16 text-neutral-900">
      <nav aria-label="Product navigation" className="mb-12 flex flex-wrap gap-3 justify-between text-xs font-mono text-neutral-600"><a href="https://www.danmercede.com/works" className="hover:text-copper-deep">DAN MERCEDE / WORKS</a><span>PYTHON · MIT · v0.1.0</span></nav>
      <header>
        <p className="font-mono text-sm text-copper-deep mb-4 break-all">{p.name}</p>
        <h1 className="font-mono text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-5">See where your Git worktrees overlap.</h1>
        <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-xl">Choose local repositories and see which registered worktrees share an uncommitted path. Every report says what it observed and what it could not check.</p>
        <div className="flex flex-wrap gap-5 items-center mt-7"><a href={p.guide} className="bg-copper-dark hover:bg-copper-deep text-white px-5 py-3 rounded text-sm font-medium">Try the disposable example</a><a href={p.github} className="text-sm underline underline-offset-4 hover:text-copper-deep">View on GitHub</a></div>
      </header>
      <Observation/>
      <section className="mb-12">
        <Title number="01">Start with coverage</Title>
        <p className="leading-7 text-neutral-700">A clean-looking answer helps only when every selected scope was observed. Missing checkouts, unsupported features, timeouts, limits and detected changes stay visible. Partial coverage never becomes “no overlap observed.”</p>
        <p className="leading-7 text-neutral-700 mt-4">Dirty paths include staged, unstaged and individual nonignored untracked files. Renames retain both path roles. Exact bytes determine identity, so unusual filenames stay distinct. Committed-only branch differences and ignored files are outside this report.</p>
      </section>
      <section className="mb-12" id="quickstart">
        <Title number="02">Select the repository yourself</Title>
        <pre className="bg-neutral-100 p-5 rounded overflow-x-auto text-xs leading-6"><code>{p.install}</code></pre>
        <p className="text-sm leading-7 text-neutral-700 mt-4">No implicit directory search or fleet discovery. The <a className="underline underline-offset-4" href={p.guide}>guide</a> supplies the pinned installer, wheel checksum, two-worktree walkthrough and removal steps. Use the <a className="underline underline-offset-4" href={p.release}>v0.1.0 release files</a> in a dedicated environment with its own Python interpreter.</p>
        <p className="text-xs leading-6 text-neutral-600 mt-3">Tested target: CPython 3.11.9, Git 2.43.0, Linux x86_64 under WSL2, local ext4. Other platforms and versions remain unverified. No Python runtime dependencies.</p>
      </section>
      <section className="mb-12">
        <Title number="03">Evidence for your next decision</Title>
        <dl className="space-y-6 text-sm leading-6">
          <div><dt className="font-medium">An observation grants no authority.</dt><dd className="text-neutral-700">The command assigns no task, locks no file and decides no merge. Two matching samples are not an atomic snapshot or a fence against another writer.</dd></div>
          <div><dt className="font-medium">Repository state stays in your hands.</dt><dd className="text-neutral-700">On supported stable repositories, scans initiate no writes to objects, refs, index, configuration, working files or registrations. No cleanup, prune, repair, fetch, daemon or automatic hook. Access-time bookkeeping is excluded; trusted Git and cooperative configuration are required.</dd></div>
          <div><dt className="font-medium">Local names need deliberate sharing.</dt><dd className="text-neutral-700">Reports contain absolute paths, branch names and filenames. Review and sanitize before sharing. The reporter emits no file contents, diffs, remotes or raw Git diagnostics.</dd></div>
        </dl>
        <p className="border-t border-neutral-200 mt-7 pt-5 text-xs text-neutral-600 leading-6">A separate tool with a clear role: PM coordinates work; browser and phone interact; Handoff carries continuity; Results retains output. Worktree Report supplies an observation. Installing it creates no integration or change to those packages.</p>
      </section>
      <footer className="border-t border-neutral-200 pt-7 text-sm"><div className="flex flex-wrap gap-6"><a className="underline underline-offset-4 hover:text-copper-deep" href={p.guide}>Follow the guide</a><a className="underline underline-offset-4 hover:text-copper-deep" href={p.github+'/blob/main/NOTICE'}>Attribution and license notices</a></div><p className="text-xs text-neutral-600 mt-6">MIT licensed. Built by Dan Mercede. Core ECC acknowledgment retained in NOTICE.</p></footer>
    </main>
  </>;
}
