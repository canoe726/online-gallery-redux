import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHomeExhibition } from '../../saga/homeSaga';

import HomeExhibition from '../../components/home/exhibition_card/HomeExhibition';
import ElementLoading from '../../components/loading/ElementLoading';

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

  if (loading && !data) return <ElementLoading></ElementLoading>;
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;
  return (
    <HomeExhibition
      data={data}
    ></HomeExhibition>);
}

export default HomeExhibitionContainer;
