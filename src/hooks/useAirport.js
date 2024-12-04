// src/hooks/useCity.js
import { useState, useCallback } from "react";
import {
  fetchAllAirports,
  fetchAirportById,
  updateAirport,
} from "../api/airports-api";

export const useAirport = () => {
  const [airports, setAirports] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewAirport, setIsNewAirport] = useState(false);

  const loadAirports = useCallback(async () => {
    const response = await fetchAllAirports();
    setAirports(response);
  }, []);

  const loadAiportById = useCallback(async (id) => {
    const response = await fetchAirportById(id);
    setSelectedAirport(response);
  }, []);

  const handleEditAirport = (airport) => {
    setSelectedAirport(airport);
    setIsNewAirport(false);
    setIsModalOpen(true);
  };

  const handleAddAirport = () => {
    setSelectedAirport({
      name: "",
      code: "",
      cityId: "",
    });
    setIsNewAirport(true);
    setIsModalOpen(true);
  };

  const handleSaveAirport = async () => {
    await updateAirport(selectedAirport, isNewAirport);
    await loadAirports();
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    selectedAirport((prev) => ({ ...prev, [name]: value }));
  };

  return {
    airports,
    selectedAirport,
    setSelectedAirport,
    isModalOpen,
    isNewAirport,
    loadAirports,
    loadAiportById,
    handleEditAirport,
    handleAddAirport,
    handleSaveAirport,
    handleChange,
    setIsModalOpen,
  };
};
