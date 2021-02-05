import React from 'react';

import '../../stylesheets/home/home.scss';

import HomeBannerContainer from '../../containers/home/homeBannerContainer';
import HomeExhibitionContainer from '../../containers/home/homeExhibitionContainer';
import HomeArtistContainer from '../../containers/home/homeArtistContainer';

const Home = () => {
  return (
    <div className="home">
      <HomeBannerContainer></HomeBannerContainer>
      <HomeExhibitionContainer></HomeExhibitionContainer>
      <HomeArtistContainer></HomeArtistContainer>
    </div>
  );
};

export default Home;
