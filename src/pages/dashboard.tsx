import { DashboardSummary } from "@/components/DashboardSummary";
import { IssueReadinessScore } from "@/components/IssueReadinessScore";
import { IssueTable } from "@/components/IssueTable";
import { LabelCoverageCard } from "@/components/LabelCoverageCard";
import { Layout } from "@/components/Layout";
import { MaintainerWorkflowCard } from "@/components/MaintainerWorkflowCard";
import { ReadinessChecklist } from "@/components/ReadinessChecklist";
import { RepoHealthCard } from "@/components/RepoHealthCard";
import { mockIssues, mockRepoHealth, mockRepositoryLabels } from "@/utils/mockData";

export default function DashboardPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 py-8">
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-teal-700">Demo dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-950">Maintainer readiness overview</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              This MVP uses mock data while GitHub issue import, repository scanning, PR tracking, and persistent filters are planned.
            </p>
          </div>
          <span className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-bold text-amber-900">Mock mode</span>
        </div>

        <div className="mt-8">
          <DashboardSummary issues={mockIssues} repoHealth={mockRepoHealth} labels={mockRepositoryLabels} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <IssueReadinessScore issues={mockIssues} />
          <RepoHealthCard health={mockRepoHealth} />
        </div>

        <div className="mt-8">
          <IssueTable issues={mockIssues} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <LabelCoverageCard labels={mockRepositoryLabels} />
          <ReadinessChecklist />
          <MaintainerWorkflowCard />
        </div>
      </main>
    </Layout>
  );
}
