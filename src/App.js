import './App.scss';
import React from "react";
import { Route, Switch } from "react-router";

import Header from "./Components/ContainerComponents/Header";
import {BrowserRouter} from "react-router-dom";
import SearchPage from "./Components/ContainerComponents/SearchPage";
import HomePage from "./Components/ContainerComponents/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path={'/'}>
            <HomePage/>
          </Route>
          <Route exact path={'/Women'}>
            <SearchPage/>
          </Route>
          <Route exact path={'/Men'}>
            MENS
            <SearchPage/>
          </Route>
          <Route exact path={'/Kids'}>
            KIDS
            <SearchPage/>
          </Route>
          <Route exact path={'/Sale'}>
            SALE
            <SearchPage/>
          </Route>
        </Switch>

      </BrowserRouter>



    </div>
  );
}

export default App;
