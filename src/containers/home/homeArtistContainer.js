import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHomeArtist } from '../../saga/homeSaga';

import HomeArtist from '../../components/home/artist_card/HomeArtist';
import Footer from '../../components/footer/Footer';
import ElementLoading from '../../components/loading/ElementLoading';

function HomeArtistContainer () {
  const { loading, data, error } = useSelector(
    state => state.home.artist
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getHomeArtist());
  }, [dispatch]);

  if (loading && !data) return <ElementLoading></ElementLoading>;
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;
  return (
    <>
      <HomeArtist
        data={data}
      ></HomeArtist>
      <Footer></Footer>
    </>);
}

export default HomeArtistContainer;
