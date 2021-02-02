import React from 'react';
import PropTypes from 'prop-types';

import ArtistInfoWrapper from './ArtistInfoWrapper';
import GridGallery from './GridGallery';

import { resizeAllMasonryItems } from '../../util/masonry';
import { MasonryLoading, NoMoreLoading } from '../../../containers/loadingContainers';

class ArtistDetailItem extends React.Component {
  constructor (props) {
    super(props);

    this.resizeAllMasonryItems = resizeAllMasonryItems.bind(this);
    this.loadMoreArtwork = this.loadMoreArtwork.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0);

    window.addEventListener('load', this.resizeAllMasonryItems);
    window.addEventListener('resize', this.resizeAllMasonryItems);
    window.addEventListener('scroll', this.heroScrollZoom);
  }

  componentWillUnmount () {
    window.removeEventListener('load', this.resizeAllMasonryItems);
    window.removeEventListener('resize', this.resizeAllMasonryItems);
    window.removeEventListener('scroll', this.heroScrollZoom);
  }

  render () {
    const { noMoreData, isFetching, artistDetailData, artistDetailPictureList } = this.props;
    return (
      <div className="artist-detail-item">
        <div className="thumbnail-wrapper zoom">
          <img className="main-img" src={artistDetailData.artist.profileImage} alt="author-main-img-"></img>
        </div>
        <ArtistInfoWrapper
          artistDetailData={artistDetailData}
        ></ArtistInfoWrapper>

        <div className="grid-gallery-wrapper">
          <div className="title">작품 둘러보기</div>
          <div className="grid-gallery">
            {artistDetailPictureList.length > 0
              ? artistDetailPictureList.map((item, idx) =>
                <GridGallery
                  key={idx}
                  item={item}
                ></GridGallery>
                )
              : ''}
          </div>
          {noMoreData
            ? ''
            : !isFetching
                ? <div className="more">
                    <div onClick={this.loadMoreArtwork}>더보기</div>
                  </div>
                : ''}
        </div>
        {noMoreData
          ? <NoMoreLoading
              pageIdx={2}
              caption={'작가의 작품을 모두 불러왔습니다.'}
            ></NoMoreLoading>
          : isFetching
            ? <MasonryLoading
                isFetching={isFetching}
              ></MasonryLoading>
            : ''}
      </div>
    );
  }

  heroScrollZoom () {
    const scrollY = window.scrollY;
    const zoomImg = document.querySelector('.zoom img');
    const scaleRatio = (100 + scrollY / 5) / 100;
    if (Math.floor(scaleRatio) > 2) {
      zoomImg.style.opacity = '0';
    } else {
      zoomImg.style.opacity = '1';
      zoomImg.style.transform = `translate3d(-50%, -${scrollY / 50}%, 0) scale(${scaleRatio})`;
    }
  }

  loadMoreArtwork () {
    this.props.addArtistDetailPictureData();
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
