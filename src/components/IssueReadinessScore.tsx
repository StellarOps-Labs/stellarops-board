import { useIssueReadiness } from "@/hooks/useIssueReadiness";
import { scoreIssueReadiness } from "@/lib/issueReadiness";
import type { Issue } from "@/types/issue";
import { sentenceCase } from "@/utils/formatting";

export function IssueReadinessScore({ issues }: { issues: Issue[] }) {
  const summary = useIssueReadiness(issues);
  const weakest = [...issues].sort((a, b) => scoreIssueReadiness(a).score - scoreIssueReadiness(b).score)[0];
  const weakestScore = weakest ? scoreIssueReadiness(weakest) : undefined;

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-600">Issue readiness score</p>
          <h2 className="mt-2 text-4xl font-bold text-slate-950">{summary.averageScore}%</h2>
        </div>
        <span className="rounded-md bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-800">{summary.readyCount} ready issues</span>
      </div>
      {weakest && weakestScore ? (
        <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-bold text-amber-950">Needs attention: {weakest.title}</p>
          <p className="mt-2 text-sm text-amber-900">
            {weakestScore.score}% ready, {sentenceCase(weakestScore.level)}. {weakestScore.suggestions[0] ?? "Review scope before publishing."}
          </p>
        </div>
      ) : null}
    </section>
  );
}
