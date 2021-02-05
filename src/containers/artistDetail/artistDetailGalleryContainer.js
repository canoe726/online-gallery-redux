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
  console.log(loading, data, error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getArtistDetailPictureData());
  }, [dispatch]);

  if (loading && !data) return <ElementLoading></ElementLoading>;
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;
  return (
    <GridGallery
      data={data}
      loading={loading}
      getArtistDetailPictureData={getArtistDetailPictureData}
    ></GridGallery>);
};

export default ArtistDetailGalleryContainer;
