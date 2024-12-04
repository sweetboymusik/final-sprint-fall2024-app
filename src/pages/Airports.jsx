import React, { useEffect } from "react";
import CenteredLayout from "../layouts/CenteredLayout";
import NavBar from "../components/NavBar";
import { useAirport } from "../hooks/useAirport";

function Airports() {
  const {
    airports,
    selectedAirport,
    isModalOpen,
    isNewAirport,
    loadAirports,
    handleEditAirport,
    handleAddAirport,
    handleSaveAirport,
    handleChange,
    setIsModalOpen,
  } = useAirport();

  useEffect(() => {
    loadAirports();
  }, [loadAirports]);
  return (
    <CenteredLayout>
      <NavBar />
    </CenteredLayout>
  );
}

export default Airports;
