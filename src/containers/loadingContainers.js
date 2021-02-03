import { connect } from 'react-redux';

import PageLoading from '../components/ui/loading/PageLoading';
import MasonryLoading from '../components/ui/loading/MasonryLoading';
import ElementLoading from '../components/ui/loading/ElementLoading';
import NoMoreLoading from '../components/ui/loading/NoMoreLoading';

export const PageLoadingContainer = connect(
  state => ({
    loadingImage: state.loading.pageLoading.loadingImage
  })
)(PageLoading);

export const MasonryLoadingContainer = connect(
  state => ({
    loadingImage: state.loading.masonryLoading.loadingImage
  })
)(MasonryLoading);

export const ElementLoadingContainer = connect(
  state => ({
    loadingImage: state.loading.elementLoading.loadingImage
  })
)(ElementLoading);

export const NoMoreLoadingContainer = connect(
  state => ({
    exhibitionImage: state.loading.noMoreLoading.exhibitionImage,
    artistImage: state.loading.noMoreLoading.artistImage,
    artistDetailImage: state.loading.noMoreLoading.artistDetailImage
  })
)(NoMoreLoading);
