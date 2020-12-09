import './App.scss';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './ReduxConfig/store'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import AllUser from './Pages/AllUser';
import AddUser from './Pages/AddUser';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Switch> */}
          <Route exact path="/">
            <span>Home</span>
          </Route>
          <Route path="/"><AllUser></AllUser></Route>
          <Route path="/"><AddUser></AddUser></Route>
        {/* </Switch> */}
      </Router>
    </Provider>);
}

export default App;
