import React from "react";

function FormDropdown({ label, list, value, onChange }) {
  const formatOption = (item) => {
    switch (label) {
      case "Passenger":
        return `${item?.fullName}`;
      case "Airport":
        return `${item?.name} (${item?.code})`;
      case "Aircraft":
        return `${item?.type} (${item?.airline?.name || "Unknown Airline"})`;
      case "City":
        return `${item?.name} (${item?.state})`;
      default:
        return item?.name || "Unknown";
    }
  };

  return (
    <div className="flex items-center">
      <label className="flex-1">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="flex-1 border border-primary-200 rounded p-2 bg-primary-100"
      >
        <option value="" disabled>
          Select an option
        </option>
        {list?.map((item) => (
          <option key={item?.id} value={item?.id}>
            {formatOption(item)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormDropdown;
