import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAircraftById } from "../api/aircraft-api";
import Page from "../components/Page";
import AircraftDetails from "../components/AircraftDetails";
import Button from "../components/Button";

function Aircraft() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aircraft, setAircraft] = useState({});

  const loadAircraft = useCallback(async () => {
    const response = await fetchAircraftById(id);
    console.log(response);
    setAircraft(response);
  }, [id]);

  useEffect(() => {
    loadAircraft();
  }, [loadAircraft, id]);

  const handleButtonClick = function () {
    navigate(`/aircraft/${id}/edit`);
  };

  return (
    <Page label={"Aircraft | " + aircraft.type}>
      <Button icon={"edit"} label={"Edit"} onClick={handleButtonClick} />
      <AircraftDetails aircraft={aircraft} />
    </Page>
  );
}

export default Aircraft;
