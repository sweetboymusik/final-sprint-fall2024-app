import React from "react";

function PageContent({ children, label }) {
  return <div className="w-full flex flex-col gap-6 px-6 pb-6">{children}</div>;
}

export default PageContent;
