import React from "react";

const CenteredLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-11/12 2xl:w-10/12 p-6 bg-white shadow-md rounded-md max-w-7xl">
        <div className="flex flex-col gap-6 m-10">{children}</div>
      </div>
    </div>
  );
};

export default CenteredLayout;
