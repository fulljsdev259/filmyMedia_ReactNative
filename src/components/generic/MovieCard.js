import React from "react";
import { IMAGE_BASE_URL } from "../../config";
import NextPrePage from "../generic/NextPrePage";

export default function MovieCard({
  pageNo,
  moviesList,
  handlePage,
  extraClass,
  ...props
}) {

  function _renderItem(item, index) {
    return (
      <div
        onClick={() => props.history.push(`/movie-details/${item.id}`)}
        key={`${item.id}`}
        className="card-wrapper"
      >
        <div className="card-img-wrapper">
          <img src={IMAGE_BASE_URL + item.poster_path} alt={item.title} />
        </div>
        <div className="movie-info card-info">
          <span className="movie-title">{item.title}</span>
          <span className="movie-rating"> ({item.vote_average})</span>
        </div>
        <div className="movie-description card-info">
          <span>{item.overview}</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={`movie-card-container ${extraClass}`}>
        {moviesList.map((item, index) => {
          return _renderItem(item, index);
        })}
      </div>
      <NextPrePage
        pageNo={pageNo}
        handlePage={handlePage}
        pageFor={"movieList"}
      />
    </>
  );
}
