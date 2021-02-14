import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import SkeletonImage from '../common/skeletonImage';
import lazyLoad from '../../lib/lazyLoading';

MasonryItem.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  exhibitionItem: PropTypes.object
};

function MasonryItem ({ history, exhibitionItem }) {
  const url = `/exhibition/${exhibitionItem.exhibitionId}`;
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
        data-src={exhibitionItem.posterImage}
        onLoad={() => { skletonRef.current.style.display = 'none'; }}
      ></img>
      <div className="caption-wrapper">
        <div className="caption title">{exhibitionItem.title}</div>
        <div className="caption participants">{exhibitionItem.participants}</div>
        <div className="caption date">{exhibitionItem.startAt} ~ {exhibitionItem.endAt}</div>
      </div>
    </div>
  );
};

export default withRouter(MasonryItem);
