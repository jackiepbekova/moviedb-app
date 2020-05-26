import React from "react";
import PopularSeries from "./PopularSeries";
import TopRatedSeries from "./TopRatedSeries";
import { makeStyles } from "@material-ui/core/styles";
import Section from "../general/Section";

const useStyles = makeStyles({
  section: {
    textAlign: "center",
  },
});

const TvSeriesPage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.section}>
        <Section sectionName="Popular" />
        <PopularSeries />
      </div>
      <div className={classes.section}>
        <Section sectionName="Top Rated" />
        <TopRatedSeries />
      </div>
    </div>
  );
};

export default TvSeriesPage;
