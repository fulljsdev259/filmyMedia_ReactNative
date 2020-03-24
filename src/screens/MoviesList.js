import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/generic/Header";
import MovieCard from "../components/generic/MovieCard";
import {
  getMoviesListRequest,
  searchMoviesRequest,
  clearSearchMoviesRequest
} from "../redux/actions";
import Loader from "../components/generic/Loader";
import SearchedMovies from "../components/generic/SearchedMovies";


export default function MoviesList(props) {
  const dispatch = useDispatch();
  const moviesList = useSelector(state => state.movies.moviesList);
  const searchedMovies = useSelector(state => state.movies.searchedMovies);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(getMoviesListRequest({ pageNo: 1 }));
  }, []);

  function handleSearch(query) {    
    setQuery(query);
    const payload = {
      query,
      pageNo: 1
    };
    dispatch(searchMoviesRequest(payload))
  }

  function handleClearSearch() {
    setQuery("");
    dispatch(clearSearchMoviesRequest());
  }

  function handlePage(pageNo, pageType, pageFor) {
    const page = pageType === "next" ? pageNo + 1 : pageNo - 1;
    pageFor === "movieList" && dispatch(getMoviesListRequest({ pageNo: page }));
    pageFor === "searchList" &&
    dispatch(searchMoviesRequest({ pageNo: page, query }));
  }

  return (
    <>
      <Header
        query={query}
        isLoading={searchedMovies.isLoading}
        handleSearch={handleSearch}
        handleClearSearch={handleClearSearch}
        search={true}
        {...props}
      />
      {(moviesList.isSuccess || searchedMovies.isSuccess) && (
        <>
          <MovieCard
            handlePage={handlePage}
            {...props}
            extraClass={
              (searchedMovies.message || searchedMovies.data.length) &&
              "extra-cl"
            }
            pageNo={moviesList.pageNo}
            moviesList={moviesList.data}
          />
          <SearchedMovies
            handlePage={handlePage}
            handleClearSearch={handleClearSearch}
            {...props}
            searchedMovies={searchedMovies}
          />
        </>
      )}
      <Loader isLoading={moviesList.isLoading} message={moviesList.message} />
    </>
  );
}