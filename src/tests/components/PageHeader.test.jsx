import React from "react";
import { render, screen } from "@testing-library/react";
import PageHeader from "../../components/PageHeader";

jest.mock("../../components/Breadcrumb", () => () => <div>Breadcrumb</div>);

describe("PageHeader Component", () => {
  test("renders label correctly", () => {
    render(<PageHeader label="Test Page" />);

    expect(screen.getByText("Test Page")).toBeInTheDocument();
  });

  test("renders Breadcrumb correctly", () => {
    render(<PageHeader label="Test Page" />);

    expect(screen.getByText("Breadcrumb")).toBeInTheDocument();
  });

  test("renders Button and SecondaryButton correctly", () => {
    render(
      <PageHeader
        label="Test Page"
        Button={<button>Submit</button>}
        SecondaryButton={<button>Cancel</button>}
      />
    );

    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });
});
