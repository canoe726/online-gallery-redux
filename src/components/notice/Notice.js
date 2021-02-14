import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

import '../../stylesheets/notice/notice.scss';

import Footer from '../footer/Footer';

const Notice = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="notice-wrapper">
      <p className="title">온라인 갤러리 공지사항</p>
      <div className="collapsible-list">
        {notices.map((notice, idx) =>
          <Accordion key={idx} styled>
            <Accordion.Title
              active={activeIndex === idx}
              index={idx}
              onClick={handleClick}
            >
              <Icon name='dropdown' />
              {notice.title}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === idx}>
              <p>{notice.contents}</p>
            </Accordion.Content>
          </Accordion>)}
      </div>
      <Footer></Footer>
    </div>
  );

  function handleClick (e, titleProps) {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };
};

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

export default Notice;
