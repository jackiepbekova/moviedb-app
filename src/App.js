import React from "react";
import NavBar from "./general/NavBar";
import MoviePage from "./movies/MoviePage";
import TvSeriesPage from "./tvseries/TvSeriesPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <MoviePage />
          </Route>
          <Route path="/tvseries">
            <TvSeriesPage />
          </Route>
          <Route>Page not found</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
