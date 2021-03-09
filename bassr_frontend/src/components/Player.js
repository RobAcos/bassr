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
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <audio
        src={props.songs[props.currentSongIndex].song_url}
        ref={audioEl}
      ></audio>
      <h4>Playing now</h4>
      <PlayerInfo song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        Next up:{" "}
        <span>
          {console.log(props.songs.length - 1)}
          {console.log(props.nextSongIndex)}
          {props.songs[props.nextSongIndex].name} by{" "}
          {props.songs[props.nextSongIndex].artist.name}
        </span>
      </p>
    </div>
  );
}

export default Player;
