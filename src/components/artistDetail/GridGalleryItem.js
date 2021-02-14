import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import lazyLoad from '../../lib/lazyLoading';

GridGalleryItem.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  item: PropTypes.object
};

function GridGalleryItem ({ history, item }) {
  useEffect(() => {
    lazyLoad();
  }, []);

  return (
    <div
      className="grid-item"
      onClick={() => history.push(`/exhibition/${item.exhibitionId}`)}
    >
      <img className="img-item lazy" data-src={item.exhibitionItem.value}></img>
      <div className="caption-wrapper">
        <div className="caption title">{item.exhibitionItem.title}</div>
      </div>
    </div>
  );
};

export default withRouter(GridGalleryItem);
