import React, { Fragment, useEffect, useState } from "react";
import CardItem from "../general/CardItem";
import { Box, makeStyles } from "@material-ui/core";
import fetchData from "../general/FetchData";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    margin: "1% 2%",
  },
  item: {
    flex: "0 1",
  },
});

const TopRatedMovies = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData("movie", "top_rated").then((response) => {
      setMovies([...response.data.results]);
    });
  }, []);

  if (movies.length) {
    return (
      <Box className={classes.box}>
        {" "}
        {movies.map((movie, index) => {
          if (index < 6) {
            return (
              <CardItem
                className={classes.item}
                key={movie.id}
                title={movie.title}
                poster={movie.poster_path}
              />
            );
          } else {
            return <Fragment key={movie.id} />;
          }
        })}
      </Box>
    );
  } else {
    return <Fragment />;
  }
};

export default TopRatedMovies;
