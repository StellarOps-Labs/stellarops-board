import { describe, expect, it } from "vitest";
import { evaluateRepoHealth } from "@/lib/repoHealth";
import { mockRepoHealth } from "@/utils/mockData";

describe("evaluateRepoHealth", () => {
  it("scores repository health signals", () => {
    const result = evaluateRepoHealth(mockRepoHealth);

    expect(result.total).toBe(10);
    expect(result.readyCount).toBe(9);
    expect(result.score).toBe(90);
  });

  it("keeps notes with each signal", () => {
    expect(evaluateRepoHealth(mockRepoHealth).signals[0].note).toContain("project purpose");
  });
});
