import React from "react";
import Modal from "../Modal";

function CityModal({
  isOpen,
  onClose,
  selectedCity,
  isNewCity,
  onChange,
  onSave,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {selectedCity && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {isNewCity ? "Add New City" : "Edit City Details"}
          </h2>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={selectedCity.name}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            State:
            <input
              type="text"
              name="state"
              value={selectedCity.state}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Population:
            <input
              type="number"
              name="population"
              value={selectedCity.population}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <button
            onClick={onSave}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isNewCity ? "Add City" : "Save Changes"}
          </button>
        </div>
      )}
    </Modal>
  );
}

export default CityModal;
