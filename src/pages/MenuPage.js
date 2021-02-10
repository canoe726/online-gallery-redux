import React from 'react';
import PropTypes from 'prop-types';

import MenuContainer from '../containers/menuContainer';

const MenuPage = ({ match }) => {
  const { url } = match;
  return (
    <MenuContainer currentUrl={url}></MenuContainer>
  );
};

MenuPage.propTypes = {
  match: PropTypes.object
};

export default MenuPage;
