import React from "react";

function PageDetailsItem({ label, value }) {
  return (
    <div className="flex gap-4">
      <span className="flex-1">{label}</span>
      <span className="flex-1">{value}</span>
    </div>
  );
}

export default PageDetailsItem;
