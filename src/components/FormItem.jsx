import React from "react";

function FormItem({ label, type, value, onChange }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} name="label" value={value} onChange={onChange} />
    </div>
  );
}

export default FormItem;
