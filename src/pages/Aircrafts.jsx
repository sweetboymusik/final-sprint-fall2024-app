import React, { useCallback, useEffect, useState } from "react";
import List from "../components/List";
import { fetchAllAircraft } from "../api/aircraft-api";
import Page from "../components/Page";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Aircrafts() {
  const { pathname: url } = useLocation();
  const navigate = useNavigate();
  const [aircraft, setAircraft] = useState([]);

  const loadAircraft = useCallback(async () => {
    const response = await fetchAllAircraft();
    setAircraft(response);
  }, []);

  useEffect(() => {
    loadAircraft();
  }, [loadAircraft]);

  const handleAddAircraft = function () {
    navigate(`/aircraft/add`);
  };

  return (
    <Page label={"Aircraft"}>
      <Button icon="add" label={"Add"} onClick={handleAddAircraft} />
      <List list={aircraft} url={url} />
    </Page>
  );
}

export default Aircrafts;
