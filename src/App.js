import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import Airports from "./pages/Airports";
import Airlines from "./pages/Airlines";
import Flights from "./pages/Flights";
import Passengers from "./pages/Passengers";
import Aircrafts from "./pages/Aircrafts";
import City from "./pages/City";
import Airport from "./pages/Airport";
import Airline from "./pages/Airline";
import Aircraft from "./pages/Aircraft";
import Passenger from "./pages/Passenger";
import Flight from "./pages/Flight";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import CityForm from "./components/CityForm";
import AirportForm from "./components/AirportForm";
import { fetchCityById } from "./api/cities-api";
import { fetchAirportById } from "./api/airports-api";
import AirlineForm from "./components/AirlineForm";
import AircraftForm from "./components/AircraftForm";
import { fetchAircraftById } from "./api/aircraft-api";
import PassengerForm from "./components/PassengerForm";
import { fetchPassengerById } from "./api/passengers-api";
import FlightForm from "./components/FlightForm";
import { fetchFlightById } from "./api/flights-api";
import FlightPassengers from "./pages/FlightPassengers";
import { fetchAirlineById } from "./api/airlines-api";

function App() {
  return (
    <Router>
      <Routes>
        {/* home route */}
        <Route path="/" element={<Home />} />

        {/* city related routes */}
        <Route path="/cities" element={<Cities />} />
        <Route
          path="/cities/add"
          element={<Add FormComponent={CityForm} label={"Add City"} />}
        />
        <Route path="/cities/:id" element={<City />} />
        <Route
          path="/cities/:id/edit"
          element={
            <Edit
              FormComponent={CityForm}
              fetchById={fetchCityById}
              entityLabel={"City"}
            />
          }
        />

        {/* airport related routes */}
        <Route path="/airports" element={<Airports />} />
        <Route
          path="/airports/add"
          element={<Add FormComponent={AirportForm} label={"Add Airport"} />}
        />
        <Route path="/airports/:id" element={<Airport />} />
        <Route
          path="/airports/:id/edit"
          element={
            <Edit
              FormComponent={AirportForm}
              fetchById={fetchAirportById}
              entityLabel={"Airport"}
            />
          }
        />

        {/* airline related routes */}
        <Route path="/airlines" element={<Airlines />} />
        <Route
          path="/airlines/add"
          element={<Add FormComponent={AirlineForm} label={"Add Airline"} />}
        />
        <Route path="/airlines/:id" element={<Airline />} />
        <Route
          path="/airlines/:id/edit"
          element={
            <Edit
              FormComponent={AirlineForm}
              fetchById={fetchAirlineById}
              entityLabel={"Airline"}
            />
          }
        />

        {/* aircraft related routes */}
        <Route path="/aircraft" element={<Aircrafts />} />
        <Route
          path="/aircraft/add"
          element={<Add FormComponent={AircraftForm} label={"Add Aircraft"} />}
        />
        <Route path="/aircraft/:id" element={<Aircraft />} />
        <Route
          path="/aircraft/:id/edit"
          element={
            <Edit
              FormComponent={AircraftForm}
              fetchById={fetchAircraftById}
              entityLabel={"Aircraft"}
            />
          }
        />

        {/* flight related routes */}
        <Route path="/flights" element={<Flights />} />
        <Route
          path="/flights/add"
          element={<Add FormComponent={FlightForm} label={"Add Flight"} />}
        />
        <Route path="/flights/:id" element={<Flight />} />
        <Route
          path="/flights/:id/add_passengers"
          element={<FlightPassengers />}
        />
        <Route
          path="/flights/:id/edit"
          element={
            <Edit
              FormComponent={FlightForm}
              fetchById={fetchFlightById}
              entityLabel={"Flight"}
            />
          }
        />

        {/* passenger related routes */}
        <Route path="/passengers" element={<Passengers />} />
        <Route
          path="/passengers/add"
          element={
            <Add FormComponent={PassengerForm} label={"Add Passenger"} />
          }
        />
        <Route path="/passengers/:id" element={<Passenger />} />
        <Route
          path="/passengers/:id/edit"
          element={
            <Edit
              FormComponent={PassengerForm}
              fetchById={fetchPassengerById}
              entityLabel={"Passenger"}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
