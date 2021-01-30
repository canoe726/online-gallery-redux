import React from 'react';
import PropTypes from 'prop-types';

import ExhibitionCard from './ExhibitionCard';
import { ElementLoading } from '../../../../containers/loadingContainers';

class NowExhibition extends React.Component {
  componentDidMount () {
    this.props.initHomeExhibition();
  }

  render () {
    const { exhibition } = this.props;
    return (
      <div className="now-exhibition-wrapper">
        <div className="title">진행중 전시</div>
        <div className="card-wrapper">
          {exhibition.length > 0
            ? exhibition.map((item, idx) =>
              <ExhibitionCard
                key={idx}
                data={item}
              ></ExhibitionCard>)
            : <ElementLoading></ElementLoading>}
        </div>
        <div className="prev hidden" onClick={() => this.scrollHorizontal(false)}>&#10094;</div>
        <div className="next" onClick={() => this.scrollHorizontal(true)}>&#10095;</div>
      </div>
    );
  }

  scrollHorizontal (isRight) {
    const cardWrapper = document.querySelector('.now-exhibition-wrapper .card-wrapper');
    const cardItem = document.querySelector('.now-exhibition-wrapper .card-wrapper .card-item');
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
    const prev = document.querySelector('.now-exhibition-wrapper .prev');
    const next = document.querySelector('.now-exhibition-wrapper .next');
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

NowExhibition.propTypes = {
  exhibition: PropTypes.array,
  exhibitionCardIdx: PropTypes.number,
  initHomeExhibition: PropTypes.func
};

export default NowExhibition;
