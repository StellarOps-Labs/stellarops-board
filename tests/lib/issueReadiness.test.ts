import { describe, expect, it } from "vitest";
import { averageReadinessScore, scoreIssueReadiness } from "@/lib/issueReadiness";
import type { Issue } from "@/types/issue";
import { mockIssues } from "@/utils/mockData";

const completeIssue: Issue = {
  id: "T-1",
  title: "Add Soroban docs",
  repository: "stellarops-board",
  difficulty: "Beginner",
  labels: ["documentation", "soroban"],
  status: "Ready",
  assignee: "Unassigned",
  lastUpdated: "2026-06-20",
  problemStatement: "Docs need a clear Soroban example.",
  expectedBehavior: "Contributor can follow the example.",
  filesToUpdate: ["docs/example.md"],
  acceptanceCriteria: ["Docs include example"],
  stellarRelevance: "Improves Soroban contributor onboarding.",
};

describe("scoreIssueReadiness", () => {
  it("scores a complete issue as ready", () => {
    expect(scoreIssueReadiness(completeIssue)).toMatchObject({ score: 100, level: "ready", missingFields: [] });
  });

  it("returns missing fields and suggestions for incomplete issues", () => {
    const result = scoreIssueReadiness({ ...completeIssue, expectedBehavior: undefined, acceptanceCriteria: [] });

    expect(result.score).toBe(68);
    expect(result.level).toBe("needs work");
    expect(result.missingFields).toEqual(["expected behavior", "acceptance criteria"]);
    expect(result.suggestions).toHaveLength(2);
  });

  it("averages readiness across issues", () => {
    expect(averageReadinessScore(mockIssues)).toBeGreaterThan(70);
  });
});
