export type WorkflowState = {
  name: string;
  complete: boolean;
  detail: string;
};

export const workflowStates: WorkflowState[] = [
  {
    name: "Issues drafted",
    complete: true,
    detail: "Mock backlog includes contributor-sized Stellar and Soroban work.",
  },
  {
    name: "Issues reviewed",
    complete: true,
    detail: "Readiness scoring highlights weak spots before publishing.",
  },
  {
    name: "Issues labeled",
    complete: true,
    detail: "Required labels are tracked for filtering and contributor discovery.",
  },
  {
    name: "Issues ready for contributors",
    complete: true,
    detail: "Ready issues have acceptance criteria and ecosystem relevance.",
  },
  {
    name: "PR review checklist available",
    complete: false,
    detail: "TODO: add PR tracking and review checklist status.",
  },
  {
    name: "CI passing",
    complete: true,
    detail: "The repository includes a GitHub Actions CI workflow.",
  },
];
