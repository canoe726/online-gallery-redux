import React from 'react';
import PropTypes from 'prop-types';

class AppMasonryLoading extends React.Component {
  render () {
    const { loadingImage } = this.props;
    return (
      <div className="masonry-loading-wrapper">
        <img className="masonry-loading-img" src={loadingImage} alt="masonry_loading-img"></img>
      </div>
    );
  }
}

// export function toggleMasonryLoading () {
//   const loadingWrapper = document.querySelector('.masonry-loading-wrapper');
//   loadingWrapper.classList.toggle('hidden');
// };

AppMasonryLoading.propTypes = {
  loadingImage: PropTypes.string
};

export default AppMasonryLoading;
