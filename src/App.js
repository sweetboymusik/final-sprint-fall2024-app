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
              fetchById={fetchAirportById}
              entityLabel={"Airport"}
            />
          }
        />

        {/* aircraft related routes */}
        <Route path="/aircraft" element={<Aircrafts />} />
        <Route path="/aircraft/:id" element={<Aircraft />} />

        {/* flight related routes */}
        <Route path="/flights" element={<Flights />} />
        <Route path="/flights/:id" element={<Flight />} />

        {/* passenger related routes */}
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/passengers/:id" element={<Passenger />} />
      </Routes>
    </Router>
  );
}

export default App;
