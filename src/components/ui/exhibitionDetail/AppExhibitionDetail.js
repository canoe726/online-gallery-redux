import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/exhibitionDetail/exhibitionDetail.scss';

import ExhibitionDetailItem from './ExhibitionDetailItem';
import { PageLoading } from '../../../containers/loadingContainers';
import { lazyLoad } from '../../util/lazyLoading';

class AppExhibitionDetail extends React.Component {
  componentDidMount () {
    this.props.initExhibitionDetailData();
  }

  componentDidUpdate () {
    lazyLoad();
  }

  render () {
    const { slideIdx, modalActive, exhibitionDetailList, changeSlideIdx, toggleModal } = this.props;
    return (
      <div className="exhibition-detail-wrapper">
        {exhibitionDetailList && exhibitionDetailList.length > 0
          ? <ExhibitionDetailItem
              slideIdx={slideIdx}
              modalActive={modalActive}
              data={exhibitionDetailList}
              changeSlideIdx={changeSlideIdx}
              toggleModal={toggleModal}
            ></ExhibitionDetailItem>
          : <PageLoading></PageLoading>
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
