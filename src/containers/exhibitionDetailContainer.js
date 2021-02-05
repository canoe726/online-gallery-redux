import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExhibitionDetailData, changeSlideIdx, toggleModal } from '../saga/exhibitionDetailSaga';

import ExhibitionDetail from '../components/exhibitionDetail/ExhibitionDetail';
import PageLoading from '../components/loading/PageLoading';

function ExhibitionDetailContainer () {
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
    if (data) return;
    dispatch(getExhibitionDetailData());
  }, [dispatch]);

  if (loading && !data) return <PageLoading></PageLoading>;
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;
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
