import React, { useCallback, useEffect, useState } from "react";
import Page from "../components/Page";
import CityDetails from "../components/CityDetails";
import { fetchCityById } from "../api/cities-api";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";

function City() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [city, setCity] = useState({});

  const loadCity = useCallback(async () => {
    const response = await fetchCityById(id);
    setCity(response);
  }, [id]);

  useEffect(() => {
    loadCity();
  }, [loadCity, id]);

  const handleButtonClick = function () {
    navigate(`/cities/${id}/edit`);
  };

  return (
    <Page
      label={"City | " + city.name}
      Button={
        <Button icon={"edit"} label={"Edit"} onClick={handleButtonClick} />
      }
    >
      <CityDetails city={city} />
    </Page>
  );
}

export default City;
