import React from "react";
import { render, screen } from "@testing-library/react";
import FormItem from "../../components/FormItem";

describe("FormItem Component", () => {
  test("renders the label correctly", () => {
    render(<FormItem label="Type" type="text" value="" onChange={() => {}} />);

    expect(screen.getByText("Type")).toBeInTheDocument();
  });

  test("renders the input with the correct value", () => {
    render(
      <FormItem
        label="Type"
        type="text"
        value="Boeing 737"
        onChange={() => {}}
      />
    );

    expect(screen.getByDisplayValue("Boeing 737")).toBeInTheDocument();
  });
});
