import React, { useEffect, useState } from "react";

const Songlist = (props) => {
  const [songData, setSongData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((resp) => resp.json())
      .then((data) => {
        setSongData(data);
        console.log(data);
      });
  }, []);
  console.log(songData);
  if (songData != null) {
    return (
      <table>
        <th>Name</th>
        <th>Album</th>
        <th>Artist</th>
        <th>length</th>

        {songData.map((song) => (
          <tr onClick={() => {}}>
            {console.log(song)}
            <td>{song.name}</td>
            <td>{song.album.name}</td>
            <td>{song.artist.name}</td>
            <td>{song.length}</td>
          </tr>
        ))}
      </table>
    );
  }
  return <div>Hello</div>;
};

export default Songlist;
