import React from 'react';
import PropTypes from 'prop-types';

import ExhibitionContainer from '../containers/exhibitionContainer';
import ArtistContainer from '../containers/artistContainer';

const SearchPage = ({ match }) => {
  const { search } = match.params;
  const page = match.url.split('/')[1];
  let loadComponent = null;

  if (page === 'artist') {
    loadComponent = <ArtistContainer input={search}></ArtistContainer>;
  } else if (page === 'exhibition') {
    loadComponent = <ExhibitionContainer input={search}></ExhibitionContainer>;
  }
  return loadComponent;
};

SearchPage.propTypes = {
  match: PropTypes.object
};

export default SearchPage;
