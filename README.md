# StellarOps Board

Contributor-readiness dashboard for Stellar and Soroban maintainers.

StellarOps Board is an open-source dashboard from StellarOps Labs for reviewing issue quality, label coverage, repository readiness, and maintainer workflow status. The MVP runs in mock mode: no GitHub API token is required, and the included data is intentionally local and transparent.

## Why This Exists

Many Stellar and Soroban repositories want contributors, but maintainers still need a fast way to check whether their backlog is ready. A contributor-ready issue needs a clear problem statement, expected behavior, likely files, acceptance criteria, difficulty, labels, and ecosystem relevance. StellarOps Board turns those signals into a review surface.

## Features

- Landing page explaining issue readiness and maintainer workflow value
- Dashboard summary for readiness, ready issues, repo health, and label coverage
- Issue readiness scoring from 0 to 100 with missing fields and suggestions
- Filterable issue table by difficulty, label, and readiness status
- Label coverage tracking for common contributor labels
- Repo health cards for README, contributing guide, license, docs, tests, CI, templates, open issues, and labels
- Maintainer workflow status for drafted, reviewed, labeled, ready, PR review, and CI states
- Vitest and React Testing Library coverage for logic, hooks, and UI components

## Tech Stack

- Next.js Pages Router
- React
- TypeScript
- Tailwind CSS
- Vitest
- React Testing Library
- ESLint
- GitHub Actions CI

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Development Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run test:watch
npm run build
```

## Project Structure

```text
src/components   Reusable dashboard, layout, issue, label, and health UI
src/hooks        Filter and scoring hooks used by dashboard components
src/lib          Readiness, label coverage, repo health, and workflow logic
src/pages        Next.js Pages Router routes
src/types        Shared TypeScript domain types
src/utils        Constants, formatting, and mock data
tests            Unit and component tests
docs             Maintainer and contributor documentation
```

## Dashboard Workflow

1. Review summary metrics for average readiness, ready issues, repo health, and labels.
2. Check weak issues in the readiness score panel.
3. Filter the issue table by difficulty, label, or readiness status.
4. Fix missing fields such as acceptance criteria or Stellar/Soroban relevance.
5. Review label coverage and repository health before publishing contributor calls.

## Relationship To StellarOps Kit

StellarOps Kit helps maintainers create better issues. StellarOps Board helps maintainers review, organize, and monitor those issues after they exist. This project is independent and does not claim official affiliation with Stellar, Soroban, Drips Wave, or GrantFox.

## Roadmap

- Phase 1: mock issue dashboard, readiness scoring, label coverage, repo health cards, filters, docs, tests, and CI
- Phase 2: GitHub issue import, repository scan, persistent filters, screenshot docs, accessibility improvements
- Phase 3: GitHub API integration, organization dashboard, contributor analytics, PR tracking, project board export, StellarOps Kit integration

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md), choose a focused issue, run tests locally, and keep copy honest about mock mode. Good first contributions include improving docs, adding test cases, refining accessibility, or preparing GitHub import scaffolding.

## License

MIT. See [LICENSE](LICENSE).
