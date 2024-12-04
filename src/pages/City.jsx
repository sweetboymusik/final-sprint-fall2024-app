import React, { useEffect } from "react";
import { useCity } from "../hooks/useCity";
import CityDetails from "../components/City/CityDetails";
import NavBar from "../components/NavBar";
import CityModal from "../components/City/CityModal";
import { useParams } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";

function City() {
  const { id } = useParams();
  console.log(id);

  const {
    selectedCity,
    isModalOpen,
    loadCityById,
    setIsModalOpen,
    handleChange,
    handleSaveCity,
  } = useCity();

  useEffect(() => {
    if (!selectedCity) {
      loadCityById(id);
      console.log(selectedCity);
    }
  }, [id, loadCityById, selectedCity]);

  return (
    <div className="flex flex-col gap-6 m-10">
      <NavBar />
      <div className="flex gap-6">
        <h1 className="text-3xl">City Details</h1>
        <button
          className="flex gap-2 items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPenToSquare />
          <span>Edit City Details</span>
        </button>
      </div>

      {selectedCity && (
        <>
          <CityDetails city={selectedCity} />
        </>
      )}

      <CityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCity={selectedCity}
        onChange={handleChange}
        onSave={handleSaveCity}
      />
    </div>
  );
}

export default City;
