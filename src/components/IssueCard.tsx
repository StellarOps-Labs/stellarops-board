import { scoreIssueReadiness } from "@/lib/issueReadiness";
import type { Issue } from "@/types/issue";
import { formatDate } from "@/utils/formatting";
import { DifficultyBadge } from "./DifficultyBadge";
import { StatusBadge } from "./StatusBadge";

export function IssueCard({ issue }: { issue: Issue }) {
  const readiness = scoreIssueReadiness(issue);

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{issue.repository}</p>
          <h3 className="mt-1 text-lg font-bold text-slate-950">{issue.title}</h3>
        </div>
        <StatusBadge status={issue.status} />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <DifficultyBadge difficulty={issue.difficulty} />
        <span className="rounded-md bg-teal-50 px-2 py-1 text-xs font-bold text-teal-800">{readiness.score}% ready</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {issue.labels.map((label) => (
          <span key={label} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
            {label}
          </span>
        ))}
      </div>
      {readiness.missingFields.length > 0 ? (
        <p className="mt-4 text-sm text-slate-600">Missing: {readiness.missingFields.join(", ")}</p>
      ) : (
        <p className="mt-4 text-sm font-semibold text-emerald-700">All readiness fields are present.</p>
      )}
      <p className="mt-3 text-xs font-semibold text-slate-500">Updated {formatDate(issue.lastUpdated)} by {issue.assignee ?? "Unassigned"}</p>
    </article>
  );
}
