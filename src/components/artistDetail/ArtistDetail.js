import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import '../../stylesheets/artistDetail/artistDetail.scss';

import ArtistInfoWrapper from './ArtistInfoWrapper';
// import ArtistDetailGalleryContainer from '../../containers/artistDetail/artistDetailGalleryContainer';

import { resizeAllMasonryItems } from '../../lib/masonry';

import { onlineGalleryApiConstants as API } from '../../api/onlineGalleryApiConstants';

const ArtistDetail = ({ data }) => {
  const zoomImgRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);

    window.addEventListener('load', resizeAllMasonryItems);
    window.addEventListener('resize', resizeAllMasonryItems);
    window.addEventListener('scroll', heroScrollZoom);

    return () => {
      window.removeEventListener('load', resizeAllMasonryItems);
      window.removeEventListener('resize', resizeAllMasonryItems);
      window.removeEventListener('scroll', heroScrollZoom);
    };
  }, []);

  return (
    <div className="artist-detail-wrapper">
      <div className="artist-detail-item">
        <div className="thumbnail-wrapper zoom">
          <img
            className="main-img"
            src={API.ROOT_IMG + data.artist.profileImage}
            alt="author-main-img-"
            ref={zoomImgRef}
          ></img>
          <div className="caption">
            <div className="title">{data.artist.nickname}</div>
            <div className="contents">{data.artist.introduction}</div>
            <div className="contents">{data.artist.note}</div>
          </div>
        </div>
        <ArtistInfoWrapper
          data={data}
        ></ArtistInfoWrapper>

        <div className="grid-gallery-wrapper">
          <div className="title">작품 둘러보기</div>
          {/* <ArtistDetailGalleryContainer></ArtistDetailGalleryContainer> */}
        </div>
      </div>
    </div>
  );

  function heroScrollZoom () {
    const scrollY = window.scrollY;
    const zoomImg = zoomImgRef.current;
    const scaleRatio = (100 + scrollY / 5) / 100;
    if (Math.floor(scaleRatio) > 2) {
      zoomImg.style.opacity = '0';
    } else {
      zoomImg.style.opacity = '1';
      zoomImg.style.transform = `translate3d(-50%, -${scrollY / 50}%, 0) scale(${scaleRatio})`;
    }
  }
};

ArtistDetail.propTypes = {
  data: PropTypes.object
};

export default ArtistDetail;