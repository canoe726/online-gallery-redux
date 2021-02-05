import React from 'react';

import '../../stylesheets/loading/masonryLoading.scss';

const MasonryLoading = () => {
  const loadingImage = '/samples/masonry_loading.gif';
  return (
    <div className="masonry-loading-wrapper">
      <img className="masonry-loading-img" src={loadingImage} alt="masonry-loading-img"></img>
    </div>
  );
};

export default MasonryLoading;
