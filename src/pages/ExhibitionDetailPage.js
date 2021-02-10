import React from 'react';
import PropTypes from 'prop-types';

import ExhibitionDetailContainer from '../containers/exhibitionDetailContainer';

const ExhibitionDetailPage = ({ match }) => {
  const { id } = match.params;
  return (
    <ExhibitionDetailContainer id={id}></ExhibitionDetailContainer>
  );
};

ExhibitionDetailPage.propTypes = {
  match: PropTypes.object
};

export default ExhibitionDetailPage;
