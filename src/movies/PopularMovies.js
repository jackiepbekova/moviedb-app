import React, { useEffect, useState } from "react";
import fetchData from "../general/FetchData";
import MovieItemList from "./MovieItemList";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData("movie", "popular")
      .then((response) => {
        setMovies([...response.data.results]);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return <MovieItemList data={movies} />;
};

export default PopularMovies;
