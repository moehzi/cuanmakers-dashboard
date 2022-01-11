import React from "react";
import { NotifAndChat, Profile, SearchBox, WalletBox } from "../../components";

function Navbar() {
  return (
    <div className="flex w-full gap-[20px]">
      <SearchBox />
      <WalletBox />
      <NotifAndChat />
      <Profile />
    </div>
  );
}

export default Navbar;
