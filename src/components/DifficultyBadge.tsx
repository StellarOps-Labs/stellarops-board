import clsx from "clsx";
import type { Difficulty } from "@/types/issue";

const styles: Record<Difficulty, string> = {
  Beginner: "border-emerald-200 bg-emerald-50 text-emerald-800",
  Intermediate: "border-sky-200 bg-sky-50 text-sky-800",
  Advanced: "border-amber-200 bg-amber-50 text-amber-900",
};

export function DifficultyBadge({ difficulty }: { difficulty?: Difficulty }) {
  if (!difficulty) {
    return <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-bold text-slate-600">Unset</span>;
  }

  return <span className={clsx("rounded-md border px-2 py-1 text-xs font-bold", styles[difficulty])}>{difficulty}</span>;
}
