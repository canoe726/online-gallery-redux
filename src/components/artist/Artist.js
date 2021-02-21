import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import '../../stylesheets/artist/artist.scss';

import masonry from '../../lib/masonry';

import MasonryItem from './MasonryItem';
import MasonryLoading from '../loading/MasonryLoading';
import NoMoreLoading from '../loading/NoMoreLoading';
import LoadingError from '../error/LoadingError';

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
    window.addEventListener('resize', masonry);
    return () => {
      window.removeEventListener('resize', masonry);
    };
  }, []);

  return (
    <div className="artist-wrapper">
      <div className="masonry-wrapper">
        {(data && data.length > 0) &&
          <div
            className="masonry"
            onLoad={masonry}
          >
            {data.map((item, idx) =>
              <MasonryItem
                key={idx}
                artistItem={item}
              ></MasonryItem>)}
          </div>}
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
};

export default Artist;
