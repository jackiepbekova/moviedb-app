import React from "react";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import { makeStyles } from "@material-ui/core/styles";
import Section from "../general/Section";

const useStyles = makeStyles({
  section: {
    textAlign: "center",
  },
});

const MoviePage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.section}>
        <Section sectionName="Popular" />
        <PopularMovies />
      </div>
      <div className={classes.section}>
        <Section sectionName="Top Rated" />
        <TopRatedMovies />
      </div>
    </div>
  );
};

export default MoviePage;
