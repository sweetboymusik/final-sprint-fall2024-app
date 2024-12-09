import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormDropdown from "./FormDropdown";
import Button from "./Button";
import PassengersTable from "./PassengersTable";
import { fetchAllPassengers } from "../api/passengers-api";
import { addPassengerToFlight } from "../api/flights-api";

function FlightPassengersForm({ flight = {} }) {
  const navigate = useNavigate();

  const [passengers, setPassengers] = useState([]);
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [passengersToAdd, setPassengersToAdd] = useState([]);

  useEffect(() => {
    const loadPassengers = async () => {
      try {
        const response = await fetchAllPassengers();
        setPassengers(response);
      } catch (error) {
        console.error("Error fetching passengers:", error);
      }
    };

    loadPassengers();
  }, []);

  const handleAddPassenger = () => {
    if (
      selectedPassenger &&
      !passengersToAdd.some((p) => p.id === selectedPassenger.id)
    ) {
      setPassengersToAdd([...passengersToAdd, selectedPassenger]);
      setSelectedPassenger(null);
    }
  };

  const handleRemovePassenger = (passengerId) => {
    setPassengersToAdd(
      passengersToAdd.filter((passenger) => passenger.id !== passengerId)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      for (const passenger of passengersToAdd) {
        await addPassengerToFlight(flight.id, passenger.id);
      }
      navigate(`/flights/${flight.id}`);
    } catch (error) {
      console.error("Error adding passengers to flight:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-4 mb-4">
        <FormDropdown
          label="Add Passenger"
          list={passengers}
          value={selectedPassenger?.id || ""}
          onChange={(e) => {
            const passenger = passengers.find(
              (p) => p.id === Number(e.target.value)
            );
            setSelectedPassenger(passenger);
          }}
        />

        <Button
          type="button"
          label="Add"
          onClick={handleAddPassenger}
          disabled={!selectedPassenger}
        />
      </div>

      <h3 className="text-lg font-bold mb-4">Passengers to Add</h3>

      <PassengersTable
        passengers={passengersToAdd}
        onRemove={handleRemovePassenger}
      />

      <Button icon="submit" type="submit" label={"Submit"} />
    </form>
  );
}

export default FlightPassengersForm;
