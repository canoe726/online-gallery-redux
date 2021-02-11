import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { lazyLoad } from '../../lib/lazyLoading';

import { onlineGalleryApiConstants as API } from '../../api/onlineGalleryApiConstants';

const MasonryItem = ({ history, exhibitionItem, masonry }) => {
  const url = `/exhibition/${exhibitionItem.exhibitionId}`;

  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div
      className="masonry-item"
      onClick={() => history.push(url)}
    >
      <img className="item-img lazy" data-src={API.ROOT_IMG + exhibitionItem.posterImage}></img>
      <div className="caption-wrapper">
        <div className="caption title">{exhibitionItem.title}</div>
        <div className="caption participants">{exhibitionItem.participants}</div>
        <div className="caption date">{exhibitionItem.startAt} ~ {exhibitionItem.endAt}</div>
      </div>
    </div>
  );
};

MasonryItem.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  exhibitionItem: PropTypes.object,
  masonry: PropTypes.object
};

export default withRouter(MasonryItem);
