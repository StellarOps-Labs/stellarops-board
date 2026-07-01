import { evaluateRepoHealth } from "@/lib/repoHealth";
import type { RepoHealthInput } from "@/types/repo";
import { StatusBadge } from "./StatusBadge";

export function RepoHealthCard({ health }: { health: RepoHealthInput }) {
  const result = evaluateRepoHealth(health);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-950">Repository Health</h2>
          <p className="mt-1 text-sm text-slate-600">{result.readyCount} of {result.total} maintainer signals ready</p>
        </div>
        <span className="rounded-md bg-slate-950 px-3 py-2 text-sm font-bold text-white">{result.score}%</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {result.signals.map((signal) => (
          <div key={signal.key} className="rounded-md border border-slate-200 p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-slate-900">{signal.key}</p>
              <StatusBadge status={signal.ready ? "complete" : "missing"} />
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-600">{signal.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
