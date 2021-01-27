import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/exhibitionDetail/exhibitionDetail.scss';

import ExhibitionDetailItem from './ExhibitionDetailItem';

class AppExhibitionDetail extends React.Component {
  componentDidMount () {
    this.props.initExhibitionDetailData();
  }

  render () {
    const { slideIdx, modalActive, exhibitionDetailList, changeSlideIdx, toggleModal } = this.props;
    return (
      <div className="exhibition-detail-wrapper">
        {exhibitionDetailList.length > 0
          ? <ExhibitionDetailItem
              slideIdx={slideIdx}
              modalActive={modalActive}
              data={exhibitionDetailList}
              changeSlideIdx={changeSlideIdx}
              toggleModal={toggleModal}
            ></ExhibitionDetailItem>
          : '로딩중...'
        }
      </div>
    );
  }
}

AppExhibitionDetail.propTypes = {
  slideIdx: PropTypes.number,
  modalActive: PropTypes.number,
  exhibitionDetailList: PropTypes.array,
  pictureList: PropTypes.array,
  changeSlideIdx: PropTypes.func,
  toggleModal: PropTypes.func,
  initExhibitionDetailData: PropTypes.func,
  initPictureData: PropTypes.func
};

export default AppExhibitionDetail;
