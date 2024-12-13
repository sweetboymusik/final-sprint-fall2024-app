import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllAirports, fetchGatesByAirportId } from "../api/airports-api";
import { fetchAllAircraft } from "../api/aircraft-api";
import { updateFlight } from "../api/flights-api";
import FormDropdown from "./FormDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";

function FlightForm({ entity: flight = {}, isNew: isNewFlight = false }) {
  const navigate = useNavigate();

  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [originGate, setOriginGate] = useState("");
  const [destinationGate, setDestinationGate] = useState("");
  const [aircraft, setAircraft] = useState("");

  const [airports, setAirports] = useState([]);
  const [aircrafts, setAircrafts] = useState([]);
  const [originGates, setOriginGates] = useState([]);
  const [destinationGates, setDestinationGates] = useState([]);

  const parseUTCToLocal = (utcString) => {
    if (!utcString) return null;
    const utcDate = new Date(utcString);
    return new Date(
      utcDate.getUTCFullYear(),
      utcDate.getUTCMonth(),
      utcDate.getUTCDate(),
      utcDate.getUTCHours(),
      utcDate.getUTCMinutes(),
      utcDate.getUTCSeconds()
    );
  };

  const convertLocalToUTCISO = (localDate) => {
    if (!localDate) return null;
    return new Date(
      Date.UTC(
        localDate.getFullYear(),
        localDate.getMonth(),
        localDate.getDate(),
        localDate.getHours(),
        localDate.getMinutes(),
        localDate.getSeconds()
      )
    ).toISOString();
  };

  useEffect(() => {
    if (flight && !isNewFlight) {
      setDeparture(flight.departure ? parseUTCToLocal(flight.departure) : null);
      setArrival(flight.arrival ? parseUTCToLocal(flight.arrival) : null);
      setOrigin(flight.origin?.id || "");
      setDestination(flight.destination?.id || "");
      setAircraft(flight.aircraft?.id || "");
      setOriginGate(flight.originGate?.id || "");
      setDestinationGate(flight.destinationGate?.id || "");
    }
  }, [flight, isNewFlight]);

  useEffect(() => {
    const loadAirports = async () => {
      try {
        const response = await fetchAllAirports();
        setAirports(response);
      } catch (error) {
        console.error("Error fetching airports:", error);
      }
    };

    const loadAircrafts = async () => {
      try {
        const response = await fetchAllAircraft();
        setAircrafts(response);
      } catch (error) {
        console.error("Error fetching aircraft:", error);
      }
    };

    loadAirports();
    loadAircrafts();
  }, []);

  useEffect(() => {
    const fetchOriginGates = async () => {
      if (!origin) return;
      try {
        const gates = await fetchGatesByAirportId(origin);
        setOriginGates(gates);
      } catch (error) {
        console.error("Error fetching origin gates:", error);
      }
    };

    fetchOriginGates();
  }, [origin]);

  useEffect(() => {
    const fetchDestinationGates = async () => {
      if (!destination) return;
      try {
        const gates = await fetchGatesByAirportId(destination);
        setDestinationGates(gates);
      } catch (error) {
        console.error("Error fetching destination gates:", error);
      }
    };

    fetchDestinationGates();
  }, [destination]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Aircraft: ", aircraft);
    try {
      const updatedFlight = {
        id: isNewFlight ? undefined : flight.id,
        departure: departure ? convertLocalToUTCISO(departure) : null,
        arrival: arrival ? convertLocalToUTCISO(arrival) : null,
        originGateId: originGate,
        destinationGateId: destinationGate,
        aircraftId: aircraft,
      };

      const response = await updateFlight(updatedFlight, isNewFlight);
      const flightId = response?.id || flight.id;

      navigate(`/flights/${flightId}`);
    } catch (error) {
      console.error("Error updating flight:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-[700px] gap-4">
      <div className="flex items-center">
        <label className="flex-1">Departure</label>
        <DatePicker
          selected={departure}
          onChange={(date) => setDeparture(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
          className="date-picker p-2 bg-primary-100 flex-1 border border-primary-200 rounded"
        />
      </div>

      <div className="flex items-center">
        <label className="flex-1">Arrival</label>
        <DatePicker
          selected={arrival}
          onChange={(date) => setArrival(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
          className="date-picker bg-primary-100 flex-1 border border-primary-200 rounded"
        />
      </div>

      <FormDropdown
        label="Origin Airport"
        list={airports}
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />

      <FormDropdown
        label="Origin Gate"
        list={originGates}
        value={originGate}
        onChange={(e) => setOriginGate(e.target.value)}
      />

      <FormDropdown
        label="Destination Airport"
        list={airports}
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <FormDropdown
        label="Destination Gate"
        list={destinationGates}
        value={destinationGate}
        onChange={(e) => setDestinationGate(e.target.value)}
      />

      <FormDropdown
        label="Aircraft"
        list={aircrafts}
        value={aircraft}
        onChange={(e) => setAircraft(e.target.value)}
      />

      <Button icon="submit" type="submit" label={"Submit"} />
    </form>
  );
}

export default FlightForm;
