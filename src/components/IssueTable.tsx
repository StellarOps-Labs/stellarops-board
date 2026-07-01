import { RotateCcw } from "lucide-react";
import { useIssueFilters } from "@/hooks/useIssueFilters";
import { scoreIssueReadiness } from "@/lib/issueReadiness";
import type { Issue, ReadinessLevel } from "@/types/issue";
import { DIFFICULTIES, READINESS_LEVELS } from "@/utils/constants";
import { formatDate, sentenceCase } from "@/utils/formatting";
import { DifficultyBadge } from "./DifficultyBadge";
import { StatusBadge } from "./StatusBadge";

const readinessLabels: Record<ReadinessLevel, string> = {
  ready: "Ready",
  "needs work": "Needs work",
  weak: "Weak",
};

export function IssueTable({ issues }: { issues: Issue[] }) {
  const { filters, setFilters, availableLabels, filteredIssues, resetFilters } = useIssueFilters(issues);

  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">Contributor issue review</h2>
            <p className="mt-1 text-sm text-slate-600">Filter mock issues by difficulty, label, and readiness status.</p>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="focus-ring inline-flex w-fit items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700"
            aria-label="Reset filters"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Reset
          </button>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <label className="text-sm font-semibold text-slate-700">
            Difficulty
            <select
              className="focus-ring mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2"
              value={filters.difficulty}
              onChange={(event) => setFilters((current) => ({ ...current, difficulty: event.target.value as typeof filters.difficulty }))}
            >
              <option value="all">All difficulties</option>
              {DIFFICULTIES.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Label
            <select
              className="focus-ring mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2"
              value={filters.label}
              onChange={(event) => setFilters((current) => ({ ...current, label: event.target.value }))}
            >
              <option value="all">All labels</option>
              {availableLabels.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Readiness
            <select
              className="focus-ring mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2"
              value={filters.readiness}
              onChange={(event) => setFilters((current) => ({ ...current, readiness: event.target.value as typeof filters.readiness }))}
            >
              <option value="all">All readiness states</option>
              {READINESS_LEVELS.map((level) => (
                <option key={level} value={level}>
                  {readinessLabels[level]}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3">Issue</th>
              <th className="px-5 py-3">Difficulty</th>
              <th className="px-5 py-3">Labels</th>
              <th className="px-5 py-3">Readiness</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Assignee</th>
              <th className="px-5 py-3">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredIssues.map((issue) => {
              const readiness = scoreIssueReadiness(issue);
              return (
                <tr key={issue.id} className="align-top">
                  <td className="px-5 py-4">
                    <p className="font-bold text-slate-950">{issue.title}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">{issue.repository}</p>
                  </td>
                  <td className="px-5 py-4">
                    <DifficultyBadge difficulty={issue.difficulty} />
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex min-w-48 flex-wrap gap-2">
                      {issue.labels.map((label) => (
                        <span key={label} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                          {label}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-bold text-slate-950">{readiness.score}%</p>
                    <p className="mt-1 text-xs text-slate-500">{sentenceCase(readiness.level)}</p>
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={issue.status} />
                  </td>
                  <td className="px-5 py-4 text-slate-600">{issue.assignee ?? "Unassigned"}</td>
                  <td className="px-5 py-4 text-slate-600">{formatDate(issue.lastUpdated)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredIssues.length === 0 ? (
        <div className="border-t border-slate-200 p-8 text-center">
          <p className="font-bold text-slate-950">No issues match these filters.</p>
          <p className="mt-2 text-sm text-slate-600">Adjust filters or review whether the backlog needs more contributor-ready work.</p>
        </div>
      ) : null}
    </section>
  );
}
