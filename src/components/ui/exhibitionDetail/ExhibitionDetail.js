import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/exhibitionDetail/exhibitionDetail.scss';

import ExhibitionDetailItem from './ExhibitionDetailItem';
import { PageLoadingContainer } from '../../../containers/loadingContainers';
import { lazyLoad } from '../../util/lazyLoading';

const ExhibitionDetail = ({
  slideIdx,
  modalActive,
  exhibitionDetailList,
  pictureList,
  changeSlideIdx,
  toggleModal,
  initExhibitionDetailData,
  initPictureData
}) => {
  useEffect(() => {
    initExhibitionDetailData();
    lazyLoad();

    return () => {
      changeSlideIdx(0);
    };
  }, []);

  useEffect(() => {
    lazyLoad();
  });

  return (
    <div className="exhibition-detail-wrapper">
      <div
        className="exhibition-poster"
        onClick={posterSlideUp}
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
        : <PageLoadingContainer></PageLoadingContainer>
      }
    </div>
  );

  function posterSlideUp (e) {
    const target = e.target;
    target.parentNode.classList.add('active');
  }
};

ExhibitionDetail.propTypes = {
  slideIdx: PropTypes.number,
  modalActive: PropTypes.number,
  exhibitionDetailList: PropTypes.array,
  pictureList: PropTypes.array,
  changeSlideIdx: PropTypes.func,
  toggleModal: PropTypes.func,
  initExhibitionDetailData: PropTypes.func,
  initPictureData: PropTypes.func
};

export default ExhibitionDetail;
