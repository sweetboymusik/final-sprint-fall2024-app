/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import AirlineDetails from "../../components/AirlineDetails";

describe("AirlineDetails Component", () => {
  const mockAirline = {
    id: 1,
    name: "Delta Airlines",
    country: "United States",
    aircraftList: [
      { id: 101, type: "Boeing 737", passengerCapacity: 180 },
      { id: 102, type: "Airbus A320", passengerCapacity: 150 },
    ],
  };

  test("renders airline details correctly", () => {
    render(<AirlineDetails airline={mockAirline} />);

    const airlineDetailsSection = screen.getByRole("heading", {
      name: /airline details/i,
    }).parentElement;
    const airlineDetails = within(airlineDetailsSection);

    expect(airlineDetails.getByText("ID")).toBeInTheDocument();
    expect(airlineDetails.getByText("1")).toBeInTheDocument();
    expect(airlineDetails.getByText("Name")).toBeInTheDocument();
    expect(airlineDetails.getByText("Delta Airlines")).toBeInTheDocument();
    expect(airlineDetails.getByText("Country")).toBeInTheDocument();
    expect(airlineDetails.getByText("United States")).toBeInTheDocument();
  });

  test("renders aircraft list correctly", () => {
    render(<AirlineDetails airline={mockAirline} />);

    const aircraftListSection = screen.getByRole("heading", {
      name: /aircraft \(2\)/i,
    }).parentElement;
    const aircraftList = within(aircraftListSection);

    expect(aircraftList.getByText("Boeing 737")).toBeInTheDocument();
    expect(aircraftList.getByText("Airbus A320")).toBeInTheDocument();
  });

  test("handles missing aircraft list gracefully", () => {
    const mockAirlineWithoutAircraft = {
      id: 2,
      name: "American Airlines",
      country: "United States",
      aircraftList: [],
    };

    render(<AirlineDetails airline={mockAirlineWithoutAircraft} />);

    const airlineDetailsSection = screen.getByRole("heading", {
      name: /airline details/i,
    }).parentElement;
    const airlineDetails = within(airlineDetailsSection);

    expect(airlineDetails.getByText("ID")).toBeInTheDocument();
    expect(airlineDetails.getByText("2")).toBeInTheDocument();
    expect(airlineDetails.getByText("Name")).toBeInTheDocument();
    expect(airlineDetails.getByText("American Airlines")).toBeInTheDocument();
    expect(airlineDetails.getByText("Country")).toBeInTheDocument();
    expect(airlineDetails.getByText("United States")).toBeInTheDocument();

    const aircraftListSection = screen.getByRole("heading", {
      name: /aircraft \(0\)/i,
    }).parentElement;

    expect(within(aircraftListSection).queryByText("Boeing 737")).toBeNull();
    expect(within(aircraftListSection).queryByText("Airbus A320")).toBeNull();
  });
});
