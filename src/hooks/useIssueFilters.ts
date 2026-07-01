import { useMemo, useState } from "react";
import { scoreIssueReadiness } from "@/lib/issueReadiness";
import type { Difficulty, Issue, ReadinessLevel } from "@/types/issue";

export type IssueFilters = {
  difficulty: Difficulty | "all";
  label: string;
  readiness: ReadinessLevel | "all";
};

const DEFAULT_FILTERS: IssueFilters = {
  difficulty: "all",
  label: "all",
  readiness: "all",
};

export function filterIssues(issues: Issue[], filters: IssueFilters): Issue[] {
  return issues.filter((issue) => {
    const readiness = scoreIssueReadiness(issue).level;
    const matchesDifficulty = filters.difficulty === "all" || issue.difficulty === filters.difficulty;
    const matchesLabel = filters.label === "all" || issue.labels.includes(filters.label);
    const matchesReadiness = filters.readiness === "all" || readiness === filters.readiness;

    return matchesDifficulty && matchesLabel && matchesReadiness;
  });
}

export function useIssueFilters(issues: Issue[]) {
  const [filters, setFilters] = useState<IssueFilters>(DEFAULT_FILTERS);
  const availableLabels = useMemo(() => Array.from(new Set(issues.flatMap((issue) => issue.labels))).sort(), [issues]);
  const filteredIssues = useMemo(() => filterIssues(issues, filters), [issues, filters]);

  return {
    filters,
    setFilters,
    availableLabels,
    filteredIssues,
    resetFilters: () => setFilters(DEFAULT_FILTERS),
  };
}
