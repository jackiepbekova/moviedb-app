import React, { Fragment } from "react";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    margin: "1% 2%",
  },
});

const MoviePage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <h3 className={classes.header}>Popular</h3>
      <PopularMovies />
      <h3 className={classes.header}>Top rated</h3>
      <TopRatedMovies />
    </Fragment>
  );
};

export default MoviePage;
