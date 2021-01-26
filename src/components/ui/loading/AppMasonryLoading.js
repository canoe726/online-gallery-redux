import React from 'react';
import PropTypes from 'prop-types';

class AppMasonryLoading extends React.Component {
  render () {
    const { isLoading, loadingImage } = this.props;
    return (
      <div className={isLoading ? 'masonry-loading-wrapper' : 'masonry-loading-wrapper hidden'}>
        <img className="masonry-loading-img" src={loadingImage} alt="masonry_loading-img"></img>
      </div>
    );
  }
}

// function toggleMasonryLoading () {
//   const loadingWrapper = document.querySelector('.masonry-loading-wrapper');
//   loadingWrapper.classList.toggle('hidden');
// };

AppMasonryLoading.propTypes = {
  isLoading: PropTypes.bool,
  loadingImage: PropTypes.string
};

export default AppMasonryLoading;
