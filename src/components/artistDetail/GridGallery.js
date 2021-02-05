import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import GridGalleryItem from '../artistDetail/GridGalleryItem';
import MasonryLoading from '../../components/loading/MasonryLoading';

const GridGallery = ({ data, loading, getArtistDetailPictureData }) => {
  const dispatch = useDispatch();

  console.log(data);

  return (
    <>
      <div className="grid-gallery">
        {data.map((item, idx) =>
          <GridGalleryItem
            key={idx}
            item={item}
          ></GridGalleryItem>)}
      </div>
      {loading
        ? <MasonryLoading></MasonryLoading>
        : <div className="more">
            <div onClick={loadMoreArtwork}>더보기</div>
          </div>}
    </>
  );

  function loadMoreArtwork () {
    dispatch(getArtistDetailPictureData());
  }
};

GridGallery.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  getArtistDetailPictureData: PropTypes.func
};

export default GridGallery;
