import React from "react";
import { SearchBox, WaleltBox } from "../../components";

function Navbar() {
  return (
    <div className="flex w-full gap-[20px]">
      <SearchBox />
      <WaleltBox />
    </div>
  );
}

export default Navbar;
