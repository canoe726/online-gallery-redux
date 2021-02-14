import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExhibitionData, getExhibitionSearchData } from '../saga/exhibitionSaga';

import Exhibition from '../components/exhibition/Exhibition';
import PageLoading from '../components/loading/PageLoading';
import MasonryLoading from '../components/loading/MasonryLoading';

function ExhibitionContainer ({ input }) {
  if (input) {
    return loadSearchPage(input);
  } else {
    return loadExhibitionPage();
  }
};

function loadSearchPage (input) {
  const { loading, data, error, isAllLoaded } = useSelector(
    state => state.exhibition.searchList[input]
  ) || {
    loading: false,
    data: null,
    error: null,
    isAllLoaded: false
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getExhibitionSearchData(input));
  }, [data, dispatch]);

  if (loading && !data) return <MasonryLoading></MasonryLoading>;
  return (
    <Exhibition
      data={data}
      loading={loading}
      error={error}
      getData={getExhibitionSearchData}
      getDataParams={[input]}
      isAllLoaded={isAllLoaded}
      getExhibitionData={getExhibitionSearchData}
    ></Exhibition>);
}

function loadExhibitionPage () {
  const { loading, data, error, isAllLoaded } = useSelector(
    state => state.exhibition.exhibitionList
  ) || {
    loading: false,
    data: null,
    error: null,
    isAllLoaded: false
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getExhibitionData());
  }, [data, dispatch]);

  if (loading && !data) return <PageLoading></PageLoading>;
  return (
    <Exhibition
      data={data}
      loading={loading}
      error={error}
      getData={getExhibitionData}
      getDataParams={[]}
      isAllLoaded={isAllLoaded}
      getExhibitionData={getExhibitionData}
    ></Exhibition>);
}

export default ExhibitionContainer;
