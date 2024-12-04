import { useEffect } from "react";
import CityList from "../components/City/CityList";
import NavBar from "../components/NavBar";
import CityModal from "../components/City/CityModal";
import { useCity } from "../hooks/useCity";
import CenteredLayout from "../layouts/CenteredLayout";
import Button from "../components/Button";

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
    <CenteredLayout>
      <NavBar />

      <div className="flex gap-6">
        <h1 className="text-3xl">All Cities</h1>
        <Button onClick={handleAddCity} label="Add City" />
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
    </CenteredLayout>
  );
}

export default Cities;
