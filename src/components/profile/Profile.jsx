import React from "react";
import arrowDown from "/assets/icons/ARROW-DOWN.svg";
import profileIMG from "/assets/images/profile-img.png";

function Profile() {
  return (
    <div className="flex items-center max-w-[200px] md:flex-1 gap-[12px]">
      <img src={profileIMG} alt="profile-img" />
      <p className="hidden text-sm text-white md:block">Marvin McKinney</p>
      <img
        src={arrowDown}
        className="mt-2.5 md:block hidden"
        alt="arrow-down"
      />
    </div>
  );
}

export default Profile;
