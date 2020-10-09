import React from "react";

const Pages = ({ abumsPerPage, totalAlbums, paginate }) => {
  //creamos array pagesNum
  const pagesNumbers = [];
  for (let i = 1; i <= Math.ceil(totalAlbums / abumsPerPage); i++) {
    pagesNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pages">
        {pagesNumbers.map(pageNum => (
          <a onClick={() => paginate(pageNum)} href="#">
            {pageNum}
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Pages;
