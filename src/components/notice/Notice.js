import React from 'react';

import '../../stylesheets/notice/notice.scss';

import NoticeItem from './NoticeItem';
import Footer from '../footer/Footer';

const Notice = () => {
  const notices = [
    {
      title: '공지사항 1',
      contents: '공지사항 1 입니다.'
    },
    {
      title: '공지사항 2',
      contents: '공지사항 2 입니다.'
    },
    {
      title: '공지사항 3',
      contents: '공지사항 3 입니다.'
    },
    {
      title: '공지사항 4',
      contents: '공지사항 4 입니다.'
    }
  ];
  return (
    <div className="notice-wrapper">
      <div className="collapsible-list">
        {notices.map((notice, idx) =>
          <NoticeItem
            key={idx}
            notice={notice}
          ></NoticeItem>)}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Notice;
