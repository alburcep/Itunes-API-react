import React from "react";

const Albums = ({ albums }) => {

  return (
    <div id="orderAlbums" className="albums">
      {/*albums.slice(0, 20).map( */}
      {albums.map(obj => (
        <div>
          <img src={obj.artworkUrl100} />
          <p className="albumName">{obj.collectionName}</p>
          <p className="artist">{obj.artistName}</p>
        </div>
      ))}
    </div>
  );
};

export default Albums;
