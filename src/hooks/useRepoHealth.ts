import { useMemo } from "react";
import { evaluateRepoHealth } from "@/lib/repoHealth";
import type { RepoHealthInput } from "@/types/repo";

export function useRepoHealth(input: RepoHealthInput) {
  return useMemo(() => evaluateRepoHealth(input), [input]);
}
