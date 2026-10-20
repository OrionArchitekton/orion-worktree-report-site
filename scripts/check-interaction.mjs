import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { JSDOM, VirtualConsole } from 'jsdom';

const errors = [];
const console = new VirtualConsole();
console.on('jsdomError', error => errors.push(error));
console.on('error', (...args) => errors.push(args));
const html = fs.readFileSync('dist/index.html', 'utf8');
const dom = new JSDOM(html, {
  url: 'https://www.danmercede.com/works/orion-worktree-report/',
  runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole: console,
});
const { window } = dom;
const base = '/works/orion-worktree-report/';
const until = async predicate => {
  for (let n = 0; n < 250; n++) {
    if (predicate()) return;
    await new Promise(resolve => setTimeout(resolve, 20));
  }
  assert.fail('Built example did not reach the expected state');
};
try {
  for (const script of window.document.querySelectorAll('script[type="module"][src]')) {
    const src = script.getAttribute('src');
    assert.ok(src.startsWith(base));
    window.eval(fs.readFileSync(path.join('dist', src.slice(base.length)), 'utf8'));
  }
  const panel = window.document.querySelector('.observation-panel');
  const buttons = [...window.document.querySelectorAll('[aria-label="Example coverage"] button')];
  assert.equal(buttons.length, 2);
  await new Promise(resolve => setTimeout(resolve, 50));
  assert.match(panel.textContent, /1 REPOSITORY \/ 3 REGISTERED WORKTREES/);
  buttons[1].click();
  await until(() => panel.textContent.includes('PARTIAL COVERAGE · EXIT 3'));
  assert.match(panel.textContent, /2 SELECTED REPOSITORIES \/ REGISTERED TOTAL UNKNOWN/);
  assert.match(panel.textContent, /Observed subset: 1 repository \/ 3 worktrees/);
  assert.match(panel.textContent, /unavailable selection.*not observed/s);
  assert.match(panel.textContent, /Observed subset: 1 shared path · 1 worktree pair/);
  assert.equal(buttons[1].getAttribute('aria-pressed'), 'true');
  buttons[0].click();
  await until(() => panel.textContent.includes('COMPLETE COVERAGE · EXIT 1'));
  assert.match(panel.textContent, /1 REPOSITORY \/ 3 REGISTERED WORKTREES/);
  assert.ok(!panel.textContent.includes('REGISTERED TOTAL UNKNOWN'));
  assert.equal(buttons[0].getAttribute('aria-pressed'), 'true');
  assert.equal(window.document.querySelectorAll('h1').length, 1);
  assert.deepEqual(errors, []);
} finally {
  window.close();
}
process.stdout.write('Built-page hydration and complete/partial/complete interactions passed\n');
