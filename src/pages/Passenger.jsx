import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import { fetchPassengerById } from "../api/passengers-api";
import { useParams } from "react-router-dom";
import PassengerDetails from "../components/PassengerDetails";

function Passenger() {
  const { id } = useParams();
  const [passenger, setPassenger] = useState({});

  const loadPassenger = useCallback(async () => {
    const response = await fetchPassengerById(id);
    setPassenger(response);
  }, [id]);

  useEffect(() => {
    loadPassenger();
  }, [loadPassenger, id]);

  return (
    <Page
      label={"Passenger | " + passenger.firstName + " " + passenger.lastName}
    >
      <PassengerDetails passenger={passenger} />
    </Page>
  );
}

export default Passenger;
