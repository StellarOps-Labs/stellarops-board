import type { Issue, IssueReadinessResult, ReadinessLevel } from "@/types/issue";
import { READINESS_FIELD_LABELS } from "@/utils/constants";

const FIELD_WEIGHTS: Array<{
  key: keyof typeof READINESS_FIELD_LABELS;
  weight: number;
  isPresent: (issue: Issue) => boolean;
  suggestion: string;
}> = [
  {
    key: "problemStatement",
    weight: 16,
    isPresent: (issue) => Boolean(issue.problemStatement?.trim()),
    suggestion: "Add a concise problem statement that explains the maintainer pain.",
  },
  {
    key: "expectedBehavior",
    weight: 14,
    isPresent: (issue) => Boolean(issue.expectedBehavior?.trim()),
    suggestion: "Describe the expected behavior or outcome for contributors.",
  },
  {
    key: "filesToUpdate",
    weight: 14,
    isPresent: (issue) => Boolean(issue.filesToUpdate?.length),
    suggestion: "List likely files or folders contributors should inspect.",
  },
  {
    key: "acceptanceCriteria",
    weight: 18,
    isPresent: (issue) => Boolean(issue.acceptanceCriteria?.length),
    suggestion: "Add acceptance criteria that make review objective.",
  },
  {
    key: "difficulty",
    weight: 12,
    isPresent: (issue) => Boolean(issue.difficulty),
    suggestion: "Set a difficulty level so contributors can self-select work.",
  },
  {
    key: "labels",
    weight: 12,
    isPresent: (issue) => issue.labels.length > 0,
    suggestion: "Apply labels for area, type, and contributor readiness.",
  },
  {
    key: "stellarRelevance",
    weight: 14,
    isPresent: (issue) => Boolean(issue.stellarRelevance?.trim()),
    suggestion: "Explain how the task relates to Stellar, Soroban, wallets, or ecosystem tooling.",
  },
];

export function getReadinessLevel(score: number): ReadinessLevel {
  if (score >= 85) return "ready";
  if (score >= 55) return "needs work";
  return "weak";
}

export function scoreIssueReadiness(issue: Issue): IssueReadinessResult {
  const missing = FIELD_WEIGHTS.filter((field) => !field.isPresent(issue));
  const score = FIELD_WEIGHTS.reduce((total, field) => {
    return total + (field.isPresent(issue) ? field.weight : 0);
  }, 0);

  return {
    score,
    level: getReadinessLevel(score),
    missingFields: missing.map((field) => READINESS_FIELD_LABELS[field.key]),
    suggestions: missing.map((field) => field.suggestion),
  };
}

export function averageReadinessScore(issues: Issue[]): number {
  if (issues.length === 0) return 0;
  const total = issues.reduce((sum, issue) => sum + scoreIssueReadiness(issue).score, 0);
  return Math.round(total / issues.length);
}
