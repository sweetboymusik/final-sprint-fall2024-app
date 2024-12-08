import List from "../components/List";
import { useCallback, useEffect, useState } from "react";
import { fetchAllCities } from "../api/cities-api";
import Page from "../components/Page";
import { useLocation } from "react-router-dom";

function Cities() {
  const { pathname: url } = useLocation();
  const [cities, setCities] = useState([]);

  const loadCities = useCallback(async () => {
    const response = await fetchAllCities();
    setCities(response);
  }, []);

  useEffect(() => {
    loadCities();
  }, [loadCities]);

  return (
    <Page label={"Cities"}>
      <List list={cities} url={url} />
    </Page>
  );
}

export default Cities;
