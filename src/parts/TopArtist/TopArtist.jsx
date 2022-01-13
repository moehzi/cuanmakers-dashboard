import React, { useState, useEffect } from "react";
import { Artist } from "../../components";
import { getArtist } from "../../services/apiGet";
import Avatar from "react-avatar";

function TopArtist() {
  const [artists, setArtist] = useState([]);

  useEffect(() => {
    getArtist()
      .then((data) => setArtist(data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col bg-secondary p-6 rounded-[20px] overflow-y-auto scrollbar-hide max-h-80 ">
      <h3 className="text-white">Top Artist</h3>
      {artists.map((artist) => {
        return (
          <Artist
            key={artist.id}
            name={artist.name}
            id={artist.id}
            username={artist.username.toLowerCase()}
          />
        );
      })}
    </div>
  );
}

export default TopArtist;
