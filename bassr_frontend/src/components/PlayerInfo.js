import React from "react";

function PlayerInfo(props) {
  return (
    <div className="c-player-info">
      <div className="info-img">
        <img src={props.song.album_url} alt="" />
      </div>
      <h3 className="info-name">{props.song.name}</h3>
      <h4 className="info-artist">{props.song.artist.name}</h4>
    </div>
  );
}

export default PlayerInfo;
