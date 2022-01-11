import React from "react";
import etherumWallet from "/assets/icons/ETHERUMWALLET.svg";

function WalletBox() {
  return (
    <div className="hidden md:flex bg-secondary max-w-[215px] p-4 items-center text-white rounded-[12px]">
      <img src={etherumWallet} alt="etherum" />
      <p className="ml-4 text-sm">543,694,489 ETH</p>
    </div>
  );
}

export default WalletBox;
