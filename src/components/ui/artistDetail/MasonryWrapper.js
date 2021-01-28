import React from 'react';
import PropTypes from 'prop-types';

class MasonryWrapper extends React.Component {
  render () {
    return (
      <div className="masonry-wrapper">
      </div>
    );
  }
}

MasonryWrapper.propTypes = {
  noMoreData: PropTypes.bool,
  artistDetailPictureList: PropTypes.array
};

export default MasonryWrapper;
