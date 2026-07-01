import type { RepoHealthInput, RepoHealthResult, RepoHealthSignal } from "@/types/repo";

const NOTES: Record<keyof RepoHealthInput, string> = {
  README: "Explains project purpose, setup, and maintainer context.",
  CONTRIBUTING: "Gives contributors a clear path to propose changes.",
  CODE_OF_CONDUCT: "Sets expected community behavior.",
  LICENSE: "Makes reuse terms explicit for open-source contributors.",
  docs: "Documents architecture, workflows, and readiness criteria.",
  tests: "Protects scoring and dashboard behavior.",
  "CI workflow": "Runs checks before maintainer review.",
  "issue templates": "Shapes better incoming issues.",
  "open contributor issues": "Provides visible work for contributors.",
  labels: "Supports filtering and contributor self-selection.",
};

export function evaluateRepoHealth(input: RepoHealthInput): RepoHealthResult {
  const signals = Object.entries(input).map(([key, ready]) => ({
    key,
    ready,
    note: NOTES[key as keyof RepoHealthInput],
  })) as RepoHealthSignal[];
  const readyCount = signals.filter((signal) => signal.ready).length;

  return {
    score: Math.round((readyCount / signals.length) * 100),
    readyCount,
    total: signals.length,
    signals,
  };
}
