import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const html=fs.readFileSync('dist/index.html','utf8');
const base='/works/orion-worktree-report/';
assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
for (const phrase of ['See where your Git worktrees overlap.','COMPLETE COVERAGE','EXIT 1','shared.txt','CPython 3.11.9','Local names need deliberate sharing.']) assert.ok(html.includes(phrase),phrase);
assert.ok(html.includes('rel="canonical" href="https://www.danmercede.com/works/orion-worktree-report/"'));
assert.ok(html.includes('https://www.danmercede.com/guides/git-worktree-overlap-report'));
for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
 const value=match[1];
 if(value.startsWith('#')||value.startsWith('http')) continue;
 assert.ok(value.startsWith(base),value);
 assert.ok(fs.existsSync(path.join('dist',value.slice(base.length))),value);
}
const schema=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(schema['@graph'][0].codeRepository,'https://github.com/OrionArchitekton/orion-worktree-report');
const manifest=JSON.parse(fs.readFileSync('dist/site.webmanifest','utf8'));
assert.equal(manifest.start_url,base);
for(const icon of manifest.icons) { assert.ok(icon.src.startsWith(base));assert.ok(fs.existsSync(path.join('dist',icon.src.slice(base.length)))); }
const image=fs.readFileSync('dist/og-card.png');
assert.equal(image.readUInt32BE(16),1200);assert.equal(image.readUInt32BE(20),630);
assert.ok(!fs.existsSync('dist/robots.txt')&&!fs.existsSync('dist/sitemap.xml'));
assert.ok(!fs.existsSync('.vercel'));
console.log(JSON.stringify({initial_html:true,canonical:true,prefix_assets:true,og:[1200,630],hub_owned_discovery:true}));
