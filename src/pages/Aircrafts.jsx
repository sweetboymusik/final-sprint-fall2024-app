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
  const [loading, setLoading] = useState(true);

  const loadAircraft = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchAllAircraft();
      setAircraft(response);
    } catch (error) {
      console.error("Error fetching aircraft:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAircraft();
  }, [loadAircraft]);

  useEffect(() => {
    document.title = "Aircraft";
  }, []);

  const handleAddAircraft = function () {
    navigate(`/aircraft/add`);
  };

  return (
    <Page
      label={"Aircraft"}
      Button={<Button icon="add" label={"Add"} onClick={handleAddAircraft} />}
    >
      {loading ? (
        <p>Loading aircraft...</p>
      ) : (
        <List list={aircraft} url={url} />
      )}
    </Page>
  );
}

export default Aircrafts;
