import { connect } from 'react-redux';

import AppMasonryLoading from '../components/ui/loading/AppMasonryLoading';

import { toggleMasonryLoading } from '../actions/loadingActions';

export const MasonryLoading = connect(
  state => ({
    isLoading: state.loading.masonryLoading.isLoading,
    loadingImage: state.loading.masonryLoading.loadingImage
  }),
  dispatch => ({
    toggleMasonryLoading (isLoading) {
      dispatch(toggleMasonryLoading(isLoading));
    }
  })
)(AppMasonryLoading);
