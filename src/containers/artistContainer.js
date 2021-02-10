import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArtistData } from '../saga/artistSaga';

import Artist from '../components/artist/Artist';
import PageLoading from '../components/loading/PageLoading';

function ArtistContainer () {
  const { loading, data, error } = useSelector(
    state => state.artist.artistList
  ) || {
    loading: false,
    data: null,
    error: null
  };

  let isAllLoaded = false;
  isAllLoaded = data ? data.length === 0 : false;

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getArtistData());
  }, [data, dispatch]);

  if (loading && !data) return <PageLoading></PageLoading>;
  return (
    <Artist
      data={data}
      loading={loading}
      error={error}
      getData={getArtistData}
      getDataParams={[]}
      isAllLoaded={isAllLoaded}
      getArtistData={getArtistData}
    ></Artist>);
};

export default ArtistContainer;
