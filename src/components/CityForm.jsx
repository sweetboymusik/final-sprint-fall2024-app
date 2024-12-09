import React, { useEffect, useState } from "react";
import FormItem from "./FormItem";
import { useNavigate } from "react-router-dom";
import { updateCity } from "../api/cities-api";
import Button from "./Button";

function CityForm({ entity: city = {}, isNew: isNewCity = false }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [population, setPopulation] = useState(0);

  useEffect(() => {
    if (city && !isNewCity) {
      setName(city.name || "");
      setState(city.state || "");
      setPopulation(city.population || 0);
    }
  }, [city, isNewCity]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedCity = {
        id: isNewCity ? undefined : city.id,
        name,
        state,
        population: Number(population),
      };

      const response = await updateCity(updatedCity, isNewCity);
      const cityId = response?.id || city.id;

      navigate(`/cities/${cityId}`);
    } catch (error) {
      console.error("Error updating city:", error);
    }
  };

  return (
    <form>
      <FormItem
        type={"text"}
        label={"Name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormItem
        type={"text"}
        label={"State"}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />

      <FormItem
        type={"number"}
        label={"Population"}
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
      />

      <Button
        icon="submit"
        type="submit"
        onClick={handleSubmit}
        label={"Submit"}
      />
    </form>
  );
}

export default CityForm;
