import React from "react";
import { SearchBox } from "../../components";

function Navbar() {
  return (
    <div className="flex w-full gap-[20px]">
      <SearchBox />
    </div>
  );
}

export default Navbar;
