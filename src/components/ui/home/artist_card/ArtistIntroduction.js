import React from 'react';
import PropTypes from 'prop-types';

import ArtistCard from './ArtistCard';
import { ElementLoading } from '../../../../containers/loadingContainers';

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
                      artistCardSize={artistCardSize}
                      data={item}
                    ></ArtistCard>
                  : null)
            : <ElementLoading></ElementLoading>
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
