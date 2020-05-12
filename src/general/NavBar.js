import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navPanel: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    padding: "1.2%",
    margin: "0 0 20px 0",
  },
  navTab: {
    fontSize: "x-large",
    fontVariant: "all-small-caps",
    fontWeight: "bold",
    color: "white",
    margin: "0 50px",
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navPanel}>
      <div className={classes.navTab}>Movies</div>
      <div className={classes.navTab}>TV Series</div>
    </nav>
  );
};

export default NavBar;
