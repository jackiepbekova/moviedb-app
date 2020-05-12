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

const SeriesItemList = ({ data }) => {
  const classes = useStyles();
  const series = data.slice(0, 6);

  return (
    <Box className={classes.box}>
      {series.map((show) => {
        return (
          <CardItem
            className={classes.item}
            key={show.id}
            title={show.name}
            poster={show.poster_path}
          />
        );
      })}
    </Box>
  );
};

export default SeriesItemList;

SeriesItemList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
      first_air_date: PropTypes.string.isRequired,
      genre_ids: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      origin_country: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      original_language: PropTypes.string.isRequired,
      original_name: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      popularity: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
    })
  ).isRequired,
};
