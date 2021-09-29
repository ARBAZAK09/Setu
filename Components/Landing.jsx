import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Favouritemovies from "./Favouritemovies";
import { FetchingDataFromApi } from "./FetchDataFromApi";
import { Login } from "./Login";
import { NavBar } from "./NavBar";

export const Landing = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/LatestMovies ">
            <FetchingDataFromApi />
          </Route>
          <Route path="/Favouritemovies">
            <Favouritemovies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
