# EnigmAgent project portal

This repository contains the public entry point for the [EnigmAgent](https://agnuxo1.github.io/EnigmAgent/) open-source project.

## What this repository does

`index.html` is a dependency-free, accessible redirect page. It uses a standards-based meta refresh and a visible fallback link so that browsers with automatic navigation disabled can still reach the project. The page contains no JavaScript, forms, analytics, third-party assets, or embedded credentials.

The maintained implementation and technical documentation live in the [main EnigmAgent repository](https://github.com/Agnuxo1/EnigmAgent). This repository does not claim upstream adoption by, or endorsement from, any external project.

## Local validation

Requirements: Node.js 20 or newer.

```text
npm ci
npm test
npm run check
npm run benchmark
```

The tests inspect the real HTML, redirect target, canonical URL, fallback link, language declaration, and absence of executable script tags. The benchmark reports the measured page size and is deterministic.

## Deployment

The GitHub Actions workflow checks the page on Node.js 20 and 22 across Ubuntu and Windows. GitHub Pages can serve the repository directly as a static site; no build step is required.

## Version history

The complete initial two-file tree is preserved under [`versions/1.0.0/`](versions/1.0.0/) with a source archive, manifest, and SHA-256 evidence.

## License

The original repository did not include a license file. New maintenance files are provided as community infrastructure, but no license is inferred for the original material; review and add the intended project license before redistributing it.
