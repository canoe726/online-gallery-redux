import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { lazyLoad } from '../../lib/lazyLoading';

const GridGalleryItem = ({ item }) => {
  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div className="grid-item">
      <img className="img-item lazy" data-src={item.exhibitionItem.value}></img>
      <div className="caption-wrapper">
        <div className="caption title">{item.exhibitionItem.title}</div>
      </div>
    </div>
  );
};

GridGalleryItem.propTypes = {
  item: PropTypes.object
};

export default GridGalleryItem;
