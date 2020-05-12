import React, { Fragment, useEffect, useState } from "react";
import CardItem from "../general/CardItem";
import fetchData from "../general/FetchData";
import { Box, makeStyles } from "@material-ui/core";

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

const PopularMovies = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData("movie", "popular").then((response) => {
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

export default PopularMovies;
