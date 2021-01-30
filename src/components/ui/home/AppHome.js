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
      exhibitionCardIdx,
      artist,
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
          exhibitionCardIdx={exhibitionCardIdx}
          initHomeExhibition={initHomeExhibition}
        ></NowExhibition>
        <ArtistIntroduction
          artist={artist}
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
  exhibitionCardIdx: PropTypes.number,
  artist: PropTypes.array,
  artistCardIdx: PropTypes.number,
  initHomeBanner: PropTypes.func,
  initHomeExhibition: PropTypes.func,
  initHomeArtist: PropTypes.func,
  changeHomeBannerIdx: PropTypes.func
};

export default AppHome;
