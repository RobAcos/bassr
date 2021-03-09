import React, { useState, useRef, useEffect } from "react";
import PlayerInfo from "./PlayerInfo";
import PlayerControls from "./PlayerControls";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSong(() => {
        let temp = props.songs.findIndex(
          (song) => song.id === props.currentSong.id
        );
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return props.songs[temp];
      });
    } else {
      props.setCurrentSong(() => {
        let temp = props.songs.findIndex(
          (song) => song.id === props.currentSong.id
        );
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return props.songs[temp];
      });
    }
  };

  return (
    <div className="c-player">
      <audio
        src={((song) => song.id === props.currentSong.id).song_url}
        ref={audioEl}
      ></audio>
      <h4>Playing now</h4>
      <PlayerInfo song={(song) => song.id === props.currentSong.id} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        Next up:{" "}
        <span>
          {props.songs[props.nextSongIndex].title} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
}

export default Player;
