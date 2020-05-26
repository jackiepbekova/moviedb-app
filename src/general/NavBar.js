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
    fontSize: 30,
    fontVariant: "all-small-caps",
    fontWeight: "bold",
    color: "white",
    margin: "0 1.5em",
    float: "left",
    textDecoration: "none",
  },
  list: {
    listStyleType: "none",
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navPanel}>
      <ul className={classes.list}>
        <li>
          <Link to="/" className={classes.navTab}>
            Movies
          </Link>
        </li>
        <li>
          <Link to="/tvseries" className={classes.navTab}>
            TV Series
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
