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

function App() {
  return (
    <Router>
      <Routes>
        {/* home route */}
        <Route path="/" element={<Home />} />

        {/* city related routes */}
        <Route path="/cities" element={<Cities />} />
        <Route path="/cities/:id" element={<City />} />

        {/* airport related routes */}
        <Route path="/airports" element={<Airports />} />
        <Route path="/airports/:id" element={<Airport />} />

        {/* airline related routes */}
        <Route path="/airlines" element={<Airlines />} />
        <Route path="/airlines/:id" element={<Airline />} />

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
