import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHomeExhibition } from '../../saga/homeSaga';

import HomeExhibition from '../../components/home/exhibition_card/HomeExhibition';
import ElementLoading from '../../components/loading/ElementLoading';
import LoadingError from '../../components/error/LoadingError';

function HomeExhibitionContainer () {
  const { loading, data, error } = useSelector(
    state => state.home.exhibition
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getHomeExhibition());
  }, [dispatch]);

  if (loading && !data) {
    return (
      <div className="now-exhibition-wrapper">
        <div className="title">진행중 전시</div>
        <ElementLoading></ElementLoading>
      </div>);
  }
  if (error) {
    return (
      <div className="now-exhibition-wrapper">
        <div className="title">진행중 전시</div>
        <LoadingError error={error}></LoadingError>
      </div>);
  }
  if (!data) return null;
  return (
    <div className="now-exhibition-wrapper">
      <div className="title">진행중 전시</div>
      <HomeExhibition
        data={data}
      ></HomeExhibition>
    </div>);
}

export default HomeExhibitionContainer;
