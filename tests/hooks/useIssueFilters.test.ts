import { describe, expect, it } from "vitest";
import { filterIssues } from "@/hooks/useIssueFilters";
import { mockIssues } from "@/utils/mockData";

describe("filterIssues", () => {
  it("filters by difficulty", () => {
    const result = filterIssues(mockIssues, { difficulty: "Beginner", label: "all", readiness: "all" });

    expect(result.every((issue) => issue.difficulty === "Beginner")).toBe(true);
  });

  it("filters by label and readiness", () => {
    const result = filterIssues(mockIssues, { difficulty: "all", label: "documentation", readiness: "ready" });

    expect(result).toHaveLength(2);
    expect(result.every((issue) => issue.labels.includes("documentation"))).toBe(true);
  });
});
