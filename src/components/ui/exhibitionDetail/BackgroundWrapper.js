import React from 'react';
import PropTypes from 'prop-types';

class BackgroundWrapper extends React.Component {
  componentDidMount () {
    this.activeContentAnimation();
  }

  render () {
    const { data } = this.props;
    return (
      <div className="background-wrapper load-next active">
        {data.length > 0
          ? data.map((item, idx) =>
              <BackgroundItem
                key={idx}
                idx={idx}
                length={data.length}
                data={item}
              ></BackgroundItem>)
          : '불러오는중...'}
      </div>
    );
  }

  activeContentAnimation () {
    const backgroundWrapper = document.querySelector('.background-wrapper');
    setTimeout(() => {
      backgroundWrapper.classList.remove('active');
    }, 500);
  }
}

const BackgroundItem = ({ idx, length, data }) => {
  return (
    <div
      className={
        idx === 0
          ? 'hero-section active'
          : idx === length - 1
            ? 'hero-section prev'
            : 'hero-section'
      }
    >
      {data.exhibitionItemBackground.type === 'IMAGE'
        ? <img className="img" src={data.exhibitionItemBackground.value} alt={`background-img-item-${idx + 1}`}></img>
        : data.exhibitionItemBackground.type === 'COLOR'
          ? <img className="img" src={data.exhibitionItemBackground.value} alt={`background-img-item-${idx + 1}`}></img>
          : data.exhibitionItemBackground.type === 'VIDEO'
            ? <img className="img" src={data.exhibitionItemBackground.value} alt={`background-img-item-${idx + 1}`}></img>
            : '잘못된 타입 입니다.'}
    </div>
  );
};

BackgroundWrapper.propTypes = {
  slideIdx: PropTypes.number,
  data: PropTypes.array
};

BackgroundItem.propTypes = {
  idx: PropTypes.number,
  length: PropTypes.number,
  data: PropTypes.object
};

export default BackgroundWrapper;
