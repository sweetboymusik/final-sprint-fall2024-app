import React, { useCallback, useEffect, useState } from "react";
import List from "../components/List";
import { fetchAllPassengers } from "../api/passengers-api";
import Page from "../components/Page";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Passengers() {
  const { pathname: url } = useLocation();
  const navigate = useNavigate();
  const [passengers, setPassengers] = useState([]);

  const loadPassengers = useCallback(async () => {
    const response = await fetchAllPassengers();
    setPassengers(response);
  }, []);

  useEffect(() => {
    loadPassengers();
  }, [loadPassengers]);

  const handleAddPassenger = function () {
    navigate(`/passengers/add`);
  };

  return (
    <Page
      label={"Passengers"}
      Button={<Button icon="add" label={"Add"} onClick={handleAddPassenger} />}
    >
      <List list={passengers} url={url} />
    </Page>
  );
}

export default Passengers;
