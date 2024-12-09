import React from "react";
import PageContent from "./PageContent";
import SideBar from "./SideBar";
import PageHeader from "./PageHeader";

function Page({ children, label, Button }) {
  return (
    <div className="w-full">
      <div className="flex">
        <SideBar />

        <div className="w-full">
          <PageHeader label={label} Button={Button} />
          <PageContent children={children} label={label} />
        </div>
      </div>
    </div>
  );
}

export default Page;
