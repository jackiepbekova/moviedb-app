import React, { useState, useEffect } from "react";
import { fetchSingleItemData } from "../utils/FetchData";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    maxWidth: 300,
    maxHeight: 450,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "20px 20px",
    justifyContent: "center",
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    margin: "20px",
  },
  text: {
    fontSize: 22,
    margin: "20px",
  },
  score: {
    maxHeight: 60,
    maxWidth: 60,
  },
});

const url = "https://image.tmdb.org/t/p/w300_and_h450_face";

const Item = ({ itemType, match }) => {
  const classes = useStyles();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchSingleItemData(itemType, match.params.id)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, [itemType, match.params.id]);

  const chartData = [{ val: item.vote_average }];

  // let genres = "";

  // if (item.genres){
  //   item.genres.map(genre => {
  //     if indexOf(genre)
  //     genres += genre.name + ", ";
  //   })

  // }

  return (
    <div>
      <div className={classes.itemContainer}>
        <Paper square={false} className={classes.paper}>
          <img src={url + item.poster_path} />
        </Paper>
        <div>
          <div className={classes.header}> {item.title || item.name} </div>
          <div className={classes.text}>{item.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
