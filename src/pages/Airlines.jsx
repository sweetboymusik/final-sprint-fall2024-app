import React, { useCallback, useEffect, useState } from "react";
import { fetchAllAirlines } from "../api/airlines-api";
import List from "../components/List";
import Page from "../components/Page";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Airlines() {
  const { pathname: url } = useLocation();
  const navigate = useNavigate();
  const [airlines, setAirlines] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAirlines = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchAllAirlines();
      setAirlines(response);
    } catch (error) {
      console.error("Error fetching airlines:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAirlines();
  }, [loadAirlines]);

  useEffect(() => {
    document.title = "Airlines";
  }, []);

  const handleAddAirline = function () {
    navigate(`/airlines/add`);
  };

  return (
    <Page
      label={"Airlines"}
      Button={<Button icon="add" label={"Add"} onClick={handleAddAirline} />}
    >
      {loading ? (
        <p>Loading airlines...</p>
      ) : (
        <List list={airlines} url={url} />
      )}
    </Page>
  );
}

export default Airlines;
