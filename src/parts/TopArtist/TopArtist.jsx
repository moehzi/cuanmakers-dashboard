import React from "react";
import { Artist } from "../../components";

function TopArtist() {
  return (
    <div className="flex flex-col bg-secondary p-6 rounded-[20px] shrink-0 max-w-[333px] grow">
      <h3 className="text-white">Top Artist</h3>
      <Artist />
    </div>
  );
}

export default TopArtist;
