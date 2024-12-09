import React from "react";
import PageContent from "./PageContent";
import SideBar from "./SideBar";
import PageHeader from "./PageHeader";

function Page({ children, label, Button, SecondaryButton = "" }) {
  return (
    <div className="w-full">
      <div className="flex">
        <SideBar />

        <div className="w-full">
          <PageHeader
            label={label}
            Button={Button}
            SecondaryButton={SecondaryButton}
          />
          <PageContent children={children} label={label} />
        </div>
      </div>
    </div>
  );
}

export default Page;
