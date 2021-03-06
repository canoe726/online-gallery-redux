import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getArtistDetailData } from '../../saga/artistDetailSaga';

import ArtistDetail from '../../components/artistDetail/ArtistDetail';
import PageLoading from '../../components/loading/PageLoading';
import LoadingError from '../../components/error/LoadingError';

ArtistDetailContainer.propTypes = {
  id: PropTypes.string
};

function ArtistDetailContainer ({ id }) {
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

  if (loading) return <PageLoading></PageLoading>;
  if (error) return <LoadingError error={error} getData={getArtistDetailData} getDataParams={[id]}></LoadingError>;
  if (!data) return null;
  return (
    <ArtistDetail
      data={data}
    ></ArtistDetail>);
};

export default ArtistDetailContainer;
