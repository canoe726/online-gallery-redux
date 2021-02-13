import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import SkeletonImage from '../common/skeletonImage';
import lazyLoad from '../../lib/lazyLoading';

const MasonryItem = ({ history, artistItem }) => {
  const url = `/artist/${artistItem.artistId}`;
  const skletonRef = useRef();

  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div
      className="masonry-item"
      onClick={() => history.push(url)}
    >
      <SkeletonImage ref={skletonRef}></SkeletonImage>
      <img className="item-img lazy"
        data-src={artistItem.profileImage}
        onLoad={() => { skletonRef.current.style.display = 'none'; }}
      ></img>
      <div className="caption-wrapper">
        <div className="caption nickname">{artistItem.nickname}</div>
        <div className="caption introduction">{artistItem.introduction}</div>
        <div className="caption artist">{artistItem.note}</div>
      </div>
    </div>
  );
};

MasonryItem.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  artistItem: PropTypes.object
};

export default withRouter(MasonryItem);
