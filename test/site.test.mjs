import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const target = 'https://agnuxo1.github.io/EnigmAgent/';
const escapedTarget = target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

test('declares an accessible English document', () => {
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /<html\s+lang="en">/i);
  assert.match(html, /name="viewport"/i);
});

test('redirects and exposes a manual fallback to the canonical portal', () => {
  assert.match(html, new RegExp(`content="0; url=${escapedTarget}"`));
  assert.match(html, new RegExp(`<link rel="canonical" href="${escapedTarget}">`));
  assert.match(html, new RegExp(`<a href="${escapedTarget}">`));
});

test('does not add executable or third-party runtime content', () => {
  assert.doesNotMatch(html, /<script\b/i);
  assert.doesNotMatch(html, /<iframe\b/i);
  assert.match(html, /Content-Security-Policy/);
});
