const CHECKS = [
  "clear problem statement",
  "expected behavior",
  "files to update",
  "acceptance criteria",
  "difficulty level",
  "useful labels",
  "Stellar/Soroban relevance",
];

export function ReadinessChecklist() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-950">Readiness Checklist</h2>
      <div className="mt-4 space-y-2">
        {CHECKS.map((check) => (
          <div key={check} className="flex items-center gap-3 rounded-md bg-slate-50 px-3 py-2">
            <span className="flex size-5 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">✓</span>
            <span className="text-sm font-medium text-slate-700">{check}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
