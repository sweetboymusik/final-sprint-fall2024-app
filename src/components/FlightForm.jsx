import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllAirports } from "../api/airports-api";
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
  const [origin, setOrigin] = useState(1);
  const [destination, setDestination] = useState(1);
  const [aircraft, setAircraft] = useState(1);

  const [airports, setAirports] = useState([]);
  const [aircrafts, setAircrafts] = useState([]);

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
    <form onSubmit={handleSubmit} className="flex flex-col w-[700px] gap-2">
      <div className="flex items-center">
        <label className="flex-1">Departure</label>
        <DatePicker
          selected={departure}
          onChange={(date) => setDeparture(date)}
          showTimeSelect
          showIcon
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
          showIcon
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
          className="date-picker bg-primary-100 flex-1 border border-primary-200 rounded"
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

      <Button icon="submit" type="submit" label={"Submit"} />
    </form>
  );
}

export default FlightForm;
