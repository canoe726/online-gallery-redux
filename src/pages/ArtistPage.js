import React from 'react';
import PropTyeps from 'prop-types';

import ArtistContainer from '../containers/artistContainer';

ArtistPage.propTypes = {
  history: PropTyeps.object,
  match: PropTyeps.object,
  location: PropTyeps.object
};

function ArtistPage ({ history, match, location }) {
  return (
    <ArtistContainer></ArtistContainer>
  );
};

export default ArtistPage;
