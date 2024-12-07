import React from "react";
import PageContent from "./PageContent";
import SideBar from "./SideBar";

function Page({ children, label }) {
  return (
    <div className="w-full">
      <div className="flex">
        <SideBar />
        <PageContent children={children} label={label} />
      </div>
    </div>
  );
}

export default Page;
