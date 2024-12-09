import React from "react";

function FormDropdown({ label, list, value, onChange }) {
  return (
    <div>
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {list?.map((item) => (
            <option key={item?.id} value={item?.id}>
              {label === "Add Passenger"
                ? `${item?.fullName}`
                : `${item?.name || item?.type} (${item?.airline?.name})`}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FormDropdown;
