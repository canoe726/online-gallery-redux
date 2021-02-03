import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/loading/elementLoading.scss';

const ElementLoading = ({ loadingImage }) => {
  return (
    <div className="element-loading-wrapper">
      <img className="element-loading-img" src={loadingImage} alt="element-loading-image"></img>
    </div>
  );
};

ElementLoading.propTypes = {
  loadingImage: PropTypes.string
};

export default ElementLoading;
