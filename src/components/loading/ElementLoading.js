import React from 'react';

import '../../stylesheets/loading/elementLoading.scss';

const ElementLoading = () => {
  const loadingImage = '/samples/element_loading.gif';
  return (
    <div className="element-loading-wrapper">
      <img className="element-loading-img" src={loadingImage} alt="element-loading-image"></img>
    </div>
  );
};

export default ElementLoading;
