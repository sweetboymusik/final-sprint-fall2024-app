import NavBar from "../components/NavBar";
import CenteredLayout from "../layouts/CenteredLayout";
import List from "../components/List";
import { useCallback, useEffect, useState } from "react";
import { fetchAllCities } from "../api/cities-api";

function Cities() {
  const [cities, setCities] = useState([]);

  const loadCities = useCallback(async () => {
    const response = await fetchAllCities();
    setCities(response);
  }, []);

  useEffect(() => {
    loadCities();
  }, [loadCities]);

  return (
    <CenteredLayout>
      <NavBar />
      <List list={cities} />
    </CenteredLayout>
  );
}

export default Cities;
