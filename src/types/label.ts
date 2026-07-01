export type LabelCoverageItem = {
  label: string;
  present: boolean;
};

export type LabelCoverageResult = {
  totalRequired: number;
  presentCount: number;
  missingLabels: string[];
  coveragePercent: number;
  items: LabelCoverageItem[];
};
