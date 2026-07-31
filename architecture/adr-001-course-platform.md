# ADR 001: Static, documentation-first course site

Status: accepted

Use generated static HTML, CSS, and small progressive-enhancement JavaScript. This keeps GitHub Pages publishing simple, makes every lesson readable without a client framework, and keeps the repository's complexity focused on Azure rather than the course renderer.

Tradeoff: shared layout changes require a rebuild. The build is deterministic and fast, so that cost is acceptable.
