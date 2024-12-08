import List from "../components/List";
import { useCallback, useEffect, useState } from "react";
import { fetchAllCities } from "../api/cities-api";
import Page from "../components/Page";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Cities() {
  const { pathname: url } = useLocation();
  const navigate = useNavigate();
  const [cities, setCities] = useState([]);

  const loadCities = useCallback(async () => {
    const response = await fetchAllCities();
    setCities(response);
  }, []);

  useEffect(() => {
    loadCities();
  }, [loadCities]);

  const handleAddCity = function () {
    navigate(`/cities/add`);
  };

  return (
    <Page label={"Cities"}>
      <Button icon="add" label={"Add"} onClick={handleAddCity} />
      <List list={cities} url={url} />
    </Page>
  );
}

export default Cities;
