import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/loading/pageLoading.scss';

const PageLoading = ({ loadingImage }) => {
  return (
    <div className="page-loading-wrapper">
      <img className="page-loading-img" src={loadingImage} alt="page-loading-image"></img>
    </div>
  );
};

PageLoading.propTypes = {
  loadingImage: PropTypes.string
};

export default PageLoading;
