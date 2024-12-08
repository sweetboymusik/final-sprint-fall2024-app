import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAircraftById } from "../api/aircraft-api";
import Page from "../components/Page";
import AircraftDetails from "../components/AircraftDetails";

function Aircraft() {
  const { id } = useParams();
  console.log("ID:", id);
  const [aircraft, setAircraft] = useState({});

  const loadAircraft = useCallback(async () => {
    const response = await fetchAircraftById(id);
    console.log(response);
    setAircraft(response);
  }, [id]);

  useEffect(() => {
    loadAircraft();
  }, [loadAircraft, id]);

  return (
    <Page label={"Aircraft | " + aircraft.type}>
      <AircraftDetails aircraft={aircraft} />
    </Page>
  );
}

export default Aircraft;
