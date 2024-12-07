import React from "react";
import PageHeader from "./PageHeader";

function PageContent({ children, label }) {
  return (
    <div className="w-full flex flex-col gap-6 p-6">
      <PageHeader label={label} />
      {children}
    </div>
  );
}

export default PageContent;
