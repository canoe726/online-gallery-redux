import React from 'react';
import PropTypes from 'prop-types';

import ArtistDetailContainer from '../containers/artistDetail/artistDetailContainer';

ArtistDetailPage.propTypes = {
  match: PropTypes.object
};

function ArtistDetailPage ({ match }) {
  const { id } = match.params;
  return (
    <ArtistDetailContainer id={id}></ArtistDetailContainer>
  );
};

export default ArtistDetailPage;
