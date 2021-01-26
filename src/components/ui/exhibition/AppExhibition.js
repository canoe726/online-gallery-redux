import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/exhibition/exhibition.scss';

import MasonryGallery from './MasonryGallery';

class AppExhibition extends React.Component {
  render () {
    const { exhibitionList } = this.props;
    return (
      <div className="exhibition-wrapper">
        <div className="masonry-wrapper">
          <MasonryGallery
            exhibitionList={exhibitionList}
          ></MasonryGallery>
        </div>
      </div>
    );
  }
}

AppExhibition.propTypes = {
  exhibitionList: PropTypes.array
};

export default AppExhibition;
