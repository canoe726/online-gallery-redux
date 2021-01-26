import React from 'react';
import PropTypes from 'prop-types';

import ArtistCard from './ArtistCard';

class ArtistIntroduction extends React.Component {
  componentDidMount () {
    this.props.initHomeArtist();
  }

  render () {
    const { artist, artistCardSize, artistCardIdx } = this.props;
    return (
      <div className="artist-introduction-wrapper">
        <div className="title">작가 소개</div>
        <div className="card-wrapper">
          {artist.length > 0
            ? artist.map((item, idx) =>
                (idx < (artistCardSize + artistCardIdx))
                  ? <ArtistCard
                      key={idx}
                      data={item}
                    ></ArtistCard>
                  : null)
            : '불러오는중...'
          }
        </div>
      </div>
    );
  }
}

ArtistIntroduction.propTypes = {
  artist: PropTypes.array,
  artistCardSize: PropTypes.number,
  artistCardIdx: PropTypes.number,
  initHomeArtist: PropTypes.func
};

export default ArtistIntroduction;
