import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import { fetchPassengerById } from "../api/passengers-api";
import { useNavigate, useParams } from "react-router-dom";
import PassengerDetails from "../components/PassengerDetails";
import Button from "../components/Button";

function Passenger() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [passenger, setPassenger] = useState({});

  const loadPassenger = useCallback(async () => {
    const response = await fetchPassengerById(id);
    setPassenger(response);
  }, [id]);

  useEffect(() => {
    loadPassenger();
  }, [loadPassenger, id]);

  const handleButtonClick = function () {
    navigate(`/passengers/${id}/edit`);
  };

  return (
    <Page
      label={"Passenger | " + passenger.firstName + " " + passenger.lastName}
      Button={
        <Button icon={"edit"} label={"Edit"} onClick={handleButtonClick} />
      }
    >
      <PassengerDetails passenger={passenger} />
    </Page>
  );
}

export default Passenger;
