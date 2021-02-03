import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { lazyLoad } from '../../util/lazyLoading';

const ArtistDetailItem = ({ item }) => {
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

ArtistDetailItem.propTypes = {
  item: PropTypes.object
};

export default ArtistDetailItem;
