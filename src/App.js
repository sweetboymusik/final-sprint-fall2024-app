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
        <Route path="/cities" element={<Cities />} />
        <Route path="/airports" element={<Airports />} />
        <Route path="/airlines" element={<Airlines />} />
        <Route path="/aircraft" element={<Aircraft />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/passengers" element={<Passengers />} />
      </Routes>
    </Router>
  );
}

export default App;
