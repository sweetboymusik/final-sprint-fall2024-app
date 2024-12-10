import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormDropdown from "./FormDropdown";
import Button from "./Button";
import { fetchAllPassengers } from "../api/passengers-api";
import { addPassengerToFlight } from "../api/flights-api";
import List from "./List";

function FlightPassengersForm({ flight = {} }) {
  const navigate = useNavigate();

  const [passengers, setPassengers] = useState([]);
  const [selectedPassenger, setSelectedPassenger] = useState(null);
  const [passengersToAdd, setPassengersToAdd] = useState([]);

  useEffect(() => {
    const loadPassengers = async () => {
      try {
        const response = await fetchAllPassengers();
        const existingPassengerIds =
          flight?.passengerList?.map((p) => p.id) || [];

        const filteredPassengers = response.filter(
          (passenger) => !existingPassengerIds.includes(passenger.id)
        );

        setPassengers(filteredPassengers);
      } catch (error) {
        console.error("Error fetching passengers:", error);
      }
    };

    loadPassengers();
  }, [flight.passengerList]);

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
          label="Passenger"
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
          icon="add"
          label="Add"
          onClick={handleAddPassenger}
          disabled={!selectedPassenger}
        />
      </div>

      <div className="details-table">
        <h2>Passengers to Add</h2>

        {passengersToAdd.length === 0 ? (
          ""
        ) : (
          <List list={passengersToAdd} onRemove={handleRemovePassenger} />
        )}

        <Button icon="submit" type="submit" label={"Submit"} />
      </div>
    </form>
  );
}

export default FlightPassengersForm;
