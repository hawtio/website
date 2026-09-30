# AGENTS.md

Guidelines for AI coding agents working on this repository.

## Project Info

The official website and documentation for [hawt.io](https://hawt.io).

- Stack: Gatsby 5 (React 18, TypeScript) + Antora 3.1 (AsciiDoc docs)
- Package manager: Yarn 4+
- Node: 18+
- Commit style: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Repo: <https://github.com/hawtio/website>

## Project Structure

Updates to the documentation should be made to `modules/` (Antora/AsciiDoc docs). `src/` is for site design changes only.

```text
.
├── build/                  # Antora build output (generated, do not edit)
├── docs/                   # GitHub Pages deploy target (public/ renamed by CI, do not edit)
├── modules/ROOT/           # Antora docs source — primary work area
│   ├── nav.adoc            #   Docs navigation
│   └── pages/              #   AsciiDoc content pages
├── public/                 # Gatsby build output (generated, do not edit)
├── src/                    # Gatsby site design (pages, components, CSS)
├── static/                 # Static assets copied to public/
├── supplemental-ui/        # Antora UI overrides
├── ui/                     # Antora UI bundle
├── antora-playbook.yml     # Antora config
├── antora.yml              # Antora component descriptor
└── gatsby-config.ts        # Gatsby config
```

## Documentation Index

Read these documents **only when the task requires it** — do not load them all upfront.

| Document               | When to read                 |
| ---------------------- | ---------------------------- |
| [README.md](README.md) | Setup, local dev, and deploy |

## Essential Commands

```bash
yarn install          # Install dependencies
yarn start            # Dev server: site → :8000, docs → :8001
yarn build:docs       # Rebuild Antora docs only (required after modules/ changes)
yarn build            # Full production build → public/
yarn clean            # Clean Gatsby + build caches
yarn format           # Prettier format
npx http-server public/  # Preview production build locally
```

## Important

- Docs changes under `modules/` are not hot-reloaded. Run `yarn build:docs` manually to see them in the dev server.
- Always run `yarn format` after making any changes.
