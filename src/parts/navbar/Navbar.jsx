import React from "react";
import { NotifAndChat, SearchBox, WalletBox } from "../../components";

function Navbar() {
  return (
    <div className="flex w-full gap-[20px]">
      <SearchBox />
      <WalletBox />
      <NotifAndChat />
    </div>
  );
}

export default Navbar;
