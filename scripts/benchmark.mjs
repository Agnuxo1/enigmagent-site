import { stat } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';

const start = performance.now();
const page = await stat(new URL('../index.html', import.meta.url));
const elapsedMs = Number((performance.now() - start).toFixed(3));
console.log(JSON.stringify({ file: 'index.html', bytes: page.size, readMilliseconds: elapsedMs, externalRuntimeDependencies: 0 }));
