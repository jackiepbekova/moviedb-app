import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MoviePage from "../movies/MoviePage";
import TvSeriesPage from "../tvseries/TvSeriesPage";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

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
    float: "left",
  },
  list: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
  },
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <Router>
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
      <Switch>
        <Route path="/tvseries">
          <TvSeriesPage />
        </Route>
        <Route path="/">
          <MoviePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default NavBar;
