import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAirportById } from "../api/airports-api";
import AirportDetails from "../components/AirportDetails";
import Button from "../components/Button";

function Airport() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [airport, setAirport] = useState({});

  const loadAirport = useCallback(async () => {
    const response = await fetchAirportById(id);
    setAirport(response);
  }, [id]);

  useEffect(() => {
    loadAirport();
  }, [loadAirport, id]);

  const handleButtonClick = function () {
    navigate(`/airports/${id}/edit`);
  };

  return (
    <Page
      label={"Airport | " + airport.name}
      Button={
        <Button icon={"edit"} label={"Edit"} onClick={handleButtonClick} />
      }
    >
      <AirportDetails airport={airport} />
    </Page>
  );
}

export default Airport;
