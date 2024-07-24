# HACKING

This page documents the website infrastructure, build, and technical
decisions.

We use Jekyll to build the website - this helps us with a stable build
system that is supported by GitHub (our host). This is a static site,
build on every push to `main` branch on GitHub using GitHub Actions.

## Guiding Principles

- Re-use templates wherever possible
- Make it easy for editors to add new content - events, testimonials,
  spotlight articles etc.
- Use third-party dependencies as-is, so they're easy to upgrade.
- Avoid using NPM packages to import third-party dependencies.
- Avoid anything that doesn't ship with GitHub Pages default gem.
- Keep performance, accessibility, and usability/SEO in mind.
- Use standard browser and framework features where possible.
- Rely on maintained dependencies.

If you'd like to make content changes to the website, please see
[CONTRIBUTING.md](CONTRIBUTING.md).