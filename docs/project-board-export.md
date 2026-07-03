# Project Board Export Guide

StellarOps Board is currently a mock-mode dashboard, but maintainers can still
use its issue shape as a practical export contract for GitHub Projects,
spreadsheets, and planning documents. The goal is to share a contributor-ready
snapshot without losing the readiness signals that make the board useful.

## When to Export

Export a snapshot when you need to:

- prepare a community call or contributor onboarding session
- share a curated list of good first issues with another team
- move planning data into GitHub Projects or a spreadsheet
- attach a backlog snapshot to a grant, roadmap, or ecosystem update
- review readiness trends outside the live dashboard

Prefer exporting after maintainers have reviewed weak issues and filled in
missing acceptance criteria, likely files, and Stellar/Soroban relevance.

## Recommended Fields

Use these fields as the baseline for any export:

| Field | Purpose |
| --- | --- |
| `id` | Stable board identifier such as `SOB-101`. |
| `title` | Contributor-facing issue title. |
| `repository` | Repository or project area that owns the work. |
| `difficulty` | Contributor effort level: `Beginner`, `Intermediate`, or `Advanced`. |
| `labels` | GitHub labels or planning tags, especially ecosystem and type labels. |
| `status` | Maintainer workflow state: `Draft`, `Review`, `Ready`, or `Blocked`. |
| `assignee` | Current owner or `Unassigned`. |
| `lastUpdated` | Snapshot freshness marker. |
| `readinessScore` | Numeric readiness score from the board. |
| `readinessLevel` | Human-readable score band: `Ready`, `Needs work`, or `Weak`. |
| `missingFields` | Fields maintainers should add before promotion. |
| `acceptanceCriteria` | Objective review checks for contributors and reviewers. |
| `filesToUpdate` | Likely files or folders contributors should inspect. |
| `stellarRelevance` | Why the issue matters to Stellar, Soroban, wallets, docs, or ecosystem tooling. |

Keep the raw issue URL as an extra field once GitHub import is added. Until then,
use `id` and `repository` together as the stable reference.

## GitHub Projects Export

For GitHub Projects, map board fields to project fields:

| StellarOps Board | GitHub Projects field |
| --- | --- |
| `title` | Title |
| `repository` | Repository |
| `status` | Status |
| `difficulty` | Single-select `Difficulty` |
| `readinessLevel` | Single-select `Readiness` |
| `readinessScore` | Number `Readiness score` |
| `labels` | Labels |
| `lastUpdated` | Date `Last reviewed` |
| `stellarRelevance` | Text `Ecosystem relevance` |

Recommended workflow:

1. Filter the board to `Ready` or `Needs work` items.
2. Copy the relevant fields into a CSV or GitHub Projects table view.
3. Keep `Draft` and `Weak` items out of public contributor boards unless the
   goal is maintainer triage.
4. Add a project view grouped by `Difficulty` and sorted by readiness score.
5. Review the export before public calls so stale `Blocked` issues are not
   promoted.

## Spreadsheet Export

Spreadsheets are useful for cross-repo planning and community review. Use one row
per issue and normalize arrays into readable cells:

```csv
id,title,repository,difficulty,status,readinessScore,readinessLevel,labels,filesToUpdate,stellarRelevance
SOB-101,"Add Soroban contract event examples to maintainer docs",stellarops-kit,Beginner,Ready,100,Ready,"good first issue; documentation; soroban","docs/soroban-events.md; README.md","Improves Soroban developer documentation for contributor tasks."
```

Suggested spreadsheet views:

- `Ready beginner issues`: filter `difficulty = Beginner` and `readinessLevel = Ready`.
- `Needs maintainer work`: filter `readinessLevel != Ready` and sort by `missingFields`.
- `Ecosystem coverage`: group by `stellarRelevance` themes such as Soroban,
  wallet, Stellar docs, testing, and frontend.

## Planning Document Snapshot

For planning docs, keep the export narrative instead of dumping every field:

```md
## Contributor-ready snapshot

- Ready issues: 8
- Beginner-ready issues: 5
- Weak issues needing maintainer edits: 3
- Most common missing field: acceptance criteria

### Highlights

| Issue | Repo | Difficulty | Readiness | Next step |
| --- | --- | --- | --- | --- |
| SOB-101 | stellarops-kit | Beginner | Ready | Promote in next community call |
| SOB-103 | stellarops-board | Advanced | Weak | Add expected behavior and acceptance criteria |
```

Use this format for release planning, ecosystem updates, or maintainer syncs
where readers need decisions more than raw data.

## Quality Checks Before Sharing

Before exporting, confirm:

- readiness scores were recalculated after any issue edits
- `Ready` items include acceptance criteria and files to update
- `stellarRelevance` is specific enough for ecosystem reviewers
- labels are consistent with the receiving GitHub Project or spreadsheet
- `lastUpdated` reflects the snapshot date
- blocked or stale work is clearly marked

These checks keep exported board data useful outside the app and reduce the
chance that contributors pick up ambiguous work.
