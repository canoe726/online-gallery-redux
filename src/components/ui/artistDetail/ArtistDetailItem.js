import React from 'react';
import PropTypes from 'prop-types';

import ArtistInfoWrapper from './ArtistInfoWrapper';
import MasonryWrapper from './MasonryWrapper';

import { resizeAllMasonryItems } from '../../util/masonry';

class ArtistDetailItem extends React.Component {
  constructor (props) {
    super(props);

    this.resizeAllMasonryItems = resizeAllMasonryItems.bind(this);
    this.infinityScroll = this.infinityScroll.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.heroScrollZoom);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.heroScrollZoom);
  }

  render () {
    const { noMoreData, artistDetailData, artistDetailPictureList } = this.props;
    return (
      <div className="artist-detail-item">
        <div className="thumbnail-wrapper zoom">
          <img className="main-img" src={artistDetailData.artist.profileImage} alt="author-main-img-"></img>
        </div>
        <ArtistInfoWrapper
          artistDetailData={artistDetailData}
        ></ArtistInfoWrapper>
        <MasonryWrapper
          noMoreData={noMoreData}
          artistDetailPictureList={artistDetailPictureList}
        ></MasonryWrapper>
      </div>
    );
  }

  infinityScroll () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // 스크롤이 최하단이면서 fetch 중이 아닐 때 호출
    if (scrollTop + clientHeight >= scrollHeight && !this.props.isFetching) {
      this.props.addArtistDetailPictureData();
    }
  }

  heroScrollZoom () {
    const scrollY = window.scrollY;
    const zoomImg = document.querySelector('.zoom img');
    const scaleRatio = (100 + scrollY / 5) / 100;
    if (Math.floor(scaleRatio) > 2) return;
    zoomImg.style.transform = `translate3d(-50%, -${scrollY / 50}%, 0) scale(${scaleRatio})`;
  }
}

ArtistDetailItem.propTypes = {
  noMoreData: PropTypes.bool,
  isFetching: PropTypes.bool,
  artistDetailData: PropTypes.object,
  artistDetailPictureList: PropTypes.array,
  addArtistDetailPictureData: PropTypes.func
};

export default ArtistDetailItem;
