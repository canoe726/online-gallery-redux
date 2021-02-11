import React from 'react';
import PropTyeps from 'prop-types';

import ArtistContainer from '../containers/artistContainer';

const ArtistPage = ({ history, match, location }) => {
  console.log(history, match, location);
  return (
    <ArtistContainer></ArtistContainer>
  );
};

ArtistPage.propTypes = {
  history: PropTyeps.object,
  match: PropTyeps.object,
  location: PropTyeps.object
};

export default ArtistPage;
