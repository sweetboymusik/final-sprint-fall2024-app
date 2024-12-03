import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Cities from "./pages/Cities";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cities" element={<Cities />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
