import { describe, expect, it } from "vitest";
import { getLabelCoverage } from "@/lib/labelCoverage";
import { REQUIRED_LABELS } from "@/utils/constants";

describe("getLabelCoverage", () => {
  it("reports complete label coverage", () => {
    const result = getLabelCoverage(REQUIRED_LABELS);

    expect(result.coveragePercent).toBe(100);
    expect(result.missingLabels).toEqual([]);
  });

  it("normalizes labels and lists missing labels", () => {
    const result = getLabelCoverage(["Good First Issue", "documentation", "stellar"]);

    expect(result.presentCount).toBe(3);
    expect(result.missingLabels).toContain("soroban");
  });
});
