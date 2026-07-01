import { averageReadinessScore } from "@/lib/issueReadiness";
import { getLabelCoverage } from "@/lib/labelCoverage";
import { evaluateRepoHealth } from "@/lib/repoHealth";
import type { Issue } from "@/types/issue";
import type { RepoHealthInput } from "@/types/repo";

export function DashboardSummary({ issues, repoHealth, labels }: { issues: Issue[]; repoHealth: RepoHealthInput; labels: string[] }) {
  const readyIssues = issues.filter((issue) => issue.status === "Ready").length;
  const readinessScore = averageReadinessScore(issues);
  const health = evaluateRepoHealth(repoHealth);
  const coverage = getLabelCoverage(labels);
  const cards = [
    { label: "Average readiness", value: `${readinessScore}%`, detail: "Across mock contributor issues" },
    { label: "Ready issues", value: `${readyIssues}/${issues.length}`, detail: "Marked ready for contributors" },
    { label: "Repo health", value: `${health.score}%`, detail: `${health.readyCount} of ${health.total} signals ready` },
    { label: "Label coverage", value: `${coverage.coveragePercent}%`, detail: `${coverage.presentCount} required labels present` },
  ];

  return (
    <section aria-label="Dashboard summary" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <article key={card.label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-600">{card.label}</p>
          <p className="mt-3 text-3xl font-bold text-slate-950">{card.value}</p>
          <p className="mt-2 text-sm text-slate-500">{card.detail}</p>
        </article>
      ))}
    </section>
  );
}
