import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Box, makeStyles } from "@material-ui/core";
import fetchData from "./FetchData";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    margin: "20px 20px",
    justifyContent: "center",
  },
  item: {
    flex: "0 1",
  },
});

const ItemList = ({ dataType, listType }) => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData(dataType, listType)
      .then((response) => {
        setMovies(
          [...response.data.results].slice(0, 6).map((item) => ({
            id: item.id,
            title: item.title || item.name,
            poster: item.poster_path,
          }))
        );
      })
      .catch((error) => {
        throw error;
      });
  }, [dataType, listType]);

  return (
    <Box className={classes.box}>
      {movies.map((movie) => {
        return (
          <CardItem
            className={classes.item}
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
          />
        );
      })}
    </Box>
  );
};

export default ItemList;

ItemList.propTypes = {
  dataType: PropTypes.string.isRequired,
  listType: PropTypes.string.isRequired,
};
