import { getLabelCoverage } from "@/lib/labelCoverage";

export function LabelCoverageCard({ labels }: { labels: string[] }) {
  const coverage = getLabelCoverage(labels);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-950">Label Coverage</h2>
          <p className="mt-1 text-sm text-slate-600">{coverage.presentCount} of {coverage.totalRequired} required labels present</p>
        </div>
        <span className="rounded-md bg-teal-50 px-3 py-2 text-sm font-bold text-teal-800">{coverage.coveragePercent}%</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {coverage.items.map((item) => (
          <span
            key={item.label}
            className={item.present ? "rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-800" : "rounded-md bg-rose-50 px-2 py-1 text-xs font-bold text-rose-800"}
          >
            {item.present ? "Present" : "Missing"}: {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
