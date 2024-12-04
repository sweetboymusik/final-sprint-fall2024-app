import AirportListItem from "./AirportListItem";

const headings = {
  id: "ID",
  name: "Name",
  code: "Code",
  city: "City",
};

function AirportList({ airports, onEditAirport }) {
  return (
    <div className="flex flex-col  rounded overflow-clip">
      <AirportListItem key={"header"} airport={headings} heading={true} />

      {airports.map((airport) => (
        <AirportListItem
          key={airport.id}
          airport={airport}
          onEditCity={onEditAirport}
        />
      ))}
    </div>
  );
}

export default AirportList;
