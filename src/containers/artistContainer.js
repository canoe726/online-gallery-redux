import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getArtistData, getArtistSearchData } from '../saga/artistSaga';

import Artist from '../components/artist/Artist';
import PageLoading from '../components/loading/PageLoading';
import MasonryLoading from '../components/loading/MasonryLoading';

ArtistContainer.propTypes = {
  input: PropTypes.string
};

function ArtistContainer ({ input }) {
  if (input) {
    return loadSearchPage(input);
  } else {
    return loadArtistPage();
  }
};

const loadSearchPage = (input) => {
  const { loading, data, error } = useSelector(
    state => state.artist.searchList
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const { isAllLoaded } = useSelector(
    state => state.exhibition
  ) || {
    isAllLoaded: false
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getArtistSearchData(input));
  }, [data, dispatch]);

  if (loading && !data) return <MasonryLoading></MasonryLoading>;
  return (
    <Artist
      data={data}
      loading={loading}
      error={error}
      getData={getArtistSearchData}
      getDataParams={[input]}
      isAllLoaded={isAllLoaded}
      getArtistData={getArtistSearchData}
    ></Artist>);
};

const loadArtistPage = () => {
  const { loading, data, error } = useSelector(
    state => state.artist.artistList
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const { isAllLoaded } = useSelector(
    state => state.exhibition
  ) || {
    isAllLoaded: false
  };

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
