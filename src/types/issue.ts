export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type ReadinessLevel = "ready" | "needs work" | "weak";

export type IssueStatus = "Draft" | "Review" | "Ready" | "Blocked";

export type Issue = {
  id: string;
  title: string;
  repository: string;
  difficulty?: Difficulty;
  labels: string[];
  status: IssueStatus;
  assignee?: string;
  lastUpdated: string;
  problemStatement?: string;
  expectedBehavior?: string;
  filesToUpdate?: string[];
  acceptanceCriteria?: string[];
  stellarRelevance?: string;
};

export type IssueReadinessResult = {
  score: number;
  level: ReadinessLevel;
  missingFields: string[];
  suggestions: string[];
};
