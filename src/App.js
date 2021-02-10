import React from 'react';
import { Route, Switch } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './stylesheets/App.scss';

import MenuPage from './pages/MenuPage';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import ExhibitionPage from './pages/ExhibitionPage';
import ExhibitionDetailPage from './pages/ExhibitionDetailPage';
import ArtistPage from './pages/ArtistPage';
import ArtistDetailPage from './pages/ArtistDetailPage';
import NoticePage from './pages/NoticePage';
import Error404 from './components/error/Error404';

const App = () => {
  return (
    <div id="online-gallery">
      <Route path="/*" component={MenuPage}></Route>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/info" component={InfoPage}></Route>
        <Route exact path="/exhibition" component={ExhibitionPage}></Route>
        <Route exact path="/exhibition/:id" component={ExhibitionDetailPage}></Route>
        <Route exact path="/artist" component={ArtistPage}></Route>
        <Route exact path="/artist/:id" component={ArtistDetailPage}></Route>
        <Route exact path="/notice" component={NoticePage}></Route>
        <Route component={Error404}></Route>
      </Switch>
    </div>
  );
};

export default App;
