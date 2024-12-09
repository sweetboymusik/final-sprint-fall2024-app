import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllAirports } from "../api/airports-api";
import { fetchAllAircraft } from "../api/aircraft-api";
import { updateFlight } from "../api/flights-api";
import FormDropdown from "./FormDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FlightForm({ entity: flight = {}, isNew: isNewFlight = false }) {
  const navigate = useNavigate();

  const [departure, setDeparture] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [origin, setOrigin] = useState(1);
  const [destination, setDestination] = useState(1);
  const [aircraft, setAircraft] = useState(1);

  const [airports, setAirports] = useState([]);
  const [aircrafts, setAircrafts] = useState([]);

  // Convert UTC to local Date object for display
  const parseUTCToLocal = (utcString) => {
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

  // Convert local Date object to UTC ISO string for submission
  const convertLocalToUTCISO = (localDate) => {
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
      setOrigin(flight.origin?.id || 0);
      setDestination(flight.destination?.id || 0);
      setAircraft(flight.aircraft?.id || 0);
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

    loadAirports();
  }, []);

  useEffect(() => {
    const loadAircrafts = async () => {
      try {
        const response = await fetchAllAircraft();
        setAircrafts(response);
      } catch (error) {
        console.error("Error fetching aircraft:", error);
      }
    };

    loadAircrafts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFlight = {
        id: isNewFlight ? undefined : flight.id,
        departure: departure ? convertLocalToUTCISO(departure) : null,
        arrival: arrival ? convertLocalToUTCISO(arrival) : null,
        originId: origin,
        destinationId: destination,
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Departure</label>
        <DatePicker
          selected={departure}
          onChange={(date) => setDeparture(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
          className="form-control"
        />
      </div>

      <div>
        <label>Arrival</label>
        <DatePicker
          selected={arrival}
          onChange={(date) => setArrival(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
          className="form-control"
        />
      </div>

      <FormDropdown
        label="Origin"
        list={airports}
        value={origin}
        onChange={(e) => setOrigin(Number(e.target.value))}
      />

      <FormDropdown
        label="Destination"
        list={airports}
        value={destination}
        onChange={(e) => setDestination(Number(e.target.value))}
      />

      <FormDropdown
        label="Aircraft"
        list={aircrafts}
        value={aircraft}
        onChange={(e) => setAircraft(Number(e.target.value))}
      />

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FlightForm;
