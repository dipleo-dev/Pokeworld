import React from "react";

function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div className="container">
      <button
        className="waves-effect waves-light btn-small"
        onClick={goToPrevPage}
      >
        Previous Page
      </button>
      <button
        className="waves-effect waves-light btn-small"
        onClick={goToNextPage}
      >
        Next Page
      </button>
    </div>
  );
}
export default Pagination;
