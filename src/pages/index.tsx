import Link from "next/link";
import { CheckCircle2, ClipboardList, GitPullRequestArrow, LayoutDashboard, Tags } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout";

const features = [
  {
    title: "Issue Readiness Review",
    body: "Scores contributor issues for problem clarity, expected behavior, files to update, acceptance criteria, labels, difficulty, and Stellar or Soroban relevance.",
  },
  {
    title: "Repository Health Signals",
    body: "Shows whether a repo has the basics contributors need: README, contributing guide, license, tests, CI, issue templates, docs, and useful labels.",
  },
  {
    title: "Maintainer Workflow Status",
    body: "Turns backlog preparation into visible states so maintainers can see what is drafted, reviewed, labeled, ready, and still missing.",
  },
];

const workflow = [
  { icon: ClipboardList, title: "Draft", text: "Shape contributor-sized issues with clear scope." },
  { icon: Tags, title: "Label", text: "Mark difficulty, area, type, and ecosystem relevance." },
  { icon: CheckCircle2, title: "Review", text: "Use scoring to find missing acceptance criteria." },
  { icon: GitPullRequestArrow, title: "Contribute", text: "Give contributors work they can complete with confidence." },
];

export default function HomePage() {
  return (
    <Layout>
      <main>
        <Hero />

        <section className="mx-auto max-w-7xl px-5 py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-teal-700">Why readiness matters</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">Contributor programs move faster when issues are clear.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              StellarOps Board helps maintainers review whether their backlog is actually ready for outside contributors. It complements StellarOps Kit by focusing on monitoring and review after issues have been drafted.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title}>
                {feature.body}
              </FeatureCard>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-teal-700">Maintainer workflow</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">Review backlog health before asking contributors to jump in.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The dashboard highlights weak issues, missing label coverage, and repository setup gaps so maintainers can fix practical blockers before a contributor spends time investigating.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {workflow.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-lg border border-slate-200 p-5">
                    <Icon className="size-6 text-teal-700" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">For Stellar and Soroban maintainers</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Track whether issues include Stellar or Soroban context, expected behavior, likely files, and objective acceptance criteria. Mock mode keeps the MVP honest while future GitHub integration is designed.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-950">For contributors</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Clear issues reduce guessing. Contributors can choose by difficulty, labels, readiness status, and repository area before opening a pull request.
            </p>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Open the maintainer dashboard.</h2>
              <p className="mt-2 max-w-2xl text-slate-300">Review mock Stellar/Soroban issue readiness, label coverage, and repository health.</p>
            </div>
            <Link
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-teal-400 px-5 py-3 text-sm font-bold text-slate-950"
              href="/dashboard"
            >
              <LayoutDashboard className="size-4" aria-hidden="true" />
              Open Dashboard
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

