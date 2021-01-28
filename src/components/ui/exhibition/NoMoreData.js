import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/exhibition/noMoreData.scss';

class NoMoreData extends React.Component {
  render () {
    const { noMoreDataImage } = this.props;
    return (
      <div className="no-more-data-wrapper">
        <img className="no-more-data-image" src={noMoreDataImage} alt="no-more-data-image"></img>
        <div
          className="no-more-data-caption"
          onClick={() => window.scrollTo(0, 0)}
        >데이터를 모두 불러 왔습니다.</div>
      </div>
    );
  }
}

NoMoreData.propTypes = {
  noMoreDataImage: PropTypes.string
};

export default NoMoreData;
