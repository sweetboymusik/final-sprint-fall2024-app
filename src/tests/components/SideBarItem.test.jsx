/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { render, screen } from "@testing-library/react";
import SideBarItem from "../../components/SideBarItem";

jest.mock("react-router-dom", () => ({
  Link: ({ children }) => <a>{children}</a>,
}));

describe("SideBarItem Component", () => {
  test("renders icon and label correctly", () => {
    render(<SideBarItem icon="🏠" label="Home" to="/home" active={false} />);

    expect(screen.getByText("🏠")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("renders the correct label for active state", () => {
    render(<SideBarItem icon="🏠" label="Home" to="/home" active={true} />);

    const linkElement = screen.getByText("Home");

    expect(linkElement).toBeInTheDocument();
  });

  test("renders the correct label for non-active state", () => {
    render(<SideBarItem icon="🏠" label="Home" to="/home" active={false} />);

    const linkElement = screen.getByText("Home");

    expect(linkElement).toBeInTheDocument();
  });
});
