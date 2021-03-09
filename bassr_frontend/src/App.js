import { useState, useEffect } from "react";
import Player from "./components/Player";
import Songlist from "./components/songs/Songlist";

// setSongs([newSong, ...songs, newSong])
// [...songs] === [song1, song2, song3]

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Sunday",
      artist: "Bloc Party",
      img_src: "https://arcosmedia.cc/wp-content/uploads/2020/12/bloc.jpg",
      song_url:
        "https://arcosmedia.cc/wp-content/uploads/2020/12/sunday-bloc-party.mp3",
    },
    {
      title: "Diamonds",
      artist: "Boxer Rebellion",
      img_src: "https://arcosmedia.cc/wp-content/uploads/2020/12/boxer.jpg",
      song_url:
        "https://arcosmedia.cc/wp-content/uploads/2020/12/diamonds-boxer-rebellion.mp3",
    },
    {
      title: "Unconditional",
      artist: "The Bravery",
      img_src: "https://arcosmedia.cc/wp-content/uploads/2020/12/brave.jpg",
      song_url:
        "https://arcosmedia.cc/wp-content/uploads/2020/12/unconditional-the-bravery.mp3",
    },
  ]);

  //   const [currentSong, setCurrentSong] = useState(0);
  //   const [nextSongIndex, setNextSongIndex] = useState(currentSong +1);

  //   useEffect(() => {
  //     setNextSongIndex(() => {
  //       if (currentSong + 1 > songs.length -1) {
  //         return 0;
  //       } else {
  //         return currentSong + 1;
  //       }
  //     })
  //   }, [currentSong]);

  //   return (
  //     <div className="App">
  //       <Player
  //         currentSong={currentSong}
  //         setCurrentSong={setCurrentSong}
  //         nextSongIndex={nextSongIndex}
  //         songs={songs}
  //        />
  //     </div>
  //   );
  // }

  // export default App;

  const [currentSong, setCurrentSong] = useState({
    name: "wednesday",
    length: "5:00",
    tracklist: 3,
    song_url: "empty",
    genre: "genre1",
    album_id: 0,
    favorites: 0,
  });
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    if (
      songs.findIndex((song) => song.id === currentSong.id) + 1 >
      songs.length - 1
    ) {
      setCurrentSong(songs[0]);
    } else {
      return songs.findIndex((song) => song.id === currentSong.id) + 1;
    }
  }, [currentSong, songs]);

  return (
    <div className="App">
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
      <Songlist />
    </div>
  );
}

export default App;
