import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormItem from "./FormItem";
import { updateAirline } from "../api/airlines-api";
import Button from "./Button";

function AirlineForm({ entity: airline = {}, isNew: isNewAirline = false }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    if (airline && !isNewAirline) {
      setName(airline.name || "");
      setCountry(airline.country || "");
    }
  }, [airline, isNewAirline]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedAirline = {
        id: isNewAirline ? undefined : airline.id,
        name,
        country,
      };

      const response = await updateAirline(updatedAirline, isNewAirline);
      const airlineId = response?.id || airline.id;

      navigate(`/airlines/${airlineId}`);
    } catch (error) {
      console.error("Error updating airline:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <FormItem
        type={"text"}
        label={"Name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormItem
        type={"text"}
        label={"Country"}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <Button icon="submit" type="submit" label="Submit" />
    </form>
  );
}

export default AirlineForm;
