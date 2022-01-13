import React, { useState, useEffect } from "react";
import { Activity } from "../../components";
import { getActivty } from "../../services/apiGet";

function RecentActivity() {
  const [activties, setActivity] = useState([]);

  useEffect(() => {
    getActivty()
      .then((data) => setActivity(data))
      .catch(console.error);
  }, []);

  return (
    <div className="max-h-[48rem] flex flex-col bg-secondary p-6 rounded-[20px] overflow-y-auto scrollbar-hide">
      <h3 className="mb-6 text-white">Recent Activty</h3>
      <div className="gap-[14px] flex flex-col">
        {activties.map((activity) => {
          return <Activity name={activity.name} message={activity.message} />;
        })}
      </div>
    </div>
  );
}

export default RecentActivity;
