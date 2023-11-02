import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
