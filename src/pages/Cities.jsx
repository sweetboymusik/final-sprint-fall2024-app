import { useCallback, useEffect, useState } from "react";
import { fetchAllCities } from "../api/fetchCities";
import CityList from "../components/CityList";

function Cities() {
  const [cities, setCities] = useState([]);

  const loadCitites = useCallback(async () => {
    const response = await fetchAllCities();
    setCities(response);
  }, []);

  useEffect(() => {
    loadCitites().then((r) => console.log("Cities loaded"));
  }, [loadCitites]);

  return (
    <div>
      <CityList cities={cities} />
    </div>
  );
}

export default Cities;
