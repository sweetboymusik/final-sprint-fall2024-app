import React, { useCallback, useEffect, useState } from "react";
import CenteredLayout from "../layouts/CenteredLayout";
import List from "../components/List";
import { fetchAllPassengers } from "../api/passengers-api";

function Passengers() {
  const [passengers, setPassengers] = useState([]);

  const loadPassengers = useCallback(async () => {
    const response = await fetchAllPassengers();
    setPassengers(response);
  }, []);

  useEffect(() => {
    loadPassengers();
  }, [loadPassengers]);
  return (
    <CenteredLayout>
      <List list={passengers} />
    </CenteredLayout>
  );
}

export default Passengers;
