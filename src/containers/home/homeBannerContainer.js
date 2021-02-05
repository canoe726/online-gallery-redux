import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHomeBanner, changeHomeBannerIdx } from '../../saga/homeSaga';

import HorizontalBanner from '../../components/home/horizontal_banner/HorizontalBanner';
import ElementLoading from '../../components/loading/ElementLoading';

function HomeBannerContainer () {
  const { homeBannerIdx } = useSelector(
    state => state.home.homeBanner
  );

  const { loading, data, error } = useSelector(
    state => state.home.homeBanner.homeBanner
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getHomeBanner());
  }, [dispatch]);

  if (loading && !data) return <ElementLoading></ElementLoading>;
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;
  return (
    <HorizontalBanner
      homeBannerIdx={homeBannerIdx}
      changeHomeBannerIdx={changeHomeBannerIdx}
      data={data}
    ></HorizontalBanner>);
}

export default HomeBannerContainer;
