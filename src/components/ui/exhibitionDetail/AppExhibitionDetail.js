import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/exhibitionDetail/exhibitionDetail.scss';

import ExhibitionDetailItem from './ExhibitionDetailItem';

class AppExhibitionDetail extends React.Component {
  componentDidMount () {
    this.props.initExhibitionDetailData();
  }

  render () {
    const { slideIdx, exhibitionDetailList } = this.props;
    return (
      <div className="exhibition-detail-wrapper">
        {exhibitionDetailList.length > 0
          ? <ExhibitionDetailItem
              data={exhibitionDetailList[slideIdx]}
            ></ExhibitionDetailItem>
          : '로딩중...'
        }
      </div>
    );
  }
}

AppExhibitionDetail.propTypes = {
  slideIdx: PropTypes.number,
  exhibitionDetailList: PropTypes.array,
  pictureList: PropTypes.array,
  changeSlideIdx: PropTypes.func,
  initExhibitionDetailData: PropTypes.func,
  initPictureData: PropTypes.func
};

export default AppExhibitionDetail;
