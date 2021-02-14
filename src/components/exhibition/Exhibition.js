import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';

import '../../stylesheets/exhibition/exhibition.scss';

import MasonryItem from './MasonryItem';
import MasonryLoading from '../loading/MasonryLoading';
import NoMoreLoading from '../loading/NoMoreLoading';
import LoadingError from '../error/LoadingError';

Exhibition.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  getData: PropTypes.func,
  getDataParams: PropTypes.array,
  isAllLoaded: PropTypes.bool,
  getExhibitionData: PropTypes.func
};

function Exhibition ({
  data,
  loading,
  error,
  getData,
  getDataParams,
  isAllLoaded,
  getExhibitionData
}) {
  const dispatch = useDispatch();
  const noMoreLoadingCaption = '모든 작품을 불러왔습니다.';

  return (
    <div className="exhibition-wrapper">
      <div className="masonry-wrapper">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {(data && data.length > 0) &&
            data.map((item, idx) =>
              <MasonryItem
                key={idx}
                exhibitionItem={item}
              ></MasonryItem>)}
        </Masonry>
      </div>
      {isAllLoaded && <NoMoreLoading pageIdx={0} caption={noMoreLoadingCaption}></NoMoreLoading>}
      {error && <LoadingError error={error} getData={getData} getDataParams={getDataParams}></LoadingError>}
      {isAllLoaded || error
        ? ''
        : loading
          ? <MasonryLoading></MasonryLoading>
          : <div className="more">
              <div onClick={loadMoreData}>더보기</div>
            </div>}
    </div>
  );

  function loadMoreData () {
    dispatch(getExhibitionData(...getDataParams));
  }
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

export default Exhibition;
