import React, { useCallback, useEffect, useState } from "react";
import { fetchAllAirports } from "../api/airports-api";
import List from "../components/List";
import Page from "../components/Page";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Airports() {
  const { pathname: url } = useLocation();
  const navigate = useNavigate();
  const [airports, setAirports] = useState([]);

  const loadAirports = useCallback(async () => {
    const response = await fetchAllAirports();
    setAirports(response);
  }, []);

  useEffect(() => {
    loadAirports();
  }, [loadAirports]);

  const handleAddAirport = function () {
    navigate(`/airports/add`);
  };
  return (
    <Page
      label={"Airports"}
      Button={<Button icon="add" label={"Add"} onClick={handleAddAirport} />}
    >
      <List list={airports} url={url} />
    </Page>
  );
}

export default Airports;
