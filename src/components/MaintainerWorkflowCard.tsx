import { workflowStates } from "@/lib/workflowStatus";
import { StatusBadge } from "./StatusBadge";

export function MaintainerWorkflowCard() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-slate-950">Maintainer Workflow</h2>
      <div className="mt-4 space-y-3">
        {workflowStates.map((state) => (
          <div key={state.name} className="rounded-md border border-slate-200 p-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-900">{state.name}</h3>
              <StatusBadge status={state.complete ? "complete" : "missing"} />
            </div>
            <p className="mt-1 text-sm text-slate-600">{state.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
