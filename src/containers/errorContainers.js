import { connect } from 'react-redux';

import Error from '../components/ui/error/Error';

export const ErrorContainer = connect(
  state => ({
    backgroundImage: state.error.backgroundImage
  })
)(Error);
