import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import '../../stylesheets/exhibition/exhibition.scss';

import MasonryItem from './MasonryItem';
import { resizeAllMasonryItems } from '../../lib/masonry';
import MasonryLoading from '../loading/MasonryLoading';
import NoMoreLoading from '../loading/NoMoreLoading';
import LoadingError from '../error/LoadingError';

const Exhibition = ({ data, loading, error, getData, getDataParams, isAllLoaded, getExhibitionData }) => {
  const dispatch = useDispatch();
  const masonryRef = useRef();
  const noMoreLoadingCaption = '모든 작품을 불러왔습니다.';

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener('load', resizeAllMasonryItems);
    window.addEventListener('resize', resizeAllMasonryItems);

    return () => {
      window.removeEventListener('load', resizeAllMasonryItems);
      window.removeEventListener('resize', resizeAllMasonryItems);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', infinityScroll);

    return () => {
      window.removeEventListener('scroll', infinityScroll);
    };
  }, [infinityScroll]);

  return (
    <div className="exhibition-wrapper">
      <div className="masonry-wrapper">
        <div className="masonry" ref={masonryRef}>
          {data && data.length > 0
            ? data.map((item, idx) =>
              <MasonryItem
                key={idx}
                exhibitionItem={item}
                masonry={masonryRef}
              ></MasonryItem>)
            : ''}
        </div>
      </div>
      {isAllLoaded ? <NoMoreLoading pageIdx={0} caption={noMoreLoadingCaption}></NoMoreLoading> : ''}
      {loading ? <MasonryLoading></MasonryLoading> : ''}
      {error ? <LoadingError error={error} getData={getData} getDataParams={getDataParams}></LoadingError> : ''}
    </div>
  );

  function infinityScroll () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // 스크롤이 최하단이면서 fetch 중이 아니면서 데이터가 더 있을 때 호출
    if (scrollTop + clientHeight >= scrollHeight) {
      if (!loading) {
        dispatch(getExhibitionData());
      }
    }
  }
};

Exhibition.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  getData: PropTypes.func,
  getDataParams: PropTypes.array,
  isAllLoaded: PropTypes.bool,
  getExhibitionData: PropTypes.func
};

export default Exhibition;