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
        <thead>
          <tr>
            <th>Title</th>
            <th>Album</th>
            <th>Artist</th>
            <th>length</th>
          </tr>
        </thead>
        {songData.map((song) => (
          <tbody>
            <tr
              onClick={(e) => {
                props.setSongs([song]);
              }}
            >
              {/* {console.log(song)} */}

              <td>{song.name}</td>
              <td>{song.album.name}</td>
              <td>{song.artist.name}</td>
              <td>{song.length}</td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }
  return <div>Hello</div>;
};

export default Songlist;
