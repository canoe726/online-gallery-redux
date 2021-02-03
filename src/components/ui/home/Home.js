import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/home/home.scss';

import HorizontalBanner from './horizontal_banner/HorizontalBanner';
import NowExhibition from './exhibition_card/NowExhibition';
import ArtistIntroduction from './artist_card/ArtistIntroduction';
import Footer from '../Footer';

const Home = ({
  banner,
  bannerIdx,
  exhibition,
  artist,
  initHomeBanner,
  initHomeExhibition,
  initHomeArtist,
  changeHomeBannerIdx
}) => {
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
        initHomeExhibition={initHomeExhibition}
      ></NowExhibition>
      <ArtistIntroduction
        artist={artist}
        initHomeArtist={initHomeArtist}
      ></ArtistIntroduction>
      <Footer></Footer>
    </div>
  );
};

Home.propTypes = {
  banner: PropTypes.array,
  bannerIdx: PropTypes.number,
  exhibition: PropTypes.array,
  artist: PropTypes.array,
  initHomeBanner: PropTypes.func,
  initHomeExhibition: PropTypes.func,
  initHomeArtist: PropTypes.func,
  changeHomeBannerIdx: PropTypes.func
};

export default Home;
