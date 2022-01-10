import React from "react";

function ButtonSidebar(props) {
  return (
    <>
      {props.isActive ? (
        <div className="border-purple border-solid bg-white bg-opacity-5  w-full py-6  hover:bg-white hover:bg-opacity-5 hover:border-l-4 hover:border-purple hover:border-solid flex justify-center border-l-4">
          <img src={props.icon} alt={props.text} />
        </div>
      ) : (
        <div className="w-full py-6  hover:bg-white hover:bg-opacity-5 hover:border-l-4 hover:border-purple hover:border-solid flex justify-center">
          <img src={props.icon} alt={props.text} />
        </div>
      )}
    </>
  );
}

export default ButtonSidebar;
