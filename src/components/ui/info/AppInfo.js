import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/info/info.scss';

import SliderItem from './SliderItem';
import { PageLoading } from '../../../containers/loadingContainers';
import { setFullPage } from '../../util/fullPage';

class AppInfo extends React.Component {
  constructor (props) {
    super(props);
    this.setFullPage = setFullPage.bind(this);
  }

  componentDidMount () {
    window.addEventListener('wheel', this.setFullPage);
    this.props.initInfoData();
  }

  componentWillUnmount () {
    window.removeEventListener('wheel', this.setFullPage);
  }

  render () {
    const { notice, backgroundImages } = this.props;
    return (
      <div className="info-wrapper">
        <div id="hero-slider" className="hero-slider load-next">
            {backgroundImages.length > 0
              ? backgroundImages.map((image, idx) =>
                <SliderItem
                  key={idx}
                  idx={idx}
                  length={backgroundImages.length}
                  notice={notice}
                  backgroundImage={image}
                ></SliderItem>)
              : <PageLoading></PageLoading>
            }
        </div>
      </div>
    );
  }
}

AppInfo.propTypes = {
  notice: PropTypes.string,
  backgroundImages: PropTypes.array,
  initInfoData: PropTypes.func
};

export default AppInfo;
