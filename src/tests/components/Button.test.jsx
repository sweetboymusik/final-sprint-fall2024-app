import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button Component", () => {
  test("renders with label and no icon", () => {
    render(<Button label="Click Me" onClick={jest.fn()} />);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  test("renders with 'edit' icon", () => {
    render(<Button label="Edit" icon="edit" onClick={jest.fn()} />);
    const button = screen.getByRole("button", { name: /edit/i });
    expect(button).toBeInTheDocument();
    const icon = screen.getByText(
      (content, element) => element.tagName.toLowerCase() === "svg"
    );
    expect(icon).toBeInTheDocument();
  });

  test("renders with 'submit' icon", () => {
    render(<Button label="Submit" icon="submit" onClick={jest.fn()} />);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeInTheDocument();
    const icon = screen.getByText(
      (content, element) => element.tagName.toLowerCase() === "svg"
    );
    expect(icon).toBeInTheDocument();
  });

  test("renders with 'add' icon", () => {
    render(<Button label="Add" icon="add" onClick={jest.fn()} />);
    const button = screen.getByRole("button", { name: /add/i });
    expect(button).toBeInTheDocument();
    const icon = screen.getByText(
      (content, element) => element.tagName.toLowerCase() === "svg"
    );
    expect(icon).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders with correct type attribute", () => {
    render(<Button label="Submit" type="button" onClick={jest.fn()} />);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveAttribute("type", "button");
  });
});
