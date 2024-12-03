import CityListItem from "./CityListItem";

const headings = {
  id: "ID",
  name: "Name",
  state: "State",
  population: "Population",
  airports: "Airports",
};

function CityList({ cities, onEditCity }) {
  return (
    <div className="flex flex-col my-2 rounded overflow-clip">
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

export default CityList;
