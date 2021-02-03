import React from 'react';
import PropTypes from 'prop-types';

const ArtistInfoWrapper = ({ artistDetailData }) => {
  return (
    <div className="container">
      <div className="item">
        <div id="timeline">
          <div className="section-line">
            <section className="section-wrapper">
              <div className="section-header">작가 소개</div>
              <section className="secton-item-wrapper">
                <ul className="secton-item">
                  <li>{artistDetailData.artist.name}</li>
                  <li>활동 이름 : {artistDetailData.artist.nickname}</li>
                  <li>소개 : {artistDetailData.artist.introduction}</li>
                  <li>작가 노트 : {artistDetailData.artist.note}</li>
                </ul>
              </section>
            </section>
            <section className="section-wrapper">
              <div className="section-header">소속 그룹</div>
              {artistDetailData.artistGroups.length > 0
                ? artistDetailData.artistGroups.map((item, idx) =>
                    <SectionGroup
                      key={idx}
                      item={item}
                    ></SectionGroup>)
                : ''}
            </section>
            <section className="section-wrapper">
              <div className="section-header">커리어</div>
              {artistDetailData.artistCareers.length > 0
                ? artistDetailData.artistCareers.map((item, idx) =>
                    <SectionCareer
                      key={idx}
                      item={item}
                    ></SectionCareer>)
                : ''}
            </section>
            <section className="section-wrapper">
              <div className="section-header">교육</div>
              {artistDetailData.artistEducations.length > 0
                ? artistDetailData.artistEducations.map((item, idx) =>
                    <SectionEducation
                      key={idx}
                      item={item}
                    ></SectionEducation>)
                : ''}
            </section>
            <section className="section-wrapper">
              <div className="section-header">수상</div>
              {artistDetailData.artistPrizes.length > 0
                ? artistDetailData.artistPrizes.map((item, idx) =>
                    <SectionPrize
                      key={idx}
                      item={item}
                    ></SectionPrize>)
                : ''}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionGroup = ({ item }) => {
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

const SectionCareer = ({ item }) => {
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

const SectionEducation = ({ item }) => {
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

const SectionPrize = ({ item }) => {
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

ArtistInfoWrapper.propTypes = {
  artistDetailData: PropTypes.object
};

SectionGroup.propTypes = {
  item: PropTypes.object
};

SectionCareer.propTypes = {
  item: PropTypes.object
};

SectionEducation.propTypes = {
  item: PropTypes.object
};

SectionPrize.propTypes = {
  item: PropTypes.object
};

export default ArtistInfoWrapper;
