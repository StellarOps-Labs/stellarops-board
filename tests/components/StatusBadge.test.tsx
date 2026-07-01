import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StatusBadge } from "@/components/StatusBadge";

describe("StatusBadge", () => {
  it("renders issue statuses", () => {
    render(<StatusBadge status="Ready" />);

    expect(screen.getByText("Ready")).toBeInTheDocument();
  });

  it("renders health statuses", () => {
    render(<StatusBadge status="missing" />);

    expect(screen.getByText("Missing")).toBeInTheDocument();
  });
});
