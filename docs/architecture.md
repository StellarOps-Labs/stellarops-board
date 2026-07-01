# Architecture

StellarOps Board is a Next.js Pages Router application that separates presentation, stateful hooks, pure scoring logic, and mock data. The MVP is intentionally local-first so maintainers can review the workflow without creating tokens or connecting a repository.

## Frontend Architecture

Routes live in `src/pages`. The homepage explains positioning and the dashboard route renders the maintainer review surface. Shared navigation, footer, and dashboard modules live in `src/components`.

## Component Layer

Components are focused on one dashboard responsibility: summary metrics, issue table, readiness score, label coverage, repo health, and workflow status. Components accept typed props and delegate calculations to `src/lib` or hooks.

## Hook Layer

`useIssueFilters` owns filter state and derived issue lists. `useIssueReadiness` aggregates readiness results. `useRepoHealth` memoizes repository health evaluation. Hooks keep page files readable and make behavior easy to test.

## Scoring Logic Layer

`src/lib/issueReadiness.ts` scores issues from 0 to 100 using weighted readiness fields: problem statement, expected behavior, files to update, acceptance criteria, difficulty, labels, and Stellar/Soroban relevance. The same layer returns readiness level, missing fields, and suggestions.

## Mock Data Layer

`src/utils/mockData.ts` contains sample issues, labels, and repo health signals. The data is designed to show ready, review, and weak states in the dashboard.

## Future GitHub API Integration

Future GitHub integration should keep API access behind a repository service layer instead of calling GitHub directly from components. The first service should import issues, labels, templates, workflow status, and repository files, then map them into the existing domain types.
