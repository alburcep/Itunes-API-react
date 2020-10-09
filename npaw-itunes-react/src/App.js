import React, { useState } from "react";
import Albums from "./components/Albums";
import Pages from "./components/Pages";
import "./index.css";

export function App() {
  const [searchTerm, setSearchTerm] = useState("rock");
  const [albums, setAlbums] = useState([]);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [abumsPerPage, setAlbumsPerPage] = useState(20);

  const urlItunes = "https://itunes.apple.com/search?term=";
  const entity = "&entity=album";
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const urlTerm = proxy + urlItunes + searchTerm + entity;

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  fetch(urlTerm)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      let albumsITunes = myJson.results;
      //console.log("albums =>", albumsITunes)
      setAlbums(albumsITunes);
    });

  const initSearch = () => {
    setSearchTerm("");
  };

  const orderListAlbums = () => {
    let element = document.getElementById("orderAlbums");
    element.classList.toggle("albumsVertical");
  };

  //max 20 albumns - paging component
  const allAlbums = currentPage * abumsPerPage;
  const firtsAlbum = allAlbums - abumsPerPage;
  const currentAlbums = albums.slice(firtsAlbum, allAlbums);
  //change page
  const paging = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <div className="search">
        <h2>Search Albums</h2>
        <input
          placeholder="Search albums..."
          value={searchTerm}
          onChange={handleSearchChange}
          onClick={initSearch}
        />
        <div>
          <button onClick={orderListAlbums}>Order Results </button>
        </div>
      </div>
      <Albums albums={currentAlbums} />
      <Pages
        abumsPerPage={abumsPerPage}
        totalAlbums={albums.length}
        paginate={paging}
      />
    </div>
  );
}

export default App;
