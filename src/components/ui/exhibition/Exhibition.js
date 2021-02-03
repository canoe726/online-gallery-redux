import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/exhibition/exhibition.scss';

import MasonryItem from './MasonryItem';
import { resizeAllMasonryItems } from '../../util/masonry';
import { PageLoadingContainer, NoMoreLoadingContainer, MasonryLoadingContainer } from '../../../containers/loadingContainers';

const Exhibition = ({ exhibitionList, noMoreData, isFetching, initExhibitionData, addExhibitionData }) => {
  const masonryRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    initExhibitionData();

    window.addEventListener('load', resizeAllMasonryItems);
    window.addEventListener('resize', resizeAllMasonryItems);
    window.addEventListener('scroll', infinityScroll);

    return () => {
      window.removeEventListener('load', resizeAllMasonryItems);
      window.removeEventListener('resize', resizeAllMasonryItems);
      window.removeEventListener('scroll', infinityScroll);
    };
  }, []);

  return (
    <div className="exhibition-wrapper">
      <div className="masonry-wrapper">
        <div className="masonry" ref={masonryRef}>
          {(exhibitionList.length > 0 && exhibitionList[0] !== undefined)
            ? exhibitionList.map((item, idx) =>
              <MasonryItem
                key={idx}
                exhibitionItem={item}
                masonry={masonryRef}
              ></MasonryItem>)
            : <PageLoadingContainer></PageLoadingContainer>
          }
        </div>
      </div>
      {noMoreData
        ? <NoMoreLoadingContainer
            pageIdx={0}
            caption={'데이터를 모두 불러 왔습니다.'}
          ></NoMoreLoadingContainer>
        : isFetching
          ? <MasonryLoadingContainer
              isFetching={isFetching}
            ></MasonryLoadingContainer>
          : ''}
    </div>
  );

  function infinityScroll () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // 스크롤이 최하단이면서 fetch 중이 아니면서 데이터가 더 있을 때 호출
    if (scrollTop + clientHeight >= scrollHeight) {
      if (!isFetching && !noMoreData) {
        addExhibitionData();
      }
    }
  }
};

Exhibition.propTypes = {
  exhibitionList: PropTypes.array,
  noMoreData: PropTypes.bool,
  isFetching: PropTypes.bool,
  initExhibitionData: PropTypes.func,
  addExhibitionData: PropTypes.func
};

export default Exhibition;
