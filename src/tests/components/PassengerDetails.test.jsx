/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import PassengerDetails from "../../components/PassengerDetails";

describe("PassengerDetails Component", () => {
  const mockPassenger = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    city: {
      id: 10,
      name: "Los Angeles",
      state: "California",
      population: 4000000,
    },
    flights: [
      { id: 1, flightNumber: "AA100", airline: "American Airlines" },
      { id: 2, flightNumber: "AA101", airline: "American Airlines" },
    ],
  };

  test("renders passenger details correctly", () => {
    render(<PassengerDetails passenger={mockPassenger} />);

    const passengerDetailsSection = screen.getByRole("heading", {
      name: /passenger details/i,
    }).parentElement;

    expect(passengerDetailsSection).toHaveTextContent("ID");
    expect(passengerDetailsSection).toHaveTextContent("1");
    expect(passengerDetailsSection).toHaveTextContent("First Name");
    expect(passengerDetailsSection).toHaveTextContent("John");
    expect(passengerDetailsSection).toHaveTextContent("Last Name");
    expect(passengerDetailsSection).toHaveTextContent("Doe");
    expect(passengerDetailsSection).toHaveTextContent("Phone Number");
    expect(passengerDetailsSection).toHaveTextContent("123-456-7890");
    expect(passengerDetailsSection).toHaveTextContent("Email");
    expect(passengerDetailsSection).toHaveTextContent("john.doe@example.com");
  });

  test("renders city details correctly", () => {
    render(<PassengerDetails passenger={mockPassenger} />);

    const cityDetailsSection = screen.getByRole("heading", {
      name: /city/i,
    }).parentElement;

    expect(cityDetailsSection).toHaveTextContent("ID");
    expect(cityDetailsSection).toHaveTextContent("10");
    expect(cityDetailsSection).toHaveTextContent("Name");
    expect(cityDetailsSection).toHaveTextContent("Los Angeles");
    expect(cityDetailsSection).toHaveTextContent("Province/State");
    expect(cityDetailsSection).toHaveTextContent("California");
    expect(cityDetailsSection).toHaveTextContent("Population");
    expect(cityDetailsSection).toHaveTextContent("4000000");
  });

  test("renders flights details correctly", () => {
    render(<PassengerDetails passenger={mockPassenger} />);

    const flightsDetailsSection = screen.getByRole("heading", {
      name: /flights/i,
    }).parentElement;

    expect(flightsDetailsSection).toHaveTextContent("AA100");
    expect(flightsDetailsSection).toHaveTextContent("AA101");
  });
});
