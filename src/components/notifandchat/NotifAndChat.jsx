import React from "react";
import chatIMG from "/assets/icons/CHAT.svg";
import notifIMG from "/assets/icons/NOTIFICATION.svg";

function NotifAndChat() {
  return (
    <div className="flex-1 max-w-[96px] flex gap-[1rem] justify-between items-center">
      <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-secondary">
        <img src={chatIMG} className="" />
      </div>
      <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-secondary">
        <img src={chatIMG} className="" />
      </div>
    </div>
  );
}

export default NotifAndChat;
