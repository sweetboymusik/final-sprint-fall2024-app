import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAirlineById } from "../api/airlines-api";
import AirlineDetails from "../components/AirlineDetails";
import Button from "../components/Button";

function Airline() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [airline, setAirline] = useState({});

  const loadAirline = useCallback(async () => {
    const response = await fetchAirlineById(id);
    setAirline(response);
  }, [id]);

  useEffect(() => {
    loadAirline();
  }, [loadAirline, id]);

  const handleButtonClick = function () {
    navigate(`/airlines/${id}/edit`);
  };

  return (
    <Page label={"Airline | " + airline.name}>
      <Button icon={"edit"} label={"Edit"} onClick={handleButtonClick} />
      <AirlineDetails airline={airline} />
    </Page>
  );
}

export default Airline;
