import React from "react";
import ButtonSidebar from "../../components/buttonSidebar/ButtonSidebar";
import Content from "./Content";

function Sidebar() {
  return (
    //TODO : Make it responsive
    <div className="md:sticky hidden shrink-0 sm:flex left-0 h-screen w-[7.5rem] flex-col top-0 z-50 bg-secondary">
      <div className="flex justify-center w-full py-6 mb-4 border-b-2 border-gray-700">
        <img src="/assets/icons/ETHERUM.svg" alt="" />
      </div>
      {Content &&
        Content.map((item, index) => {
          return <ButtonSidebar key={index} {...item} />;
        })}
    </div>
  );
}

export default Sidebar;
