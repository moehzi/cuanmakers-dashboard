import React from "react";

function BannerButton(props) {
  return (
    <button className="px-6 py-3 bg-white rounded-lg">
      <span className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-banner-1 to-purple-banner-2">
        {props.text}
      </span>
    </button>
  );
}

export default BannerButton;
