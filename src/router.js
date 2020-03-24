import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviesList from "./screens/MoviesList";
import MovieDetails from "./screens/MovieDetails";

export default function Routes() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route exact path="/movie-details/:movieId" component={MovieDetails} />
        </Switch>
      </Router>
  );
}
