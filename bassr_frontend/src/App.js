import { useState, useEffect } from "react";
import Player from "./components/Player";
import Songlist from "./components/songs/Songlist";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Sunday",
      artist: "Bloc Party",
      img_src: "https://arcosmedia.cc/wp-content/uploads/2020/12/bloc.jpg",
      src:
        "https://arcosmedia.cc/wp-content/uploads/2020/12/sunday-bloc-party.mp3",
    },
    {
      title: "Diamonds",
      artist: "Boxer Rebellion",
      img_src: "https://arcosmedia.cc/wp-content/uploads/2020/12/boxer.jpg",
      src:
        "https://arcosmedia.cc/wp-content/uploads/2020/12/diamonds-boxer-rebellion.mp3",
    },
    {
      title: "Unconditional",
      artist: "The Bravery",
      img_src: "https://arcosmedia.cc/wp-content/uploads/2020/12/brave.jpg",
      src:
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
