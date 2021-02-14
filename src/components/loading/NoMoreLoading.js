import React from 'react';
import PropTypes from 'prop-types';

import '../../stylesheets/loading/noMoreData.scss';

// exhibitionImage : 0, artistImage : 1, artistDetailImage : 2
NoMoreLoading.propTypes = {
  pageIdx: PropTypes.number.isRequired,
  caption: PropTypes.string
};

function NoMoreLoading ({ pageIdx, caption }) {
  const exhibitionImage = '/samples/no_more_data_exhibition.jpg';
  const artistImage = '/samples/no_more_data_artist.jpg';
  const artistDetailImage = '/samples/no_more_data_artist_detail.jpg';
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
};

export default NoMoreLoading;
