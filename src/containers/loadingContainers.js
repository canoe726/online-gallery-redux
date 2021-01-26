import { connect } from 'react-redux';

import AppMasonryLoading from '../components/ui/loading/AppMasonryLoading';

export const MasonryLoading = connect(
  state => ({
    loadingImage: state.loading.masonryLoading.loadingImage
  })
)(AppMasonryLoading);
