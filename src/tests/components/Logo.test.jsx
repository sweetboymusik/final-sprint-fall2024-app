import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "../../components/Logo";

describe("Logo Component", () => {
  test("renders the logo image", () => {
    render(<Logo />);

    const logoImage = screen.getByRole("img");

    expect(logoImage).toBeInTheDocument();

    expect(logoImage).toHaveClass("invert w-full h-full object-contain");
  });
});
