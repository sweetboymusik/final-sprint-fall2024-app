import React from "react";
import Breadcrumb from "./Breadcrumb";

function PageHeader({ label, Button, SecondaryButton }) {
  return (
    <div className="flex p-6 h-28 gap-16">
      <div className="flex flex-col gap-2">
        <h1>{label}</h1>
        <Breadcrumb />
      </div>

      <div>
        {Button}
        {SecondaryButton}
      </div>
    </div>
  );
}

export default PageHeader;
