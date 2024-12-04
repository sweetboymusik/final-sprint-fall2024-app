import { useEffect } from "react";
import CityList from "../components/City/CityList";
import NavBar from "../components/NavBar";
import CityModal from "../components/City/CityModal";
import { FaPlusCircle } from "react-icons/fa";
import { useCity } from "../hooks/useCity";

function Cities() {
  const {
    cities,
    selectedCity,
    isModalOpen,
    isNewCity,
    loadCities,
    handleEditCity,
    handleAddCity,
    handleSaveCities,
    handleChange,
    setIsModalOpen,
  } = useCity();

  useEffect(() => {
    loadCities();
  }, [loadCities]);

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
        onSave={handleSaveCities}
      />
    </div>
  );
}

export default Cities;
