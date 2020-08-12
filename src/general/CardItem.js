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
import { Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 190,
    margin: 10,
  },
  movieTitle: {
    color: "black",
    maxHeight: "80px",
  },
});

const url = "https://image.tmdb.org/t/p/w220_and_h330_face";

const CardItem = ({ match, history, title, poster, id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to={`${match.url}/${id}`}>
        <CardActionArea>
          <CardMedia component="img" image={url + poster} title="poster" />
          <CardContent>
            <Typography
              gutterBottom
              className={classes.movieTitle}
              component="h2"
            >
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CardItem;

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
