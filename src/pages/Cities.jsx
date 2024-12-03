import { useCallback, useEffect, useState } from "react";
import { fetchAllCities } from "../api/fetchCities";
import CityList from "../components/CityList";
import NavBar from "../components/NavBar";

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
    <div className="flex flex-col gap-6 m-10">
      <NavBar />
      <h1 className="text-3xl">All Cities</h1>
      <CityList cities={cities} />
    </div>
  );
}

export default Cities;
