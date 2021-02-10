import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import GridGalleryItem from '../artistDetail/GridGalleryItem';
import MasonryLoading from '../loading/MasonryLoading';
import NoMoreLoading from '../loading/NoMoreLoading';
import LoadingError from '../error/LoadingError';

const GridGallery = ({ data, loading, error, isAllLoaded, getArtistDetailPictureData }) => {
  const dispatch = useDispatch();
  const noMoreLoadingCaption = '작가의 모든 작품을 불러왔습니다.';

  return (
    <>
      <div className="grid-gallery">
        {data && data.length > 0
          ? data.map((item, idx) =>
            <GridGalleryItem
              key={idx}
              item={item}
            ></GridGalleryItem>)
          : ''}
      </div>
      {isAllLoaded ? <NoMoreLoading pageIdx={2} caption={noMoreLoadingCaption}></NoMoreLoading> : ''}
      {loading
        ? <MasonryLoading></MasonryLoading>
        : <div className="more">
            <div onClick={loadMoreData}>더보기</div>
          </div>}
      {error ? <LoadingError error={error}></LoadingError> : ''}
    </>
  );

  function loadMoreData () {
    dispatch(getArtistDetailPictureData());
  }
};

GridGallery.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  isAllLoaded: PropTypes.bool,
  getArtistDetailPictureData: PropTypes.func
};

export default GridGallery;
