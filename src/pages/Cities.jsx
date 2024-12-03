import { useCallback, useEffect, useState } from "react";
import { fetchAllCities, updateCity } from "../api/cities-api";
import CityList from "../components/City/CityList";
import NavBar from "../components/NavBar";
import CityModal from "../components/City/CityModal";
import { FaPlusCircle } from "react-icons/fa";

function Cities() {
  const [cities, setCities] = useState([]);

  const loadCitites = useCallback(async () => {
    const response = await fetchAllCities();
    setCities(response);
  }, []);

  useEffect(() => {
    loadCitites().then((r) => console.log("Cities loaded"));
  }, [loadCitites]);

  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewCity, setIsNewCity] = useState(false);

  const handleEditCity = (city) => {
    setSelectedCity(city);
    setIsNewCity(false);
    setIsModalOpen(true);
  };

  const handleAddCity = () => {
    setSelectedCity({
      id: "",
      name: "",
      state: "",
      population: "",
      airports: [],
    });
    setIsNewCity(true);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    updateCity(selectedCity, isNewCity);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCity((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col gap-6 m-10">
      <NavBar />
      <div className="flex gap-6">
        <h1 className="text-3xl">All Cities</h1>
        <button
          onClick={handleAddCity}
          className="flex gap-4 justify-center items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
        >
          <FaPlusCircle />
          <span>Add New City</span>
        </button>
      </div>

      <CityList cities={cities} onEditCity={handleEditCity} />

      <CityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCity={selectedCity}
        isNewCity={isNewCity}
        onChange={handleChange}
        onSave={handleSave}
      />
    </div>
  );
}

export default Cities;
