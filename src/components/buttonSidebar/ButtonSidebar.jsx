import React from "react";

function ButtonSidebar(props) {
  return (
    <>
      {props.isActive ? (
        <div className="flex justify-center w-full py-6 bg-white border-l-4 border-solid border-purple bg-opacity-5 hover:bg-white hover:bg-opacity-5 hover:border-l-4 hover:border-purple hover:border-solid">
          <img src={props.icon} alt={props.text} />
        </div>
      ) : (
        <>
          {props.isExpand ? (
            <div className="flex w-full py-6 px-8 hover:bg-white hover:bg-opacity-5 hover:border-l-4 hover:border-purple hover:border-solid">
              <div className="flex text-white gap-x-[36.5px] items-center">
                <img src={props.icon} alt={props.text} />
                <span>{props.text}</span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-full py-6 hover:bg-white hover:bg-opacity-5 hover:border-l-4 hover:border-purple hover:border-solid">
              <div className="flex text-white gap-x-[36.5px] items-center">
                <img src={props.icon} alt={props.text} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ButtonSidebar;
