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
  const [loading, setLoading] = useState(true);

  const loadAirports = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchAllAirports();
      setAirports(response);
    } catch (error) {
      console.error("Error fetching airports:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAirports();
  }, [loadAirports]);

  useEffect(() => {
    document.title = "Airports";
  }, []);

  const handleAddAirport = function () {
    navigate(`/airports/add`);
  };

  return (
    <Page
      label={"Airports"}
      Button={<Button icon="add" label={"Add"} onClick={handleAddAirport} />}
    >
      {loading ? (
        <p>Loading airports...</p>
      ) : (
        <List list={airports} url={url} />
      )}
    </Page>
  );
}

export default Airports;
