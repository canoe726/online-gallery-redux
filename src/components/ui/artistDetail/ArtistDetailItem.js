import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import ArtistInfoWrapper from './ArtistInfoWrapper';
import GridGallery from './GridGallery';

import { resizeAllMasonryItems } from '../../util/masonry';
import { MasonryLoadingContainer, NoMoreLoadingContainer } from '../../../containers/loadingContainers';

const ArtistDetailItem = ({
  noMoreData,
  isFetching,
  artistDetailData,
  artistDetailPictureList,
  addArtistDetailPictureData
}) => {
  const zoomImgRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener('load', resizeAllMasonryItems);
    window.addEventListener('resize', resizeAllMasonryItems);
    window.addEventListener('scroll', heroScrollZoom);

    return () => {
      window.removeEventListener('load', resizeAllMasonryItems);
      window.removeEventListener('resize', resizeAllMasonryItems);
      window.removeEventListener('scroll', heroScrollZoom);
    };
  }, []);

  return (
    <div className="artist-detail-item">
      <div className="thumbnail-wrapper zoom">
        <img
          className="main-img"
          src={artistDetailData.artist.profileImage}
          alt="author-main-img-"
          ref={zoomImgRef}
        ></img>
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
                  <div onClick={loadMoreArtwork}>더보기</div>
                </div>
              : ''}
      </div>
      {noMoreData
        ? <NoMoreLoadingContainer
            pageIdx={2}
            caption={'작가의 작품을 모두 불러왔습니다.'}
          ></NoMoreLoadingContainer>
        : isFetching
          ? <MasonryLoadingContainer
              isFetching={isFetching}
            ></MasonryLoadingContainer>
          : ''}
    </div>
  );

  function heroScrollZoom () {
    const scrollY = window.scrollY;
    const zoomImg = zoomImgRef.current;
    const scaleRatio = (100 + scrollY / 5) / 100;
    if (Math.floor(scaleRatio) > 2) {
      zoomImg.style.opacity = '0';
    } else {
      zoomImg.style.opacity = '1';
      zoomImg.style.transform = `translate3d(-50%, -${scrollY / 50}%, 0) scale(${scaleRatio})`;
    }
  }

  function loadMoreArtwork () {
    addArtistDetailPictureData();
  }
};

ArtistDetailItem.propTypes = {
  noMoreData: PropTypes.bool,
  isFetching: PropTypes.bool,
  artistDetailData: PropTypes.object,
  artistDetailPictureList: PropTypes.array,
  addArtistDetailPictureData: PropTypes.func
};

export default ArtistDetailItem;
