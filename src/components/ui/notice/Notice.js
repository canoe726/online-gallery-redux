import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/notice/notice.scss';

import NoticeItem from './NoticeItem';
import Footer from '../Footer';

const Notice = ({ notices }) => {
  return (
    <div className="notice-wrapper">
      <div className="collapsible-list">
        {notices.length > 0
          ? notices.map((notice, idx) =>
              <NoticeItem
                key={idx}
                notice={notice}
              ></NoticeItem>)
          : '불러오는중...'}
      </div>
      <Footer></Footer>
    </div>
  );
};

Notice.propTypes = {
  notices: PropTypes.array
};

export default Notice;
