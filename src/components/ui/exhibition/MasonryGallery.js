import React from 'react';
import PropTypes from 'prop-types';

class MasonryGallery extends React.Component {
  render () {
    return (
      <div className="masonry"></div>
    );
  }
}

MasonryGallery.propTypes = {
  exhibitionList: PropTypes.array
};

export default MasonryGallery;
