import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { lazyLoad } from '../../lib/lazyLoading';

import { onlineGalleryApiConstants as API } from '../../api/onlineGalleryApiConstants';

const MasonryItem = ({ history, artistItem, masonry }) => {
  const url = `/artist/${artistItem.artistId}`;

  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div
      className="masonry-item"
      onClick={() => history.push(url)}
      >
      <img className="item-img lazy" data-src={API.ROOT_IMG + artistItem.profileImage}></img>
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
  artistItem: PropTypes.object,
  masonry: PropTypes.object
};

export default withRouter(MasonryItem);
