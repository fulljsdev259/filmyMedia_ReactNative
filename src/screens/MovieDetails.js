import React, { useEffect } from "react";
import Header from "../components/generic/Header";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailsRequest } from "../redux/actions";
import Loader from "../components/generic/Loader";
import dateFomattor from "../utiles/dateFormattor";
import { IMAGE_BASE_URL } from "../config";

export default function MovieDetails(props) {
  const dispatch = useDispatch();
  const movieDetails = useSelector(state => state.movies.movieDetails);

  useEffect(() => {
    const { movieId } = props.match.params;
    dispatch(getMovieDetailsRequest({ movieId }));
  }, []);
  return (
    <>
      <Header search={false} {...props}/>
      {movieDetails.isSuccess && (
        <div className="movies-details-content-wrapper">
          <div className="movie-poster">
            <img
              src={IMAGE_BASE_URL + movieDetails.data.poster_path}
              alt={movieDetails.data.title}
            />
          </div>
          <div className="movie-right-info">
            <div className="movie-title">
              {movieDetails.data.title}{" "}
              <span className="movie-info">
                ({movieDetails.data.vote_average})
              </span>
            </div>
            <div className="movie-info">
              {dateFomattor(movieDetails.data.release_date).year} |{" "}
              {movieDetails.data.runtime} | Director
            </div>
            <div className="movie-info">Cast: Actor 1, Actor 2, ...</div>
            <div className="movie-info">
              Description: {movieDetails.data.overview}
            </div>
          </div>
        </div>
      )}
      <Loader
        isLoading={movieDetails.isLoading}
        message={movieDetails.message}
      />
    </>
  );
}
