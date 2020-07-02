import React from 'react';
import { BrowserRouter, Route , Switch } from "react-router-dom";                  
import { Component } from "react";

import logo from './logo.svg';
import './App.css';
import WeatherPage from './components/weather/weatherPage/weatherPage'
import InputScreen from './components/input/input'

class App extends Component {

  render() {

    let routes = (
      <Switch>
      <Route path="/" exact component={InputScreen} />
      <Route path="/:country" exact component={WeatherPage} />
      </Switch>
    )


    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default App;
