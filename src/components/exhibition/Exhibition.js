import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import '../../stylesheets/exhibition/exhibition.scss';

import MasonryItem from './MasonryItem';
import { resizeAllMasonryItems } from '../../lib/masonry';
// import { PageLoadingContainer, NoMoreLoadingContainer, MasonryLoadingContainer } from '../../../containers/loadingContainers';
import MasonryLoading from '../loading/MasonryLoading';

const Exhibition = ({ data, loading, getExhibitionData }) => {
  const dispatch = useDispatch();
  const masonryRef = useRef();

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
          {data.map((item, idx) =>
            <MasonryItem
              key={idx}
              exhibitionItem={item}
              masonry={masonryRef}
            ></MasonryItem>)}
        </div>
      </div>
      {loading ? <MasonryLoading></MasonryLoading> : ''}
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
  getExhibitionData: PropTypes.func
};

export default Exhibition;
