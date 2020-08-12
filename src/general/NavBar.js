import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navPanel: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "black",
    margin: "0 0 30px 0",
  },
  navTab: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
    margin: "0 1.5em",
    float: "left",
    textDecoration: "none",
  },
  list: {
    padding: "20px",
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navPanel}>
      <div className={classes.list}>
        <Link to="/movies" className={classes.navTab}>
          MOVIES
        </Link>
        <Link to="/tvseries" className={classes.navTab}>
          TV SERIES
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
