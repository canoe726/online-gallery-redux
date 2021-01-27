import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../stylesheets/App.scss';

import { Menu } from '../containers/menuContainer';
import { Home } from '../containers/homeContainer';
import { Info } from '../containers/infoContainer';
import { Exhibition } from '../containers/exhibitionContainers';
import { ExhibitionDetail } from '../containers/exhibitionDetailContainers';
import { Artist } from '../containers/artistContainers';
import { Notice } from '../containers/noticeContainers';
import { Error } from '../containers/errorContainers';

const App = () => {
  return (
    <div id="online-gallery">
      <Menu></Menu>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/info" component={Info}></Route>
        <Route exact path="/exhibition" component={Exhibition}></Route>
        <Route exact path="/exhibition/:id" component={ExhibitionDetail}></Route>
        <Route exact path="/artist" component={Artist}></Route>
        <Route exact path="/notice" component={Notice}></Route>
        <Route component={Error}></Route>
      </Switch>
    </div>
  );
};

export default App;
