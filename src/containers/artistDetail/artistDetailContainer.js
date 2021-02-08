import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArtistDetailData } from '../../saga/artistDetailSaga';

import ArtistDetail from '../../components/artistDetail/ArtistDetail';
import PageLoading from '../../components/loading/PageLoading';
import LoadingError from '../../components/error/LoadingError';

function ArtistDetailContainer () {
  const paths = window.location.pathname.split('/');
  const id = paths[2];

  const { loading, data, error } = useSelector(
    state => state.artistDetail.artistDetailList
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtistDetailData(id));
  }, [dispatch]);

  if (loading && !data) return <PageLoading></PageLoading>;
  if (error) return <LoadingError error={error}></LoadingError>;
  if (!data) return null;
  return (
    <ArtistDetail
      data={data}
    ></ArtistDetail>);
};

export default ArtistDetailContainer;
