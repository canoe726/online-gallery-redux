import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getInfoData } from '../saga/infoSaga';

import Info from '../components/info/Info';
import PageLoading from '../components/loading/PageLoading';
import LoadingError from '../components/error/LoadingError';

function InfoContainer () {
  const { backgroundImages } = useSelector(
    state => state.info
  ) || {
    backgroundImages: []
  };

  const { loading, data, error } = useSelector(
    state => state.info.notice
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getInfoData());
  }, [dispatch]);

  if (loading && !data) return <PageLoading></PageLoading>;
  if (error) return <LoadingError error={error}></LoadingError>;
  if (!data) return null;
  if (!backgroundImages) return null;
  return <Info notice={data} backgroundImages={backgroundImages}></Info>;
};

export default InfoContainer;
