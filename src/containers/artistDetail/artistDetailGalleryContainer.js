import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArtistDetailPictureData } from '../../saga/artistDetailSaga';

import GridGallery from '../../components/artistDetail/GridGallery';
import ElementLoading from '../../components/loading/ElementLoading';

function ArtistDetailGalleryContainer () {
  const { loading, data, error } = useSelector(
    state => state.artistDetail.artistDetailPictureList
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const { isAllLoaded } = useSelector(
    state => state.exhibition
  ) || {
    isAllLoaded: false
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getArtistDetailPictureData());
  }, [dispatch]);

  if (loading && !data) return <ElementLoading></ElementLoading>;
  return (
    <GridGallery
      data={data}
      loading={loading}
      error={error}
      isAllLoaded={isAllLoaded}
      getArtistDetailPictureData={getArtistDetailPictureData}
    ></GridGallery>);
};

export default ArtistDetailGalleryContainer;
