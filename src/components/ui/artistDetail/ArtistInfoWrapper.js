import React from 'react';
import PropTypes from 'prop-types';

class ArtistInfoWrapper extends React.Component {
  render () {
    const { artistDetailData } = this.props;
    return (
      <div className="info-wrapper">
        <section className="artist">
          <div className="intro">소개</div>
          <div className="name">{artistDetailData.artist.name}</div>
          <div className="nickname">{artistDetailData.artist.nickname}</div>
          <div className="introduction">{artistDetailData.artist.introduction}</div>
          <div className="note">{artistDetailData.artist.note}</div>
        </section>
        <section className="artist-group">
          <div className="intro">그룹</div>
          <div className="name">{artistDetailData.artistGroups.name}</div>
          <div className="startAt">{artistDetailData.artistGroups.startAt}</div>
          <div className="endAt">{artistDetailData.artistGroups.endAt}</div>
          <div className="position">{artistDetailData.artistGroups.position}</div>
        </section>
        <section className="artist-careers">
          <div className="intro">커리어</div>
          <div className="title">{artistDetailData.artistCareers.title}</div>
          <div className="type">{artistDetailData.artistCareers.type}</div>
          <div className="address">{artistDetailData.artistCareers.address}</div>
          <div className="date">{artistDetailData.artistCareers.date}</div>
        </section>
        <section className="artist-educations">
          <div className="intro">교육</div>
          <div className="type">{artistDetailData.artistEducations.type}</div>
          <div className="name">{artistDetailData.artistEducations.name}</div>
          <div className="entranceAt">{artistDetailData.artistEducations.entranceAt}</div>
          <div className="graduationAt">{artistDetailData.artistEducations.graduationAt}</div>
          <div className="degree">{artistDetailData.artistEducations.degree}</div>
          <div className="state">{artistDetailData.artistEducations.state}</div>
        </section>
        <section className="artist-prizes">
          <div className="intro">수상</div>
          <div className="title">{artistDetailData.artistPrizes.title}</div>
          <div className="date">{artistDetailData.artistPrizes.date}</div>
          <div className="organization">{artistDetailData.artistPrizes.organization}</div>
        </section>
      </div>
    );
  }
}

ArtistInfoWrapper.propTypes = {
  artistDetailData: PropTypes.object
};

export default ArtistInfoWrapper;
