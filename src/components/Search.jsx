import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search() {
  return (
    <div className="flex relative items-center border-b flex-1 h-12">
      <div className="absolute p-2">
        <FaMagnifyingGlass />
      </div>
      <input type="text" placeholder="Search" className="pl-8 h-full w-full" />
    </div>
  );
}

export default Search;
