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

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getArtistData());
  }, [dispatch]);

  if (loading && !data) return <PageLoading></PageLoading>;
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;
  return <Artist data={data} loading={loading} getArtistData={getArtistData}></Artist>;
};

export default ArtistContainer;
