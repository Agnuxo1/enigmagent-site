# AGENTS.md — enigmagent-site

This repository is a dependency-free static entry point for the EnigmAgent project.

## Contract

- Keep the redirect target and canonical URL identical: `https://agnuxo1.github.io/EnigmAgent/`.
- Preserve the visible fallback link for browsers that do not follow meta refresh.
- Do not add JavaScript, analytics, forms, remote assets, embedded secrets, or unverified third-party adoption claims.
- Run `npm test`, `npm run check`, and `npm run benchmark` after changes.
- Keep historical source under `versions/<version>/` with a manifest and SHA-256 evidence.
- This repository has no runtime integrations; do not manufacture ten integrations for a static redirect page. Link to the main project for current technical integrations.
