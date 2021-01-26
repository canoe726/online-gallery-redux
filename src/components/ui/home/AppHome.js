import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/home/AppHome.scss';

import HorizontalBanner from './horizontal_banner/HorizontalBanner';
import NowExhibition from './exhibition_card/NowExhibition';
import ArtistIntroduction from './artist_card/ArtistIntroduction';
import Footer from '../Footer';

class AppHome extends React.Component {
  render () {
    const {
      banner,
      bannerIdx,
      exhibition,
      exhibitionCardSize,
      exhibitionCardIdx,
      artist,
      artistCardSize,
      artistCardIdx,
      initHomeBanner,
      initHomeExhibition,
      initHomeArtist,
      changeHomeBannerIdx
    } = this.props;
    return (
      <div className="home">
        <HorizontalBanner
          banner={banner}
          bannerIdx={bannerIdx}
          initHomeBanner={initHomeBanner}
          changeHomeBannerIdx={changeHomeBannerIdx}
        ></HorizontalBanner>
        <NowExhibition
          exhibition={exhibition}
          exhibitionCardSize={exhibitionCardSize}
          exhibitionCardIdx={exhibitionCardIdx}
          initHomeExhibition={initHomeExhibition}
        ></NowExhibition>
        <ArtistIntroduction
          artist={artist}
          artistCardSize={artistCardSize}
          artistCardIdx={artistCardIdx}
          initHomeArtist={initHomeArtist}
        ></ArtistIntroduction>
        <Footer></Footer>
      </div>
    );
  }
}

AppHome.propTypes = {
  banner: PropTypes.array,
  bannerIdx: PropTypes.number,
  exhibition: PropTypes.array,
  exhibitionCardSize: PropTypes.number,
  exhibitionCardIdx: PropTypes.number,
  artist: PropTypes.array,
  artistCardSize: PropTypes.number,
  artistCardIdx: PropTypes.number,
  initHomeBanner: PropTypes.func,
  initHomeExhibition: PropTypes.func,
  initHomeArtist: PropTypes.func,
  changeHomeBannerIdx: PropTypes.func
};

export default AppHome;
