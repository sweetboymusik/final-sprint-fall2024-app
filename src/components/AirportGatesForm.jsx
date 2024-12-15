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
        name: gateName,
      };

      await addGateToAirport(airport.id, newGate);

      navigate(`/airports/${airport.id}`);
    } catch (error) {
      console.error("Error adding gate to airport:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-4 mb-4">
        <FormItem
          label="Gate Name"
          type="text"
          value={gateName}
          onChange={(e) => setGateName(e.target.value)}
        />
      </div>

      <Button icon="submit" type="submit" label={"Submit"} />
    </form>
  );
}

export default AirportGatesForm;
