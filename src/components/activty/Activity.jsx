import React from "react";
import Avatar from "react-avatar";

function Activity(props) {
  return (
    <div className="flex gap-2 px-2 py-3 bg-card-activty rounded-[12px]">
      <Avatar name={props.name} size="40" className="rounded-full" />
      <div className="flex-col gap-1 text-white">
        <h5 className="text-sm font-medium">{props.name}</h5>
        <p className="text-xs opacity-70">{props.message}</p>
      </div>
    </div>
  );
}

export default Activity;
