import React from 'react';
import PropTypes from 'prop-types';

import ArtistCard from './ArtistCard';
import { ElementLoading } from '../../../../containers/loadingContainers';

class ArtistIntroduction extends React.Component {
  componentDidMount () {
    this.props.initHomeArtist();
  }

  render () {
    const { artist } = this.props;
    return (
      <div className="artist-introduction-wrapper">
        <div className="title">작가 소개</div>
        <div className="card-wrapper">
          {artist.length > 0
            ? artist.map((item, idx) =>
              <ArtistCard
                key={idx}
                data={item}
              ></ArtistCard>)
            : <ElementLoading></ElementLoading>
          }
        </div>
        <div className="prev hidden" onClick={() => this.scrollHorizontal(false)}>&#10094;</div>
        <div className="next" onClick={() => this.scrollHorizontal(true)}>&#10095;</div>
      </div>
    );
  }

  scrollHorizontal (isRight) {
    const cardWrapper = document.querySelector('.artist-introduction-wrapper .card-wrapper');
    const cardItem = document.querySelector('.artist-introduction-wrapper .card-wrapper .card-item');
    const scrollWidth = cardWrapper.scrollWidth - cardWrapper.clientWidth;
    const cardItemWidth = cardItem.clientWidth * 2;

    let afterPos = cardWrapper.scrollLeft;
    if (isRight) {
      afterPos += cardItemWidth;
      if (afterPos >= scrollWidth) afterPos = scrollWidth;

      cardWrapper.scrollLeft = afterPos;
    } else {
      afterPos -= cardItemWidth;
      if (afterPos < 0) afterPos = 0;

      cardWrapper.scrollLeft = afterPos;
    }

    if (afterPos === 0) {
      this.toggleSlideBtn(true, 'prev');
    } else {
      this.toggleSlideBtn(false, 'prev');
    }

    if (afterPos === scrollWidth) {
      this.toggleSlideBtn(true, 'next');
    } else {
      this.toggleSlideBtn(false, 'next');
    }
  }

  toggleSlideBtn (activeHide, dir) {
    const prev = document.querySelector('.artist-introduction-wrapper .prev');
    const next = document.querySelector('.artist-introduction-wrapper .next');
    if (activeHide) {
      if (dir === 'prev') {
        prev.classList.add('hidden');
      } else {
        next.classList.add('hidden');
      }
    } else {
      if (dir === 'prev') {
        prev.classList.remove('hidden');
      } else {
        next.classList.remove('hidden');
      }
    }
  }
}

ArtistIntroduction.propTypes = {
  artist: PropTypes.array,
  artistCardIdx: PropTypes.number,
  initHomeArtist: PropTypes.func
};

export default ArtistIntroduction;
