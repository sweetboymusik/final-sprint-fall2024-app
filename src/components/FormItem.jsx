import React from "react";

function FormItem({ label, type, value, onChange }) {
  return (
    <div className="flex items-center">
      <label htmlFor={label} className="flex-1">
        {label}
      </label>
      <input
        type={type}
        name="label"
        value={value}
        onChange={onChange}
        className="flex-1 border p-2 border-primary-200 rounded  bg-primary-100
        "
      />
    </div>
  );
}

export default FormItem;
