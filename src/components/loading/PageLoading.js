import React from 'react';

import '../../stylesheets/loading/pageLoading.scss';

const PageLoading = () => {
  const loadingImage = '/samples/page_loading.gif';
  return (
    <div className="page-loading-wrapper">
      <img className="page-loading-img" src={loadingImage} alt="page-loading-image"></img>
    </div>
  );
};

export default PageLoading;
