import type { Issue } from "@/types/issue";
import type { RepoHealthInput } from "@/types/repo";

export const mockIssues: Issue[] = [
  {
    id: "SOB-101",
    title: "Add Soroban contract event examples to maintainer docs",
    repository: "stellarops-kit",
    difficulty: "Beginner",
    labels: ["good first issue", "documentation", "soroban"],
    status: "Ready",
    assignee: "Unassigned",
    lastUpdated: "2026-06-24",
    problemStatement: "Maintainers need examples that help contributors document contract events consistently.",
    expectedBehavior: "Docs include a clear event example and review notes for Soroban tasks.",
    filesToUpdate: ["docs/soroban-events.md", "README.md"],
    acceptanceCriteria: ["Example compiles conceptually", "Docs mention expected event fields", "Review checklist is updated"],
    stellarRelevance: "Improves Soroban developer documentation for contributor tasks.",
  },
  {
    id: "SOB-102",
    title: "Create wallet integration label guidance",
    repository: "stellar-wallet-playbook",
    difficulty: "Intermediate",
    labels: ["wallet", "documentation", "enhancement"],
    status: "Review",
    assignee: "Unassigned",
    lastUpdated: "2026-06-20",
    problemStatement: "Wallet-related tasks are hard to identify across repositories.",
    expectedBehavior: "Maintainers can apply consistent wallet labels and contributor notes.",
    filesToUpdate: ["docs/labels.md"],
    acceptanceCriteria: ["Wallet labels are defined", "Examples include signing and network selection tasks"],
    stellarRelevance: "Clarifies wallet-related Stellar contribution opportunities.",
  },
  {
    id: "SOB-103",
    title: "Document test expectations for Horizon mock fixtures",
    repository: "stellarops-board",
    difficulty: "Advanced",
    labels: ["testing", "backend", "stellar"],
    status: "Draft",
    assignee: "Unassigned",
    lastUpdated: "2026-06-18",
    problemStatement: "Fixture expectations are not obvious to first-time contributors.",
    filesToUpdate: ["tests/fixtures/README.md"],
    stellarRelevance: "Supports Stellar API fixture quality.",
  },
  {
    id: "SOB-104",
    title: "Add frontend empty state for repositories with no ready issues",
    repository: "stellarops-board",
    difficulty: "Beginner",
    labels: ["frontend", "good first issue"],
    status: "Ready",
    assignee: "Unassigned",
    lastUpdated: "2026-06-16",
    problemStatement: "Maintainers need a clear dashboard state when no issues are ready.",
    expectedBehavior: "Dashboard shows practical next steps instead of an empty table.",
    filesToUpdate: ["src/components/IssueTable.tsx", "src/pages/dashboard.tsx"],
    acceptanceCriteria: ["Empty state renders", "Copy avoids blame", "Tests cover no-result filters"],
    stellarRelevance: "Helps Stellar/Soroban maintainers see backlog readiness quickly.",
  },
];

export const mockRepositoryLabels = [
  "good first issue",
  "documentation",
  "testing",
  "frontend",
  "backend",
  "stellar",
  "soroban",
  "enhancement",
  "bug",
];

export const mockRepoHealth: RepoHealthInput = {
  README: true,
  CONTRIBUTING: true,
  CODE_OF_CONDUCT: true,
  LICENSE: true,
  docs: true,
  tests: true,
  "CI workflow": true,
  "issue templates": true,
  "open contributor issues": true,
  labels: false,
};

// TODO: add GitHub issue import
// TODO: add organization-level dashboard
// TODO: add persistent filters
// TODO: add project board export
// TODO: add GitHub API integration
// TODO: add accessibility audit
