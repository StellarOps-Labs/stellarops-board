import type { Difficulty, ReadinessLevel } from "@/types/issue";

export const REQUIRED_LABELS = [
  "good first issue",
  "documentation",
  "testing",
  "frontend",
  "backend",
  "stellar",
  "soroban",
  "wallet",
  "enhancement",
  "bug",
];

export const DIFFICULTIES: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];
export const READINESS_LEVELS: ReadinessLevel[] = ["ready", "needs work", "weak"];

export const READINESS_FIELD_LABELS = {
  problemStatement: "problem statement",
  expectedBehavior: "expected behavior",
  filesToUpdate: "files to update",
  acceptanceCriteria: "acceptance criteria",
  difficulty: "difficulty level",
  labels: "useful labels",
  stellarRelevance: "Stellar/Soroban relevance",
} as const;
