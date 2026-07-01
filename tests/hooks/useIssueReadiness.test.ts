import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useIssueReadiness } from "@/hooks/useIssueReadiness";
import { mockIssues } from "@/utils/mockData";

describe("useIssueReadiness", () => {
  it("returns aggregate readiness data", () => {
    const { result } = renderHook(() => useIssueReadiness(mockIssues));

    expect(result.current.averageScore).toBeGreaterThan(70);
    expect(result.current.results).toHaveLength(mockIssues.length);
    expect(result.current.readyCount).toBeGreaterThan(0);
  });
});
