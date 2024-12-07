import List from "../components/List";
import { useCallback, useEffect, useState } from "react";
import { fetchAllCities } from "../api/cities-api";
import Page from "../components/Page";

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
    <Page>
      <List list={cities} />
    </Page>
  );
}

export default Cities;
