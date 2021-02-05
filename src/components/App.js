import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../stylesheets/App.scss';

import MenuContainer from '../containers/menuContainer';
import Home from './home/Home';
import InfoContainer from '../containers/infoContainer';
import ExhibitionContainer from '../containers/exhibitionContainer';
import ExhibitionDetailContainer from '../containers/exhibitionDetailContainer';
import ArtistContainer from '../containers/artistContainer';
import ArtistDetailContainer from '../containers/artistDetail/artistDetailContainer';
import Notice from './notice/Notice';
import Error404 from './error/Error404';

const App = () => {
  return (
    <div id="online-gallery">
      <MenuContainer></MenuContainer>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/info" component={InfoContainer}></Route>
        <Route exact path="/exhibition" component={ExhibitionContainer}></Route>
        <Route exact path="/exhibition/:id" component={ExhibitionDetailContainer}></Route>
        <Route exact path="/artist" component={ArtistContainer}></Route>
        <Route exact path="/artist/:id" component={ArtistDetailContainer}></Route>
        <Route exact path="/notice" component={Notice}></Route>
        <Route component={Error404}></Route>
      </Switch>
    </div>
  );
};

export default App;
