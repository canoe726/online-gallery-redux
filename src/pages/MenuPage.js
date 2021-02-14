import React from 'react';
import PropTypes from 'prop-types';

import MenuContainer from '../containers/menuContainer';

MenuPage.propTypes = {
  match: PropTypes.object
};

function MenuPage ({ match }) {
  const { url } = match;
  return (
    <MenuContainer url={url}></MenuContainer>
  );
};

export default MenuPage;
