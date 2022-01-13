import React from "react";
import image from "/assets/images/profile-img.png";

function Artist(props) {
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center gap-2 text-white">
        <h3>1.</h3>
        <img src={image} alt="foto"></img>
        <div className="flex flex-col gap-1 text-white">
          <h5 className="text-sm">Brooklyn Simmons</h5>
          <p className="text-xs opacity-70">@brosim</p>
        </div>
      </div>
      <button className="text-xs text-white rounded-[8px] px-2.5 py-1.5 bg-gradient-to-r from-purple-banner-1 to-purple-banner-2">
        Follow
      </button>
    </div>
  );
}

export default Artist;
