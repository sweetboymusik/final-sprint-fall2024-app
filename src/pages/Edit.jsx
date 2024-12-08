import { useParams } from "react-router-dom";
import CityForm from "../components/CityForm";
import Page from "../components/Page";
import { useCallback, useEffect, useState } from "react";
import { fetchCityById } from "../api/cities-api";

function Edit() {
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
    <Page label={"Edit | " + city.name}>
      <CityForm city={city} />
    </Page>
  );
}

export default Edit;
