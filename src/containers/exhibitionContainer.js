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

  let isAllLoaded = false;
  isAllLoaded = data ? data.length === 0 : false;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExhibitionData());
  }, [dispatch]);

  if (loading && !data) return <PageLoading></PageLoading>;
  return (
    <Exhibition
      data={data}
      loading={loading}
      error={error}
      isAllLoaded={isAllLoaded}
      getExhibitionData={getExhibitionData}
    ></Exhibition>);
};

export default ExhibitionContainer;
