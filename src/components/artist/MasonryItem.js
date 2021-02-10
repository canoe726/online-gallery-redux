import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { lazyLoad } from '../../lib/lazyLoading';

import { onlineGalleryApiConstants as API } from '../../api/onlineGalleryApiConstants';
// import { onlineGalleryApiConstantsSample as API } from '../../api/onlineGalleryApiConstants';

const MasonryItem = ({ artistItem, masonry }) => {
  const url = `/artist/${artistItem.artistId}`;

  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div
      className="masonry-item"
      onLoad={resizeMasonryItem}
      onClick={() => { window.location = url; }}
      >
      <img className="item-img lazy" data-src={API.ROOT_IMG + artistItem.profileImage}></img>
      <div className="caption-wrapper">
        <div className="caption nickname">{artistItem.nickname}</div>
        <div className="caption introduction">{artistItem.introduction}</div>
        <div className="caption artist">{artistItem.note}</div>
      </div>
    </div>
  );

  function resizeMasonryItem (item) {
    const target = item.target;

    const grid = masonry.current;
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));

    const itemImg = target;
    const rowSpan = Math.ceil((itemImg.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

    target.parentNode.style.gridRowEnd = 'span ' + rowSpan;
  }
};

MasonryItem.propTypes = {
  artistItem: PropTypes.object,
  masonry: PropTypes.object
};

export default MasonryItem;
