import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateAirport } from "../api/airports-api";
import { fetchAllCities } from "../api/cities-api";
import FormItem from "./FormItem";
import Button from "./Button";
import FormDropdown from "./FormDropdown";

function AirportForm({ entity: airport = {}, isNew: isNewAirport = false }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState(1);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (airport && !isNewAirport) {
      setName(airport.name || "");
      setCode(airport.code || "");
      setCity(airport.city?.id || 0);
    }
  }, [airport, isNewAirport]);

  useEffect(() => {
    const loadCities = async () => {
      try {
        const response = await fetchAllCities();
        setCities(response);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    loadCities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedAirport = {
        id: isNewAirport ? undefined : airport.id,
        name,
        code,
        cityId: city,
      };

      const response = await updateAirport(updatedAirport, isNewAirport);
      const airportId = response?.id || airport.id;

      navigate(`/airports/${airportId}`);
    } catch (error) {
      console.error("Error updating airport:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <FormItem
        type="text"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormItem
        type="text"
        label="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <FormDropdown
        label={"City"}
        list={cities}
        value={city}
        onChange={(e) => setCity(Number(e.target.value))}
      />

      <Button icon="submit" type="submit" label="Submit" />
    </form>
  );
}

export default AirportForm;
