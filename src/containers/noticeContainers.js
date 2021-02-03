import { connect } from 'react-redux';

import Notice from '../components/ui/notice/Notice';

export const NoticeContainer = connect(
  state => ({
    notices: state.notice.notices
  })
)(Notice);
