import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  card: {
    maxWidth: 190,
    margin: 10,
  },
  movieTitlle: {
    color: "black",
    maxHeight: "80px",
  },
});

const url = "https://image.tmdb.org/t/p/w220_and_h330_face";

const CardItem = ({ title, poster }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia component="img" image={url + poster} title="poster" />
        <CardContent>
          <Typography
            gutterBottom
            className={classes.movieTitlle}
            component="h2"
          >
            {" "}
            {title}{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardItem;

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
