import React from "react";
import { useParams, useLocation } from "react-router-dom";

function CityDetails() {
  const { cityId } = useParams();
  const location = useLocation();
  const city = location.state?.city;

  return (
    <div>
      <p>ID: {cityId}</p>
      {city && (
        <>
          <p>Name: {city.name}</p>
          <p>State: {city.state}</p>
          <p>Population: {city.population}</p>
          <h2 className="text-xl font-semibold">Airports</h2>
          <ul>
            {city.airports.map((airport, idx) => (
              <li key={idx}>
                {airport.name} ({airport.code})
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default CityDetails;
