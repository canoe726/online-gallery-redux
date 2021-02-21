import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import '../../stylesheets/exhibition/exhibition.scss';

import masonry from '../../lib/masonry';

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

  useEffect(() => {
    window.addEventListener('resize', masonry);
    return () => {
      window.removeEventListener('resize', masonry);
    };
  }, []);

  return (
    <div className="exhibition-wrapper">
      <div className="masonry-wrapper">
        {(data && data.length > 0) &&
          <div
            className="masonry"
            onLoad={masonry}
          >
            {data.map((item, idx) =>
              <MasonryItem
                key={idx}
                exhibitionItem={item}
              ></MasonryItem>)}
          </div>}
      </div>
      {error && <LoadingError error={error} getData={getData} getDataParams={getDataParams}></LoadingError>}
      {isAllLoaded && <NoMoreLoading pageIdx={0} caption={noMoreLoadingCaption}></NoMoreLoading>}
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

export default Exhibition;
