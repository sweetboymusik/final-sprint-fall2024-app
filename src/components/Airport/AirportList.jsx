import CityListItem from "./CityListItem";

const headings = {
  id: "ID",
  name: "Name",
  state: "State",
  population: "Population",
  airports: "Airports",
};

function AirportList({ cities, onEditCity }) {
  return (
    <div className="flex flex-col  rounded overflow-clip">
      <CityListItem key={"header"} city={headings} heading={true} />

      {cities.map((city) => (
        <CityListItem
          key={city.id}
          city={city}
          onEditCity={() => onEditCity(city)}
        />
      ))}
    </div>
  );
}

export default AirportList;
