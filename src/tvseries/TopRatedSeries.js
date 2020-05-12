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

const TopRatedSeries = () => {
  const classes = useStyles();
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchData("tv", "top_rated").then((response) => {
      setSeries([...response.data.results]);
    });
  }, []);

  if (series.length) {
    return (
      <Box className={classes.box}>
        {" "}
        {series.map((show, index) => {
          if (index < 6) {
            return (
              <CardItem
                className={classes.item}
                key={show.id}
                title={show.name}
                poster={show.poster_path}
              />
            );
          } else {
            return <Fragment key={show.id} />;
          }
        })}
      </Box>
    );
  } else {
    return <Fragment />;
  }
};

export default TopRatedSeries;
