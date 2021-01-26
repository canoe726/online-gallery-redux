import { connect } from 'react-redux';

import AppNotice from '../components/ui/notice/AppNotice';

export const Notice = connect(
  state => ({
    notices: state.notice.notices
  })
)(AppNotice);
