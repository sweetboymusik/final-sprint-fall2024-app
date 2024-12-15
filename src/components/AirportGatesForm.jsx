import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { addGateToAirport } from "../api/airports-api";
import FormItem from "./FormItem";

function AirportGatesForm({ airport = {} }) {
  const navigate = useNavigate();

  const [gateName, setGateName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newGate = {
        gateNumber: gateName,
      };

      await addGateToAirport(airport.id, newGate);

      navigate(`/airports/${airport.id}`);
    } catch (error) {
      console.error("Error adding gate to airport:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="entity-form">
      <FormItem
        label="Gate Number/Name"
        type="text"
        value={gateName}
        onChange={(e) => setGateName(e.target.value)}
      />

      <Button icon="submit" type="submit" label={"Submit"} />
    </form>
  );
}

export default AirportGatesForm;
