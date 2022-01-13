import React from "react";

function Activity(props) {
  return (
    <div className="flex gap-2 p-2 bg-card-activty rounded-[12px]">
      <img src={props.avatar} alt="avatar"></img>
      <div className="flex-col gap-1 text-white">
        <h5 className="text-sm">{props.name}</h5>
        <p className="text-xs opacity-70">{props.message}</p>
      </div>
    </div>
  );
}

export default Activity;
