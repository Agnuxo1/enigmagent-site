import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const target = 'https://agnuxo1.github.io/EnigmAgent/';

const checks = [
  ['doctype', /^<!doctype html>/i.test(html)],
  ['language', /<html\s+lang="en">/i.test(html)],
  ['refresh target', html.includes(`content="0; url=${target}"`)],
  ['canonical target', html.includes(`<link rel="canonical" href="${target}">`)],
  ['fallback link', html.includes(`<a href="${target}">`)],
  ['no executable script', !/<script\b/i.test(html)],
  ['content security policy', html.includes('Content-Security-Policy')]
];

const failed = checks.filter(([, passed]) => !passed);
if (failed.length) {
  throw new Error(`Site checks failed: ${failed.map(([name]) => name).join(', ')}`);
}

console.log(`Site checks passed: ${checks.length}`);
