import React from "react";
import PageContent from "./PageContent";
import SideBar from "./SideBar";

function Page({ children }) {
  return (
    <div>
      <SideBar />
      <PageContent children={children} />
    </div>
  );
}

export default Page;
