import type { LabelCoverageResult } from "@/types/label";
import { REQUIRED_LABELS } from "@/utils/constants";

export function getLabelCoverage(labels: string[]): LabelCoverageResult {
  const normalized = new Set(labels.map((label) => label.toLowerCase()));
  const items = REQUIRED_LABELS.map((label) => ({
    label,
    present: normalized.has(label),
  }));
  const presentCount = items.filter((item) => item.present).length;

  return {
    totalRequired: REQUIRED_LABELS.length,
    presentCount,
    missingLabels: items.filter((item) => !item.present).map((item) => item.label),
    coveragePercent: Math.round((presentCount / REQUIRED_LABELS.length) * 100),
    items,
  };
}
