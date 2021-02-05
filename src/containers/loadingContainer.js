import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PageLoading from '../components/loading/PageLoading';
// import MasonryLoading from '../../components/loading/MasonryLoading';
import ElementLoading from '../components/loading/ElementLoading';
// import NoMoreLoading from '../../components/loading/NoMoreLoading';

export const PageLoadingContainer = () => {
  const { loadingImage } = useSelector(
    state => state.pageLoading.loadingImage
  ) || {
    loadingImage: null
  };

  if (!loadingImage) return null;
  return <PageLoading loadingImage={loadingImage}></PageLoading>;
};

// export const MasonryLoadingContainer = connect(
//   state => ({
//     loadingImage: state.loading.masonryLoading.loadingImage
//   })
// )(MasonryLoading);

export const ElementLoadingContainer = () => {
  console.log('function call');
  const { loadingImage } = useSelector(
    state => state.elementLoading
  ) || {
    loadingImage: null
  };

  const dispatch = useDispatch();
  dispatch();
  console.log(loadingImage);

  if (!loadingImage) return null;
  return <ElementLoading loadingImage={loadingImage}></ElementLoading>;
};

// export const NoMoreLoadingContainer = connect(
//   state => ({
//     exhibitionImage: state.loading.noMoreLoading.exhibitionImage,
//     artistImage: state.loading.noMoreLoading.artistImage,
//     artistDetailImage: state.loading.noMoreLoading.artistDetailImage
//   })
// )(NoMoreLoading);
