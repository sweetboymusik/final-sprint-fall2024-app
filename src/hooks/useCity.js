// src/hooks/useCity.js
import { useState, useCallback } from "react";
import { fetchAllCities, fetchCityById, updateCity } from "../api/cities-api";

export const useCity = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewCity, setIsNewCity] = useState(false);

  const loadCities = useCallback(async () => {
    const response = await fetchAllCities();
    setCities(response);
  }, []);

  const loadCityById = useCallback(async (id) => {
    const response = await fetchCityById(id);
    setSelectedCity(response);
  }, []);

  const handleEditCity = (city) => {
    setSelectedCity(city);
    setIsNewCity(false);
    setIsModalOpen(true);
  };

  const handleAddCity = () => {
    setSelectedCity({
      name: "",
      state: "",
      population: "",
    });
    setIsNewCity(true);
    setIsModalOpen(true);
  };

  const handleSaveCities = async () => {
    await updateCity(selectedCity, isNewCity);
    await loadCities();
    setIsModalOpen(false);
  };

  const handleSaveCity = async (id) => {
    await updateCity(selectedCity, isNewCity);
    await loadCityById(id);
    window.location.reload();
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedCity((prev) => ({ ...prev, [name]: value }));
  };

  return {
    cities,
    selectedCity,
    setSelectedCity,
    isModalOpen,
    isNewCity,
    loadCities,
    loadCityById,
    handleEditCity,
    handleAddCity,
    handleSaveCities,
    handleSaveCity,
    handleChange,
    setIsModalOpen,
  };
};
