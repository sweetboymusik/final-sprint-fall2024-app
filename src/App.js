import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Cities from "./pages/Cities";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Airports from "./pages/Airports";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/airports" element={<Airports />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
