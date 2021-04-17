import React from "react";
import { Route, Switch } from "react-router";
import Header from "./Components/ContainerComponents/Header";
import { BrowserRouter } from "react-router-dom";
import SearchPage from "./Components/ContainerComponents/SearchPage";
import HomePage from "./Components/ContainerComponents/HomePage";
import Footer from "./Components/ContainerComponents/Footer";

import Product from './Components/ContainerComponents/Product';

import './App.scss';
import "./common/CommonStyle.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route exact path={'/Women'}>
            <SearchPage />
          </Route>
          <Route exact path={'/Men'}>
            MENS
            <SearchPage />
          </Route>
          <Route exact path={'/Kids'}>
            KIDS
            <SearchPage />
          </Route>
          <Route exact path={'/products/sale'}>
            SALE
            <SearchPage />
          </Route>
          <Route path='/product/:id'>
            hiii
            <Product />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default App;
