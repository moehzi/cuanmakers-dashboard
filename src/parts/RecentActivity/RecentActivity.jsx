import React from "react";
import { Activity } from "../../components";

function RecentActivity() {
  return (
    <div className="max-h-[48rem] flex flex-col bg-secondary p-6 rounded-[20px] overflow-y-auto scrollbar-hide">
      <h3 className="text-white">Recent Activty</h3>
      <Activity
        name="faizi"
        message="hello world"
        avatar="/asstes/images/profile-img"
      />
    </div>
  );
}

export default RecentActivity;
