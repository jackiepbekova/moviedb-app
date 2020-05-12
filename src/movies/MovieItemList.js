import React from "react";
import CardItem from "../general/CardItem";
import { Box, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

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

const MovieItemList = ({ data }) => {
  const classes = useStyles();
  const movies = data.slice(0, 6);

  return (
    <Box className={classes.box}>
      {movies.map((movie) => {
        return (
          <CardItem
            className={classes.item}
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
          />
        );
      })}
    </Box>
  );
};

export default MovieItemList;

MovieItemList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      adult: PropTypes.bool.isRequired,
      backdrop_path: PropTypes.string,
      genre_ids: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      id: PropTypes.number.isRequired,
      original_language: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      popularity: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      video: PropTypes.bool.isRequired,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
    })
  ).isRequired,
};
