import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IssueCard } from "@/components/IssueCard";
import { mockIssues } from "@/utils/mockData";

describe("IssueCard", () => {
  it("renders issue details and readiness state", () => {
    render(<IssueCard issue={mockIssues[0]} />);

    expect(screen.getByText(mockIssues[0].title)).toBeInTheDocument();
    expect(screen.getByText("100% ready")).toBeInTheDocument();
    expect(screen.getByText("All readiness fields are present.")).toBeInTheDocument();
  });
});
