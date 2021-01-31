import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/loading/noMoreData.scss';

class AppNoMoreLoading extends React.Component {
  render () {
    const { pageIdx, caption, exhibitionImage, artistImage, artistDetailImage } = this.props;
    return (
      <div
        className="no-more-data-wrapper">
        <img
          className="no-more-data-image"
          src={pageIdx === 0
            ? exhibitionImage
            : pageIdx === 1
              ? artistImage
              : pageIdx === 2
                ? artistDetailImage
                : ''}
          alt="no-more-data-image"
        ></img>
        <div
          className="no-more-data-caption"
          onClick={() => window.scrollTo(0, 0)}
        >{caption}</div>
      </div>
    );
  }
}

// exhibitionImage : 0, artistImage : 1, artistDetailImage : 2
AppNoMoreLoading.propTypes = {
  pageIdx: PropTypes.number,
  caption: PropTypes.string,
  exhibitionImage: PropTypes.string,
  artistImage: PropTypes.string,
  artistDetailImage: PropTypes.string
};

export default AppNoMoreLoading;
