import React from "react";
import NavBar from "./general/NavBar";
import ItemsPage from "./general/ItemsPage";
import Item from "./item/Item";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/movies"
            render={(props) => <ItemsPage {...props} itemType="movie" />}
          />
          <Route
            path={`/movies/:id`}
            render={(props) => <Item {...props} itemType="movie" />}
          />
          <Route
            exact
            path="/tvseries"
            render={(props) => <ItemsPage {...props} itemType="tv" />}
          />
          <Route
            path={`/tv/:id`}
            render={(props) => <Item {...props} itemType="tv" />}
          />
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
          <Route>Page not found</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
