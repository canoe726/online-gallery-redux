import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/exhibitionDetail/exhibitionDetail.scss';

import ExhibitionDetailItem from './ExhibitionDetailItem';
import { PageLoading } from '../../../containers/loadingContainers';
import { lazyLoad } from '../../util/lazyLoading';

class AppExhibitionDetail extends React.Component {
  constructor (props) {
    super(props);
    this.posterSlideUp = this.posterSlideUp.bind(this);
  }

  componentDidMount () {
    this.props.initExhibitionDetailData();
    lazyLoad();
  }

  componentDidUpdate () {
    lazyLoad();
  }

  componentWillUnmount () {
    this.props.changeSlideIdx(0);
  }

  render () {
    const { slideIdx, modalActive, exhibitionDetailList, changeSlideIdx, toggleModal } = this.props;
    return (
      <div className="exhibition-detail-wrapper">
        <div
          className="exhibition-poster"
          onClick={this.posterSlideUp}
        >
          <img className="poster-img" src="/samples/galleryPoster1.jpg"></img>
        </div>
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

  posterSlideUp (e) {
    const target = e.target;
    target.parentNode.classList.add('active');
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
