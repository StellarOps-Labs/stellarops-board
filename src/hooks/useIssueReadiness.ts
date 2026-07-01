import { useMemo } from "react";
import { averageReadinessScore, scoreIssueReadiness } from "@/lib/issueReadiness";
import type { Issue } from "@/types/issue";

export function useIssueReadiness(issues: Issue[]) {
  return useMemo(() => {
    const results = issues.map((issue) => ({
      issueId: issue.id,
      ...scoreIssueReadiness(issue),
    }));

    return {
      averageScore: averageReadinessScore(issues),
      results,
      readyCount: results.filter((result) => result.level === "ready").length,
    };
  }, [issues]);
}
