import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHomeBanner, changeHomeBannerIdx } from '../../saga/homeSaga';

import HorizontalBanner from '../../components/home/horizontal_banner/HorizontalBanner';
import ElementLoading from '../../components/loading/ElementLoading';
import LoadingError from '../../components/error/LoadingError';

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

  if (loading && !data) {
    return (
      <div className="horizontal-banner">
        <ElementLoading></ElementLoading>
      </div>);
  }
  if (error) {
    return (
      <div className="horizontal-banner">
        <LoadingError error={error}></LoadingError>
      </div>);
  }
  if (!data) return null;
  return (
    <div className="horizontal-banner">
      <HorizontalBanner
        homeBannerIdx={homeBannerIdx}
        changeHomeBannerIdx={changeHomeBannerIdx}
        data={data}
      ></HorizontalBanner>
    </div>);
}

export default HomeBannerContainer;
