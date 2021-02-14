import React from 'react';
import PropTypes from 'prop-types';

import ExhibitionDetailContainer from '../containers/exhibitionDetailContainer';

ExhibitionDetailPage.propTypes = {
  match: PropTypes.object
};

function ExhibitionDetailPage ({ match }) {
  const { id } = match.params;
  return (
    <ExhibitionDetailContainer id={id}></ExhibitionDetailContainer>
  );
};

export default ExhibitionDetailPage;
