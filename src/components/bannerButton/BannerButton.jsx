import React from "react";

function BannerButton(props) {
  return (
    <button className="px-3 py-1 bg-white rounded-lg md:px-6 md:py-3">
      <span className="text-sm font-medium text-transparent sm:text-base bg-clip-text bg-gradient-to-r from-purple-banner-1 to-purple-banner-2">
        {props.text}
      </span>
    </button>
  );
}

export default BannerButton;
