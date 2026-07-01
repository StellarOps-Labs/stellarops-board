import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IssueTable } from "@/components/IssueTable";
import { mockIssues } from "@/utils/mockData";

describe("IssueTable", () => {
  it("renders mock issues", () => {
    render(<IssueTable issues={mockIssues} />);

    expect(screen.getByText("Contributor issue review")).toBeInTheDocument();
    expect(screen.getByText(mockIssues[0].title)).toBeInTheDocument();
  });

  it("filters issues by difficulty", () => {
    render(<IssueTable issues={mockIssues} />);

    fireEvent.change(screen.getByLabelText("Difficulty"), { target: { value: "Advanced" } });

    expect(screen.getByText("Document test expectations for Horizon mock fixtures")).toBeInTheDocument();
    expect(screen.queryByText("Add Soroban contract event examples to maintainer docs")).not.toBeInTheDocument();
  });
});
