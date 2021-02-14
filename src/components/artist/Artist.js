import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';

import '../../stylesheets/artist/artist.scss';
// import { resizeAllMasonryItems } from '../../lib/masonry';

import MasonryItem from './MasonryItem';
import MasonryLoading from '../loading/MasonryLoading';
import NoMoreLoading from '../loading/NoMoreLoading';
import LoadingError from '../error/LoadingError';
// import Masonry from './Masonry';

Artist.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
  getData: PropTypes.func,
  getDataParams: PropTypes.array,
  isAllLoaded: PropTypes.bool,
  getArtistData: PropTypes.func
};

function Artist ({
  data,
  loading,
  error,
  getData,
  getDataParams,
  isAllLoaded,
  getArtistData
}) {
  const dispatch = useDispatch();
  const noMoreLoadingCaption = '모든 작가를 불러왔습니다.';

  useEffect(() => {
    // window.addEventListener('scroll', infinityScroll);
    // window.addEventListener('load', resizeAllMasonryItems);
    // window.addEventListener('resize', resizeAllMasonryItems);

    return () => {
      // window.removeEventListener('scroll', infinityScroll);
      // window.removeEventListener('load', resizeAllMasonryItems);
      // window.removeEventListener('resize', resizeAllMasonryItems);
    };
  }, []);

  return (
    <div className="artist-wrapper">
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
                artistItem={item}
              ></MasonryItem>)}
        </Masonry>
      </div>
      {error && <LoadingError error={error} getData={getData} getDataParams={getDataParams}></LoadingError>}
      {isAllLoaded && <NoMoreLoading pageIdx={1} caption={noMoreLoadingCaption}></NoMoreLoading>}
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
    dispatch(getArtistData(...getDataParams));
  }

  // function infinityScroll () {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;

  //   // 스크롤이 최하단이면서 fetch 중이 아니면서 데이터가 더 있을 때 호출
  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     if (!loading) {
  //       dispatch(getArtistData());
  //     }
  //   }
  // }
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

export default Artist;
