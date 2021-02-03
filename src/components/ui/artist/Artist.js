import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/artist/artist.scss';

import MasonryItem from './MasonryItem';
import { resizeAllMasonryItems } from '../../util/masonry';
import { PageLoadingContainer, MasonryLoadingContainer, NoMoreLoadingContainer } from '../../../containers/loadingContainers';

const Artist = ({ artistList, noMoreData, isFetching, initArtistData, addArtistData }) => {
  const masonryRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
    initArtistData();

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
    <div className="artist-wrapper">
      <div className="masonry-wrapper">
        <div className="masonry" ref={masonryRef}>
          {artistList.length > 0
            ? artistList.map((item, idx) =>
              <MasonryItem
                key={idx}
                artistItem={item}
                masonry={masonryRef}
              ></MasonryItem>)
            : <PageLoadingContainer></PageLoadingContainer>}
        </div>
      </div>
      {noMoreData
        ? <NoMoreLoadingContainer
            pageIdx={1}
            caption={'모든 아티스트를 불러 왔습니다.'}
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
        addArtistData();
      }
    }
  }
};

Artist.propTypes = {
  artistList: PropTypes.array,
  noMoreData: PropTypes.bool,
  isFetching: PropTypes.bool,
  initArtistData: PropTypes.func,
  addArtistData: PropTypes.func
};

export default Artist;
