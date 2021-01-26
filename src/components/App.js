import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../stylesheets/App.scss';

import {
  Menu,
  Home
} from './containers';

const App = () => {
  return (
    <div id="online-gallery">
      <Menu></Menu>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
};

export default App;
