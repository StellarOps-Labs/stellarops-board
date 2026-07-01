import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DashboardSummary } from "@/components/DashboardSummary";
import { mockIssues, mockRepoHealth, mockRepositoryLabels } from "@/utils/mockData";

describe("DashboardSummary", () => {
  it("renders readiness and repo health metrics", () => {
    render(<DashboardSummary issues={mockIssues} repoHealth={mockRepoHealth} labels={mockRepositoryLabels} />);

    expect(screen.getByText("Average readiness")).toBeInTheDocument();
    expect(screen.getByText("Repo health")).toBeInTheDocument();
    expect(screen.getByText("Label coverage")).toBeInTheDocument();
  });
});
