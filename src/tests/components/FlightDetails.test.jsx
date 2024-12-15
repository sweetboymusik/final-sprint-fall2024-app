/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import FlightDetails from "../../components/FlightDetails";

describe("FlightDetails Component", () => {
  const mockFlight = {
    id: 1,
    arrival: "2024-12-20T18:30:00",
    departure: "2024-12-20T12:00:00",
    numberOfPassengers: 150,
    origin: {
      id: 10,
      name: "John F. Kennedy International Airport",
      code: "JFK",
      city: {
        name: "New York",
        state: "New York",
      },
    },
    destination: {
      id: 20,
      name: "Los Angeles International Airport",
      code: "LAX",
      city: {
        name: "Los Angeles",
        state: "California",
      },
    },
    aircraft: {
      id: 30,
      type: "Boeing 777",
      airline: {
        name: "American Airlines",
      },
    },
    passengerList: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ],
  };

  test("renders flight details correctly", () => {
    render(<FlightDetails flight={mockFlight} />);

    const flightDetailsSection = screen.getByRole("heading", {
      name: /flight details/i,
    }).parentElement;
    const flightDetails = within(flightDetailsSection);

    expect(flightDetails.getByText("ID")).toBeInTheDocument();
    expect(flightDetails.getByText("1")).toBeInTheDocument();
    expect(flightDetails.getByText("Arrival")).toBeInTheDocument();
    expect(flightDetails.getByText("2024-12-20T18:30:00")).toBeInTheDocument();
    expect(flightDetails.getByText("Departure")).toBeInTheDocument();
    expect(flightDetails.getByText("2024-12-20T12:00:00")).toBeInTheDocument();
    expect(flightDetails.getByText("Number of Passengers")).toBeInTheDocument();
    expect(flightDetails.getByText("150")).toBeInTheDocument();
  });

  test("renders origin airport details correctly", () => {
    render(<FlightDetails flight={mockFlight} />);

    const originAirportSection = screen.getByRole("heading", {
      name: /origin airport/i,
    }).parentElement;
    const originAirportDetails = within(originAirportSection);

    expect(originAirportDetails.getByText("ID")).toBeInTheDocument();
    expect(originAirportDetails.getByText("10")).toBeInTheDocument();
    expect(originAirportDetails.getByText("Name")).toBeInTheDocument();
    expect(
      originAirportDetails.getByText("John F. Kennedy International Airport")
    ).toBeInTheDocument();
    expect(originAirportDetails.getByText("Code")).toBeInTheDocument();
    expect(originAirportDetails.getByText("JFK")).toBeInTheDocument();
    expect(originAirportDetails.getByText("City")).toBeInTheDocument();
    expect(
      originAirportDetails.getByText("New York, New York")
    ).toBeInTheDocument();
  });

  test("renders destination airport details correctly", () => {
    render(<FlightDetails flight={mockFlight} />);

    const destinationAirportSection = screen.getByRole("heading", {
      name: /destination airport/i,
    }).parentElement;
    const destinationAirportDetails = within(destinationAirportSection);

    expect(destinationAirportDetails.getByText("ID")).toBeInTheDocument();
    expect(destinationAirportDetails.getByText("20")).toBeInTheDocument();
    expect(destinationAirportDetails.getByText("Name")).toBeInTheDocument();
    expect(
      destinationAirportDetails.getByText("Los Angeles International Airport")
    ).toBeInTheDocument();
    expect(destinationAirportDetails.getByText("Code")).toBeInTheDocument();
    expect(destinationAirportDetails.getByText("LAX")).toBeInTheDocument();
    expect(destinationAirportDetails.getByText("City")).toBeInTheDocument();
    expect(
      destinationAirportDetails.getByText("Los Angeles, California")
    ).toBeInTheDocument();
  });

  test("renders aircraft details correctly", () => {
    render(<FlightDetails flight={mockFlight} />);

    const aircraftDetailsSection = screen.getByRole("heading", {
      name: /aircraft details/i,
    }).parentElement;
    const aircraftDetails = within(aircraftDetailsSection);

    expect(aircraftDetails.getByText("ID")).toBeInTheDocument();
    expect(aircraftDetails.getByText("30")).toBeInTheDocument();
    expect(aircraftDetails.getByText("Type")).toBeInTheDocument();
    expect(aircraftDetails.getByText("Boeing 777")).toBeInTheDocument();
    expect(aircraftDetails.getByText("Airline")).toBeInTheDocument();
    expect(aircraftDetails.getByText("American Airlines")).toBeInTheDocument();
  });

  test("renders passenger details correctly", () => {
    render(<FlightDetails flight={mockFlight} />);

    const passengersSection = screen.getByRole("heading", {
      name: /passengers/i,
    }).parentElement;
    const passengersList = within(passengersSection);

    expect(passengersList.getByText("Passengers (2)")).toBeInTheDocument();
    expect(passengersList.getByText("John Doe")).toBeInTheDocument();
    expect(passengersList.getByText("Jane Doe")).toBeInTheDocument();
  });

  test("handles missing passenger list gracefully", () => {
    const mockFlightWithoutPassengers = { ...mockFlight, passengerList: [] };

    render(<FlightDetails flight={mockFlightWithoutPassengers} />);

    const passengersSection = screen.getByRole("heading", {
      name: /passengers/i,
    }).parentElement;
    const passengersList = within(passengersSection);

    expect(passengersList.getByText("Passengers (0)")).toBeInTheDocument();
  });
});
