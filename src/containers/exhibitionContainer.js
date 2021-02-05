import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExhibitionData } from '../saga/exhibitionSaga';

import Exhibition from '../components/exhibition/Exhibition';
import PageLoading from '../components/loading/PageLoading';

function ExhibitionContainer () {
  const { loading, data, error } = useSelector(
    state => state.exhibition.exhibitionList
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getExhibitionData());
  }, [dispatch]);

  if (loading && !data) return <PageLoading></PageLoading>;
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;
  return <Exhibition data={data} loading={loading} getExhibitionData={getExhibitionData}></Exhibition>;
};

export default ExhibitionContainer;
