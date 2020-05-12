import React, { useEffect, useState } from "react";
import fetchData from "../general/FetchData";
import MovieItemList from "./MovieItemList";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData("movie", "top_rated")
      .then((response) => {
        setMovies([...response.data.results]);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return <MovieItemList data={movies} />;
};

export default TopRatedMovies;
