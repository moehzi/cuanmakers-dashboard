import React, { useState } from "react";
import {
  NotifAndChat,
  Profile,
  SearchBox,
  WalletBox,
  ButtonSidebar,
} from "../../components";
import Content from "../sidebar/Content";
import { Turn as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && (
        // MenuModal
        <div className="top-0 left-0 w-full overflow-hidden fixed h-screen bg-gray-900/95 p-4 flex flex-col z-50 gap-[1rem]">
          <div className="flex justify-between items-center">
            <Hamburger toggled={isOpen} color="#B84EF1" toggle={setOpen} />
            <div className="flex items-center justify-center">
              <img src="/assets/icons/ETHERUM.svg" alt="Etherium" />
              <h1 className="ml-[4px] text-white text-lg">CuanMakers</h1>
            </div>
            <span></span>
          </div>
          <div className="flex shrink-0 gap-x-2 items-center rounded-[12px] text-sm p-4 h-12 text-white bg-secondary">
            <img src="/assets/icons/ETHERUMWALLET.svg" alt="Etherium" />
            543,694,489 ETH
          </div>
          {Content &&
            Content.map((item, index) => {
              return (
                <ButtonSidebar
                  {...item}
                  key={index}
                  isExpand={true}
                  isActive={false}
                />
              );
            })}
        </div>
        // Tutup MenuModal
      )}
      <div className="flex w-full sm:gap-[20px] gap-[16px] z-10 items-center">
        <div className="flex flex-col sm:hidden">
          <Hamburger toggled={isOpen} color="#B84EF1" toggle={setOpen} />
        </div>
        <SearchBox />
        <WalletBox />
        <NotifAndChat />
        <Profile />
      </div>
    </>
  );
}

export default Navbar;
