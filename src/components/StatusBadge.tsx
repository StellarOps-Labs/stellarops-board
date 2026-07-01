import clsx from "clsx";
import type { IssueStatus } from "@/types/issue";

type Status = IssueStatus | "complete" | "missing";

const styles: Record<Status, string> = {
  Draft: "border-slate-200 bg-slate-50 text-slate-700",
  Review: "border-sky-200 bg-sky-50 text-sky-800",
  Ready: "border-emerald-200 bg-emerald-50 text-emerald-800",
  Blocked: "border-rose-200 bg-rose-50 text-rose-800",
  complete: "border-emerald-200 bg-emerald-50 text-emerald-800",
  missing: "border-amber-200 bg-amber-50 text-amber-900",
};

const labels: Record<Status, string> = {
  Draft: "Draft",
  Review: "Review",
  Ready: "Ready",
  Blocked: "Blocked",
  complete: "Complete",
  missing: "Missing",
};

export function StatusBadge({ status }: { status: Status }) {
  return <span className={clsx("inline-flex rounded-md border px-2 py-1 text-xs font-bold", styles[status])}>{labels[status]}</span>;
}
