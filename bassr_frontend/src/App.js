import { useState, useEffect } from "react";
import Player from "./components/Player";
import Songlist from "./components/songs/Songlist";

function App() {
  const [songs, setSongs] = useState([
    {
      name: "Sunday",
      artist: { name: "Bloc Party" },
      img_src: "https://arcosmedia.cc/wp-content/uploads/2020/12/bloc.jpg",
      song_url:
        "https://arcosmedia.cc/wp-content/uploads/2020/12/sunday-bloc-party.mp3",
    },
    {
      name: "Diamonds",
      artist: { name: "Boxer Rebellion" },
      img_src: "https://arcosmedia.cc/wp-content/uploads/2020/12/boxer.jpg",
      song_url:
        "https://arcosmedia.cc/wp-content/uploads/2020/12/diamonds-boxer-rebellion.mp3",
    },
    {
      name: "Unconditional",
      artist: { name: "The Bravery" },
      img_src: "https://arcosmedia.cc/wp-content/uploads/2020/12/brave.jpg",
      song_url:
        "https://arcosmedia.cc/wp-content/uploads/2020/12/unconditional-the-bravery.mp3",
    },
  ]);

  //   const [currentSongIndex, setCurrentSongIndex] = useState(0);
  //   const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex +1);

  //   useEffect(() => {
  //     setNextSongIndex(() => {
  //       if (currentSongIndex + 1 > songs.length -1) {
  //         return 0;
  //       } else {
  //         return currentSongIndex + 1;
  //       }
  //     })
  //   }, [currentSongIndex]);

  //   return (
  //     <div className="App">
  //       <Player
  //         currentSongIndex={currentSongIndex}
  //         setCurrentSongIndex={setCurrentSongIndex}
  //         nextSongIndex={nextSongIndex}
  //         songs={songs}
  //        />
  //     </div>
  //   );
  // }

  // export default App;

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
      <Songlist setSongs={setSongs} />
    </div>
  );
}

export default App;
