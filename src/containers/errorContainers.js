import { connect } from 'react-redux';

import AppError from '../components/ui/error/AppError';

export const Error = connect(
  state => ({
    backgroundImage: state.error.backgroundImage
  })
)(AppError);
