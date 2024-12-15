/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import CityDetails from "../../components/CityDetails";

describe("CityDetails Component", () => {
  const mockCity = {
    id: 1,
    name: "Los Angeles",
    state: "California",
    population: 4000000,
    airports: [
      { id: 1, name: "Los Angeles International Airport", code: "LAX" },
      { id: 2, name: "Bob Hope Airport", code: "BUR" },
    ],
  };

  test("renders city details correctly", () => {
    render(<CityDetails city={mockCity} />);

    const cityDetailsSection = screen.getByRole("heading", {
      name: /city details/i,
    }).parentElement;
    const cityDetails = within(cityDetailsSection);

    expect(cityDetails.getByText("ID")).toBeInTheDocument();
    expect(cityDetails.getByText("1")).toBeInTheDocument();
    expect(cityDetails.getByText("Name")).toBeInTheDocument();
    expect(cityDetails.getByText("Los Angeles")).toBeInTheDocument();
    expect(cityDetails.getByText("Province/State")).toBeInTheDocument();
    expect(cityDetails.getByText("California")).toBeInTheDocument();
    expect(cityDetails.getByText("Population")).toBeInTheDocument();
    expect(cityDetails.getByText("4000000")).toBeInTheDocument();
    expect(cityDetails.getByText("No. of Airports")).toBeInTheDocument();
    expect(cityDetails.getByText("2")).toBeInTheDocument();
  });

  test("renders airport details correctly", () => {
    render(<CityDetails city={mockCity} />);

    const airportsSection = screen.getByRole("heading", {
      name: /airports/i,
    }).parentElement;
    const airportsList = within(airportsSection);

    expect(airportsList.getByText("Airports (2)")).toBeInTheDocument();
    expect(
      airportsList.getByText("Los Angeles International Airport")
    ).toBeInTheDocument();
    expect(airportsList.getByText("Bob Hope Airport")).toBeInTheDocument();
  });

  test("handles missing airport details gracefully", () => {
    const mockCityWithoutAirports = {
      id: 2,
      name: "San Francisco",
      state: "California",
      population: 870000,
      airports: [],
    };

    render(<CityDetails city={mockCityWithoutAirports} />);

    const cityDetailsSection = screen.getByRole("heading", {
      name: /city details/i,
    }).parentElement;
    const cityDetails = within(cityDetailsSection);

    expect(cityDetails.getByText("ID")).toBeInTheDocument();
    expect(cityDetails.getByText("2")).toBeInTheDocument();
    expect(cityDetails.getByText("Name")).toBeInTheDocument();
    expect(cityDetails.getByText("San Francisco")).toBeInTheDocument();
    expect(cityDetails.getByText("Province/State")).toBeInTheDocument();
    expect(cityDetails.getByText("California")).toBeInTheDocument();
    expect(cityDetails.getByText("Population")).toBeInTheDocument();
    expect(cityDetails.getByText("870000")).toBeInTheDocument();
    expect(cityDetails.getByText("No. of Airports")).toBeInTheDocument();
    expect(cityDetails.getByText("0")).toBeInTheDocument();

    const airportsSection = screen.getByRole("heading", {
      name: /airports/i,
    }).parentElement;
    const airportsList = within(airportsSection);

    expect(airportsList.getByText("Airports (0)")).toBeInTheDocument();
  });
});
