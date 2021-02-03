import React from 'react';
import { Route, Switch } from 'react-router-dom';

import '../stylesheets/App.scss';

import { MenuContainer } from '../containers/menuContainer';
import { HomeContainer } from '../containers/homeContainer';
import { InfoContainer } from '../containers/infoContainer';
import { ExhibitionContainer } from '../containers/exhibitionContainers';
import { ExhibitionDetailContainer } from '../containers/exhibitionDetailContainers';
import { ArtistContainer } from '../containers/artistContainers';
import { ArtistDetailContainer } from '../containers/artistDetailContainers';
import { NoticeContainer } from '../containers/noticeContainers';
import { ErrorContainer } from '../containers/errorContainers';

const App = () => {
  return (
    <div id="online-gallery">
      <MenuContainer></MenuContainer>
      <Switch>
        <Route exact path="/" component={HomeContainer}></Route>
        <Route exact path="/info" component={InfoContainer}></Route>
        <Route exact path="/exhibition" component={ExhibitionContainer}></Route>
        <Route exact path="/exhibition/:id" component={ExhibitionDetailContainer}></Route>
        <Route exact path="/artist" component={ArtistContainer}></Route>
        <Route exact path="/artist/:id" component={ArtistDetailContainer}></Route>
        <Route exact path="/notice" component={NoticeContainer}></Route>
        <Route component={ErrorContainer}></Route>
      </Switch>
    </div>
  );
};

export default App;
