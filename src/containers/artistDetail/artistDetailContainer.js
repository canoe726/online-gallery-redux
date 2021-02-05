import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArtistDetailData } from '../../saga/artistDetailSaga';

import ArtistDetail from '../../components/artistDetail/ArtistDetail';
import PageLoading from '../../components/loading/PageLoading';

function ArtistDetailContainer () {
  const { loading, data, error } = useSelector(
    state => state.artistDetail.artistDetailList
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getArtistDetailData());
  }, [dispatch]);

  if (loading && !data) return <PageLoading></PageLoading>;
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;
  return (
    <ArtistDetail
      data={data}
    ></ArtistDetail>);
};

export default ArtistDetailContainer;
