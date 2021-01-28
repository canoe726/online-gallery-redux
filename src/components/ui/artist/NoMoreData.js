import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/artist/noMoreData.scss';

class NoMoreData extends React.Component {
  render () {
    const { noMoreDataImage } = this.props;
    return (
      <div className="no-more-data-wrapper">
        <img className="no-more-data-image" src={noMoreDataImage} alt="no-more-data-image"></img>
        <div
          className="no-more-data-caption"
          onClick={() => window.scrollTo(0, 0)}
        >모든 아티스트를 불러 왔습니다.</div>
      </div>
    );
  }
}

NoMoreData.propTypes = {
  noMoreDataImage: PropTypes.string
};

export default NoMoreData;
