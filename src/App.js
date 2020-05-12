import React from "react";
import NavBar from "./general/NavBar";
import MoviePage from "./movies/MoviePage";
import TvSeriesPage from "./tvseries/TvSeriesPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <MoviePage />
      {/* <TvSeriesPage/> */}
    </div>
  );
};

export default App;
