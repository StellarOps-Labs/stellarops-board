export type RepoHealthKey =
  | "README"
  | "CONTRIBUTING"
  | "CODE_OF_CONDUCT"
  | "LICENSE"
  | "docs"
  | "tests"
  | "CI workflow"
  | "issue templates"
  | "open contributor issues"
  | "labels";

export type RepoHealthSignal = {
  key: RepoHealthKey;
  ready: boolean;
  note: string;
};

export type RepoHealthInput = Record<RepoHealthKey, boolean>;

export type RepoHealthResult = {
  score: number;
  readyCount: number;
  total: number;
  signals: RepoHealthSignal[];
};
