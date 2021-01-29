import React from 'react';
import PropTypes from 'prop-types';

import ArtistInfoWrapper from './ArtistInfoWrapper';
import MasonryItem from './MasonryItem';

import { resizeAllMasonryItems } from '../../util/masonry';
import { MasonryLoading, NoMoreLoading } from '../../../containers/loadingContainers';

class ArtistDetailItem extends React.Component {
  constructor (props) {
    super(props);

    this.resizeAllMasonryItems = resizeAllMasonryItems.bind(this);
    this.infinityScroll = this.infinityScroll.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0);

    window.addEventListener('load', this.resizeAllMasonryItems);
    window.addEventListener('resize', this.resizeAllMasonryItems);
    window.addEventListener('scroll', this.heroScrollZoom);
    window.addEventListener('scroll', this.infinityScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('load', this.resizeAllMasonryItems);
    window.removeEventListener('resize', this.resizeAllMasonryItems);
    window.removeEventListener('scroll', this.heroScrollZoom);
    window.removeEventListener('scroll', this.infinityScroll);
  }

  render () {
    const { noMoreData, isFetching, artistDetailData, artistDetailPictureList } = this.props;
    console.log(noMoreData, isFetching, artistDetailPictureList, artistDetailData);
    return (
      <div className="artist-detail-item">
        <div className="thumbnail-wrapper zoom">
          <img className="main-img" src={artistDetailData.artist.profileImage} alt="author-main-img-"></img>
        </div>
        <ArtistInfoWrapper
          artistDetailData={artistDetailData}
        ></ArtistInfoWrapper>
        <div className="masonry-wrapper">
          <div className="masonry">
            {artistDetailPictureList.length > 0
              ? artistDetailPictureList.map((item, idx) =>
                <MasonryItem
                  key={idx}
                  artworkItem={item}
                ></MasonryItem>)
              : ''}
          </div>
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

  infinityScroll () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // 스크롤이 최하단이면서 fetch 중이 아니면서 데이터가 더 있을 때 호출
    if (scrollTop + clientHeight >= scrollHeight) {
      if (!this.props.isFetching && !this.props.noMoreData) {
        this.props.addArtistDetailPictureData();
      }
    }
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
}

ArtistDetailItem.propTypes = {
  noMoreData: PropTypes.bool,
  isFetching: PropTypes.bool,
  artistDetailData: PropTypes.object,
  artistDetailPictureList: PropTypes.array,
  addArtistDetailPictureData: PropTypes.func
};

export default ArtistDetailItem;
