import React from 'react';
import PropTypes from 'prop-types';

ArtistInfoWrapper.propTypes = {
  data: PropTypes.object
};

function ArtistInfoWrapper ({ data }) {
  return (
    <div className="container">
      <div className="item">
        <div id="timeline">
          <div className="section-line">
            <section className="section-wrapper">
              <div className="section-header">소속 그룹</div>
              {data.artistGroups.map((item, idx) =>
                <SectionGroup
                  key={idx}
                  item={item}
                ></SectionGroup>)}
            </section>
            <section className="section-wrapper">
              <div className="section-header">커리어</div>
              {data.artistCareers.map((item, idx) =>
                <SectionCareer
                  key={idx}
                  item={item}
                ></SectionCareer>)}
            </section>
            <section className="section-wrapper">
              <div className="section-header">교육</div>
              {data.artistEducations.map((item, idx) =>
                <SectionEducation
                  key={idx}
                  item={item}
                ></SectionEducation>)}
            </section>
            <section className="section-wrapper">
              <div className="section-header">수상</div>
              {data.artistPrizes.map((item, idx) =>
                <SectionPrize
                  key={idx}
                  item={item}
                ></SectionPrize>)}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionGroup.propTypes = {
  item: PropTypes.object
};

function SectionGroup ({ item }) {
  return (
    <section className="secton-item-wrapper">
      <ul className="secton-item">
        <li>{item.name}</li>
        <li>활동기간 : {`${item.startAt} ~ ${item.endAt}`}</li>
        <li>직책 : {item.position}</li>
      </ul>
    </section>
  );
};

SectionCareer.propTypes = {
  item: PropTypes.object
};

function SectionCareer ({ item }) {
  return (
    <section className="secton-item-wrapper">
      <ul className="secton-item">
        <li>{item.title}</li>
        <li>전시 유형 : {item.type}</li>
        <li>주소 : {item.type === '오프라인' ? item.address : <a href={item.address} target="_blank" rel="noopener noreferrer">{item.address}</a>}</li>
        <li>날짜 : {item.date}</li>
      </ul>
    </section>
  );
};

SectionEducation.propTypes = {
  item: PropTypes.object
};

function SectionEducation ({ item }) {
  return (
    <section className="secton-item-wrapper">
      <ul className="secton-item">
        <li>{item.type}</li>
        <li>{item.name}</li>
        <li>교육 기간 : {`${item.entranceAt}년 ~ ${item.graduationAt}년`}</li>
        <li>학위 : {item.degree}</li>
        <li>{item.state}</li>
      </ul>
    </section>
  );
};

SectionPrize.propTypes = {
  item: PropTypes.object
};

function SectionPrize ({ item }) {
  return (
    <section className="secton-item-wrapper">
      <ul className="secton-item">
        <li>{item.title}</li>
        <li>수상일 : {item.date}</li>
        <li>기관 : {item.organization}</li>
      </ul>
    </section>
  );
};

export default ArtistInfoWrapper;
