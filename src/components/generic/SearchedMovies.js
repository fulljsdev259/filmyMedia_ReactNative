import React from "react";
import card from "../../assets/card.png";
import NextPrePage from "./NextPrePage";
import { IMAGE_BASE_URL } from "../../config";

export default function SearchedMovies({
  navigation,
  handleClearSearch,
  handlePage,
  searchedMovies,
  ...props
}) {
  const renderItem = (item, index) => {
    return (
      <div
        onClick={() => {
          handleClearSearch();
          props.history.push(`/movie-details/${item.id}`);
        }}
        key={`${item.id}`}
        className="search-card"
      >
        <div className="movie-poster-wrapper">
          <img src={IMAGE_BASE_URL + item.poster_path} alt={item.title} />
        </div>
        <div>
          <div className="rating">
            {item.title} <span>({item.vote_average})</span>
          </div>
          <div className="description">Description: {item.overview}</div>
        </div>
      </div>
    );
  };
  if (searchedMovies.data.length) {
    return (
      <div className="search-modal">
        {searchedMovies.data.map((item, index) => {
          return renderItem(item, index);
        })}
        <NextPrePage
          pageNo={searchedMovies.pageNo}
          handlePage={handlePage}
          pageFor={"searchList"}
        />
      </div>
    );
  } else if (searchedMovies.message) {
    return (
      <div className="search-modal msg">
        <span>{searchedMovies.message}</span>
      </div>
    );
  } else return null;
}
