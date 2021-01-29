import { connect } from 'react-redux';

import AppPageLoading from '../components/ui/loading/AppPageLoading';
import AppMasonryLoading from '../components/ui/loading/AppMasonryLoading';
import AppElementLoading from '../components/ui/loading/AppElementLoading';
import AppNoMoreLoading from '../components/ui/loading/AppNoMoreLoading';

export const PageLoading = connect(
  state => ({
    loadingImage: state.loading.pageLoading.loadingImage
  })
)(AppPageLoading);

export const MasonryLoading = connect(
  state => ({
    loadingImage: state.loading.masonryLoading.loadingImage
  })
)(AppMasonryLoading);

export const ElementLoading = connect(
  state => ({
    loadingImage: state.loading.elementLoading.loadingImage
  })
)(AppElementLoading);

export const NoMoreLoading = connect(
  state => ({
    exhibitionImage: state.loading.noMoreLoading.exhibitionImage,
    artistImage: state.loading.noMoreLoading.artistImage,
    artistDetailImage: state.loading.noMoreLoading.artistDetailImage
  })
)(AppNoMoreLoading);
