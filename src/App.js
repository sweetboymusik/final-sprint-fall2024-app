import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import Airports from "./pages/Airports";
import Airlines from "./pages/Airlines";
import Aircraft from "./pages/Aircraft";
import Flights from "./pages/Flights";
import Passengers from "./pages/Passengers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* city related routes */}
        <Route path="/cities" element={<Cities />} />
        <Route path="/cities/:id" element={<Cities />} />

        {/* airport related routes */}
        <Route path="/airports" element={<Airports />} />
        <Route path="/airports/:id" element={<Airports />} />

        {/* airline related routes */}
        <Route path="/airlines" element={<Airlines />} />
        <Route path="/airlines/:id" element={<Airlines />} />

        {/* aircraft related routes */}
        <Route path="/aircraft" element={<Aircraft />} />
        <Route path="/aircraft/:id" element={<Aircraft />} />

        {/* flight related routes */}
        <Route path="/flights" element={<Flights />} />
        <Route path="/flights/:id" element={<Flights />} />

        {/* passenger related routes */}
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/passengers/:id" element={<Passengers />} />
      </Routes>
    </Router>
  );
}

export default App;
