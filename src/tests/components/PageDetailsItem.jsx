import React from "react";
import { render, screen } from "@testing-library/react";
import PageDetailsItem from "../../components/PageDetailsItem";

describe("PageDetailsItem Component", () => {
  test("renders label correctly", () => {
    render(<PageDetailsItem label="Test Label" value="Test Value" />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  test("renders value correctly", () => {
    render(<PageDetailsItem label="Test Label" value="Test Value" />);

    expect(screen.getByText("Test Value")).toBeInTheDocument();
  });
});
