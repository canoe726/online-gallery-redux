import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getInfoData } from '../saga/infoSaga';

import Info from '../components/info/Info';
import PageLoading from '../components/loading/PageLoading';

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
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;
  if (!backgroundImages) return null;
  return <Info notice={data} backgroundImages={backgroundImages}></Info>;
};

export default InfoContainer;
