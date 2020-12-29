import './App.scss';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';


import RouteConfig from './Route';

function App() {
  return (
    <Provider store={store}>
      <RouteConfig></RouteConfig>
    </Provider>);
}

export default App;
