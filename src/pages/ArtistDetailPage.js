import React from 'react';
import PropTypes from 'prop-types';

import ArtistDetailContainer from '../containers/artistDetail/artistDetailContainer';

const ArtistDetailPage = ({ match }) => {
  const { id } = match.params;
  return (
    <ArtistDetailContainer id={id}></ArtistDetailContainer>
  );
};

ArtistDetailPage.propTypes = {
  match: PropTypes.object
};

export default ArtistDetailPage;
