import React from "react";

function HomePage() {
  return (
    <div className="flex flex-col gap-16 items-center justify-center h-full w-full">
      <p className="w-1/2 text-center">
        Welcome to the airport management system! This site allows you to manage
        flight details, including viewing flights, adding passengers to flights,
        and accessing information about airports, gates, and aircraft. Use the
        navigation menu to explore available features and manage your data
        efficiently.
      </p>

      <p className="w-1/2 text-center">
        Use the nav bar to the left to get started.
      </p>
    </div>
  );
}

export default HomePage;
