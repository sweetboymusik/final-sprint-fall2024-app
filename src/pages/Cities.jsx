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
  const [loading, setLoading] = useState(true);

  const loadCities = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchAllCities();
      setCities(response);
    } catch (error) {
      console.error("Error fetching cities:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCities();
  }, [loadCities]);

  useEffect(() => {
    document.title = "Cities";
  }, []);

  const handleAddCity = function () {
    navigate(`/cities/add`);
  };

  return (
    <Page
      label={"Cities"}
      Button={<Button icon="add" label={"Add"} onClick={handleAddCity} />}
    >
      {loading ? <p>Loading cities...</p> : <List list={cities} url={url} />}
    </Page>
  );
}

export default Cities;
