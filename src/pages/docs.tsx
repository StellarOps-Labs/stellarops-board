import Link from "next/link";
import { BookOpen, ClipboardCheck, GitBranch, HeartHandshake, Map } from "lucide-react";
import { Layout } from "@/components/Layout";

const docs = [
  {
    href: "/docs/getting-started.md",
    title: "Getting Started",
    body: "Install dependencies, run the local app, execute tests, and build the project.",
    icon: BookOpen,
  },
  {
    href: "/docs/issue-readiness.md",
    title: "Issue Readiness",
    body: "Understand the fields that make issues practical for contributors.",
    icon: ClipboardCheck,
  },
  {
    href: "/docs/maintainer-dashboard.md",
    title: "Maintainer Dashboard",
    body: "Use dashboard signals to improve backlog quality and workflow status.",
    icon: GitBranch,
  },
  {
    href: "/docs/contributor-workflows.md",
    title: "Contributor Workflows",
    body: "See how clear issues help contributors choose and complete work.",
    icon: HeartHandshake,
  },
  {
    href: "/docs/roadmap.md",
    title: "Roadmap",
    body: "Review MVP scope, maintainer workflow plans, and ecosystem tooling goals.",
    icon: Map,
  },
];

export default function DocsPage() {
  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 py-12">
        <p className="text-sm font-bold uppercase tracking-wide text-teal-700">Documentation</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-950">StellarOps Board docs</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          The repository includes Markdown documentation for architecture, local development, readiness criteria, maintainer usage, contributor workflows, and roadmap planning.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {docs.map((doc) => {
            const Icon = doc.icon;
            return (
              <Link key={doc.title} href={doc.href} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-300">
                <Icon className="size-6 text-teal-700" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-bold text-slate-950">{doc.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{doc.body}</p>
              </Link>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}

