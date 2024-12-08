import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import CityDetails from "../components/CityDetails";
import { fetchCityById } from "../api/cities-api";
import { useParams } from "react-router-dom";

function City() {
  const { id } = useParams();
  const [city, setCity] = useState({});

  const loadCity = useCallback(async () => {
    const response = await fetchCityById(id);
    setCity(response);
  }, [id]);

  useEffect(() => {
    loadCity();
  }, [loadCity, id]);

  return (
    <Page label={"City | " + city.name}>
      <CityDetails city={city} />
    </Page>
  );
}

export default City;
