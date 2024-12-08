import React from "react";
import Breadcrumb from "./Breadcrumb";

function PageHeader({ label }) {
  return (
    <div className="flex flex-col gap-2">
      <h1>{label}</h1>
      <Breadcrumb />
    </div>
  );
}

export default PageHeader;
