/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import AirportDetails from "../../components/AirportDetails";

describe("AirportDetails Component", () => {
  const mockAirport = {
    id: 1,
    name: "John F. Kennedy International Airport",
    code: "JFK",
    city: {
      id: 101,
      name: "Toronto",
      state: "Ontario",
      population: 8419600,
    },
  };

  test("renders airport details correctly", () => {
    render(<AirportDetails airport={mockAirport} />);

    const airportDetailsSection = screen.getByRole("heading", {
      name: /airport details/i,
    }).parentElement;
    const airportDetails = within(airportDetailsSection);

    expect(airportDetails.getByText("ID")).toBeInTheDocument();
    expect(airportDetails.getByText("1")).toBeInTheDocument();
    expect(airportDetails.getByText("Name")).toBeInTheDocument();
    expect(
      airportDetails.getByText("John F. Kennedy International Airport")
    ).toBeInTheDocument();
    expect(airportDetails.getByText("Code")).toBeInTheDocument();
    expect(airportDetails.getByText("JFK")).toBeInTheDocument();
  });

  test("renders city details correctly", () => {
    render(<AirportDetails airport={mockAirport} />);

    const cityDetailsSection = screen.getByRole("heading", {
      name: /city/i,
    }).parentElement;
    const cityDetails = within(cityDetailsSection);

    expect(cityDetails.getByText("ID")).toBeInTheDocument();
    expect(cityDetails.getByText("101")).toBeInTheDocument();
    expect(cityDetails.getByText("Name")).toBeInTheDocument();

    const nameElements = screen.getAllByText("Toronto");

    const matchingNameElement = nameElements.find(
      (el) => el.closest("div.details-inner") === cityDetailsSection
    );

    expect(matchingNameElement).toBeInTheDocument();

    expect(cityDetails.getByText("Provice/State")).toBeInTheDocument();
    expect(cityDetails.getByText("Ontario")).toBeInTheDocument();
    expect(cityDetails.getByText("Population")).toBeInTheDocument();
    expect(cityDetails.getByText("8419600")).toBeInTheDocument();
  });

  test("handles missing city details gracefully", () => {
    const mockAirportWithoutCity = {
      id: 2,
      name: "Los Angeles International Airport",
      code: "LAX",
      city: null,
    };

    render(<AirportDetails airport={mockAirportWithoutCity} />);

    const airportDetailsSection = screen.getByRole("heading", {
      name: /airport details/i,
    }).parentElement;
    const airportDetails = within(airportDetailsSection);

    expect(airportDetails.getByText("ID")).toBeInTheDocument();
    expect(airportDetails.getByText("2")).toBeInTheDocument();
    expect(airportDetails.getByText("Name")).toBeInTheDocument();
    expect(
      airportDetails.getByText("Los Angeles International Airport")
    ).toBeInTheDocument();
    expect(airportDetails.getByText("Code")).toBeInTheDocument();
    expect(airportDetails.getByText("LAX")).toBeInTheDocument();

    const cityDetailsSection = screen.getByRole("heading", {
      name: /city/i,
    }).parentElement;
    const cityDetails = within(cityDetailsSection);

    expect(cityDetails.getByText("ID")).toBeInTheDocument();
    expect(cityDetails.getByText("Name")).toBeInTheDocument();
    expect(cityDetails.getByText("Provice/State")).toBeInTheDocument();
    expect(cityDetails.getByText("Population")).toBeInTheDocument();
  });
});
