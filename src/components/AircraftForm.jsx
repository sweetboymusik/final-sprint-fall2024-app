import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllAirlines } from "../api/airlines-api";
import { updateAircraft } from "../api/aircraft-api";
import FormItem from "./FormItem";
import FormDropdown from "./FormDropdown";
import Button from "./Button";

function AircraftForm({ entity: aircraft = {}, isNew: isNewAircraft = false }) {
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [airline, setAirline] = useState(1);

  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    if (aircraft && !isNewAircraft) {
      setType(aircraft.type || "");
      setCapacity(aircraft.passengerCapacity || 1);
      setAirline(aircraft.airline?.id || 0);
    }
  }, [aircraft, isNewAircraft]);

  useEffect(() => {
    const loadAirlines = async () => {
      try {
        const response = await fetchAllAirlines();
        setAirlines(response);
      } catch (error) {
        console.error("Error fetching airlines:", error);
      }
    };

    loadAirlines();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedAircraft = {
        id: isNewAircraft ? undefined : aircraft.id,
        type,
        passengerCapacity: capacity,
        airlineId: airline,
      };

      const response = await updateAircraft(updatedAircraft, isNewAircraft);
      const aircraftId = response?.id || aircraft.id;

      navigate(`/aircraft/${aircraftId}`);
    } catch (error) {
      console.error("Error updating aircraft:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormItem
        type={"text"}
        label={"Type"}
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <FormItem
        type={"number"}
        label={"Passenger Capacity"}
        value={capacity}
        onChange={(e) => setCapacity(Number(e.target.value))}
      />

      <FormDropdown
        label={"Airline"}
        list={airlines}
        value={airline}
        onChange={(e) => setAirline(Number(e.target.value))}
      />

      <Button icon="submit" type="submit" label="Submit" />
    </form>
  );
}

export default AircraftForm;
