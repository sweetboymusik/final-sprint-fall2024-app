/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import AircraftDetails from "../../components/AircraftDetails";

describe("AircraftDetails Component", () => {
  const mockAircraft = {
    id: 1,
    type: "Boeing 737",
    passengerCapacity: 180,
    airline: {
      id: 10,
      name: "American Airlines",
      country: "United States",
    },
  };

  test("renders aircraft details correctly", () => {
    render(<AircraftDetails aircraft={mockAircraft} />);

    const aircraftDetailsSection = screen.getByRole("heading", {
      name: /aircraft details/i,
    }).parentElement;
    const aircraftDetails = within(aircraftDetailsSection);

    expect(aircraftDetails.getByText("ID")).toBeInTheDocument();
    expect(aircraftDetails.getByText("1")).toBeInTheDocument();
    expect(aircraftDetails.getByText("Type")).toBeInTheDocument();
    expect(aircraftDetails.getByText("Boeing 737")).toBeInTheDocument();
    expect(aircraftDetails.getByText("Capacity")).toBeInTheDocument();
    expect(aircraftDetails.getByText("180")).toBeInTheDocument();
  });

  test("renders airline details correctly", () => {
    render(<AircraftDetails aircraft={mockAircraft} />);

    const airlineDetailsSection = screen.getByRole("heading", {
      name: /airline/i,
    }).parentElement;
    const airlineDetails = within(airlineDetailsSection);

    expect(airlineDetails.getByText("ID")).toBeInTheDocument();
    expect(airlineDetails.getByText("10")).toBeInTheDocument();
    expect(airlineDetails.getByText("Name")).toBeInTheDocument();
    expect(airlineDetails.getByText("American Airlines")).toBeInTheDocument();
    expect(airlineDetails.getByText("Country")).toBeInTheDocument();
    expect(airlineDetails.getByText("United States")).toBeInTheDocument();
  });

  test("handles missing airline details gracefully", () => {
    const mockAircraftWithoutAirline = {
      id: 2,
      type: "Airbus A320",
      passengerCapacity: 150,
      airline: null,
    };

    render(<AircraftDetails aircraft={mockAircraftWithoutAirline} />);

    const aircraftDetailsSection = screen.getByRole("heading", {
      name: /aircraft details/i,
    }).parentElement;
    const aircraftDetails = within(aircraftDetailsSection);

    expect(aircraftDetails.getByText("ID")).toBeInTheDocument();
    expect(aircraftDetails.getByText("2")).toBeInTheDocument();
    expect(aircraftDetails.getByText("Type")).toBeInTheDocument();
    expect(aircraftDetails.getByText("Airbus A320")).toBeInTheDocument();
    expect(aircraftDetails.getByText("Capacity")).toBeInTheDocument();
    expect(aircraftDetails.getByText("150")).toBeInTheDocument();

    const airlineDetailsSection = screen.getByRole("heading", {
      name: /airline/i,
    }).parentElement;
    const airlineDetails = within(airlineDetailsSection);

    expect(airlineDetails.getByText("ID")).toBeInTheDocument();
    expect(airlineDetails.getByText("Name")).toBeInTheDocument();
    expect(airlineDetails.getByText("Country")).toBeInTheDocument();
  });
});
