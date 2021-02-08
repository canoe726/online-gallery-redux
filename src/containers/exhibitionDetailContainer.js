import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExhibitionDetailData, changeSlideIdx, toggleModal } from '../saga/exhibitionDetailSaga';

import ExhibitionDetail from '../components/exhibitionDetail/ExhibitionDetail';
import PageLoading from '../components/loading/PageLoading';
import NoMoreLoading from '../components/loading/NoMoreLoading';
import LoadingError from '../components/error/LoadingError';

function ExhibitionDetailContainer () {
  const paths = window.location.pathname.split('/');
  const id = paths[2];
  const noMoreLoadingCaption = '상세 작품 정보가 없습니다.';

  const { slideIdx } = useSelector(
    state => state.exhibitionDetail
  ) || {
    slideIdx: 0
  };

  const { modalActive } = useSelector(
    state => state.exhibitionDetail
  ) || {
    modalActive: false
  };

  const { loading, data, error } = useSelector(
    state => state.exhibitionDetail.exhibitionDetailList
  ) || {
    loading: false,
    data: null,
    error: null
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExhibitionDetailData(id));
  }, [dispatch]);

  if (loading && !data) return <PageLoading></PageLoading>;
  if (error) return <LoadingError error={error}></LoadingError>;
  if (!data) return null;
  if (data && data.length === 0) return <NoMoreLoading pageIdx={0} caption={noMoreLoadingCaption}></NoMoreLoading>;
  return (
    <ExhibitionDetail
      data={data}
      slideIdx={slideIdx}
      modalActive={modalActive}
      changeSlideIdx={changeSlideIdx}
      toggleModal={toggleModal}
    ></ExhibitionDetail>);
};

export default ExhibitionDetailContainer;
