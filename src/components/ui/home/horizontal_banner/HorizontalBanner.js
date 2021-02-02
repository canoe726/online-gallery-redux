import React from 'react';
import PropTypes from 'prop-types';

import BannerCard from './BannerCard';
import { ElementLoading } from '../../../../containers/loadingContainers';

class HorizontalBanner extends React.Component {
  constructor (props) {
    super(props);

    this.homeBannerInterval = null;
  }

  componentDidMount () {
    this.props.initHomeBanner();

    this.homeBannerInterval = setInterval(() => {
      this.changeSlide(1);
    }, 7000);
  }

  componentWillUnmount () {
    clearInterval(this.homeBannerInterval);
  }

  render () {
    const { banner, bannerIdx } = this.props;
    return (
        <div className="horizontal-banner">
          <div className="banner-card-wrapper">
            {banner.length > 0
              ? banner.map((item, idx) =>
                <BannerCard
                  key={idx}
                  data={item}
                  isShow={idx === bannerIdx}
                ></BannerCard>)
              : <ElementLoading></ElementLoading>}
          </div>
          <div className="prev" onClick={() => this.changeSlide(-1)}>&#10094;</div>
          <div className="next" onClick={() => this.changeSlide(1)}>&#10095;</div>
          <div className="banner-dot">
            {banner.length > 0
              ? banner.map((item, idx) =>
                <span
                  key={idx}
                  className={idx === bannerIdx ? 'dot active' : 'dot'}
                  onClick={() => this.dotChangeSlide(idx)}
                ></span>)
              : ''
            }
          </div>
        </div>
    );
  }

  dotChangeSlide (idx) {
    this.props.changeHomeBannerIdx(idx);
  }

  changeSlide (plus) {
    const length = this.props.banner.length;
    let bannerIdx = this.props.bannerIdx;
    bannerIdx += plus;
    if (bannerIdx < 0) {
      bannerIdx = length - 1;
    } else if (bannerIdx >= length) {
      bannerIdx = 0;
    }
    this.props.changeHomeBannerIdx(bannerIdx);
  }
}

HorizontalBanner.propTypes = {
  banner: PropTypes.array,
  bannerIdx: PropTypes.number,
  initHomeBanner: PropTypes.func,
  changeHomeBannerIdx: PropTypes.func
};

export default HorizontalBanner;
