import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHomeArtist } from '../../saga/homeSaga';

import HomeArtist from '../../components/home/artist_card/HomeArtist';
import Footer from '../../components/footer/Footer';
import ElementLoading from '../../components/loading/ElementLoading';
import LoadingError from '../../components/error/LoadingError';

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

  if (loading && !data) {
    return (
      <div className="artist-introduction-wrapper">
        <div className="title">작가 소개</div>
        <ElementLoading></ElementLoading>
      </div>);
  }
  if (error) {
    return (
      <div className="artist-introduction-wrapper">
        <div className="title">작가 소개</div>
        <LoadingError error={error}></LoadingError>
        <Footer></Footer>
      </div>);
  }
  if (!data) return null;
  return (
    <div className="artist-introduction-wrapper">
      <div className="title">작가 소개</div>
      <HomeArtist
        data={data}
      ></HomeArtist>
      <Footer></Footer>
    </div>);
}

export default HomeArtistContainer;
