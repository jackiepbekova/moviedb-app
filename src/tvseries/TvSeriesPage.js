import React, { Fragment } from "react";
import PopularSeries from "./PopularSeries";
import TopRatedSeries from "./TopRatedSeries";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    margin: "1% 2%",
  },
});

const TvSeriesPage = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <h3 className={classes.header}>Popular</h3>
      <PopularSeries />
      <h3 className={classes.header}>Top rated</h3>
      <TopRatedSeries />
    </Fragment>
  );
};

export default TvSeriesPage;
