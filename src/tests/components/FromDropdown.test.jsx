import React from "react";
import { render, screen } from "@testing-library/react";
import FormDropdown from "../../components/FormDropdown";

describe("FormDropdown Component", () => {
  const mockList = [
    { id: 1, name: "Airline A" },
    { id: 2, name: "Airline B" },
    { id: 3, name: "Airline C" },
  ];

  test("renders the label correctly", () => {
    render(
      <FormDropdown
        label="Airline"
        list={mockList}
        value={1}
        onChange={() => {}}
      />
    );

    expect(screen.getByText("Airline")).toBeInTheDocument();
  });

  test("renders the select options correctly", () => {
    render(
      <FormDropdown
        label="Airline"
        list={mockList}
        value={1}
        onChange={() => {}}
      />
    );

    mockList.forEach((item) => {
      expect(
        screen.getByRole("option", { name: item.name })
      ).toBeInTheDocument();
    });
  });

  test("selects the correct option based on value", () => {
    render(
      <FormDropdown
        label="Airline"
        list={mockList}
        value={2}
        onChange={() => {}}
      />
    );

    const selectedOption = screen.getByRole("option", { name: "Airline B" });
    expect(selectedOption.selected).toBe(true);
  });
});
