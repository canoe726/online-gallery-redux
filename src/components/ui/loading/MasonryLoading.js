import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/loading/masonryLoading.scss';

const MasonryLoading = ({ loadingImage }) => {
  return (
    <div className="masonry-loading-wrapper">
      <img className="masonry-loading-img" src={loadingImage} alt="masonry-loading-img"></img>
    </div>
  );
};

MasonryLoading.propTypes = {
  loadingImage: PropTypes.string
};

export default MasonryLoading;
