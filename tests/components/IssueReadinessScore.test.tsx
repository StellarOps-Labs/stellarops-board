import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IssueReadinessScore } from "@/components/IssueReadinessScore";
import { mockIssues } from "@/utils/mockData";

describe("IssueReadinessScore", () => {
  it("renders average score and weakest issue", () => {
    render(<IssueReadinessScore issues={mockIssues} />);

    expect(screen.getByText("Issue readiness score")).toBeInTheDocument();
    expect(screen.getByText(/Needs attention:/)).toBeInTheDocument();
  });
});
