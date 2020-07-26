import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    margin: "20px auto",
    fontSize: 20,
    fontWeight: "bold",
  },
});

const SectionTitle = ({ sectionName }) => {
  const classes = useStyles();

  return <div className={classes.header}>{sectionName}</div>;
};

export default SectionTitle;
