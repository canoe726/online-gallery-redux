import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/exhibition/exhibition.scss';

import MasonryItem from './MasonryItem';
import { resizeAllMasonryItems } from '../../util/masonry';
import { PageLoading, NoMoreLoading, MasonryLoading } from '../../../containers/loadingContainers';

class AppExhibition extends React.Component {
  constructor (props) {
    super(props);

    this.resizeAllMasonryItems = resizeAllMasonryItems.bind(this);
    this.infinityScroll = this.infinityScroll.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0);
    this.props.initExhibitionData();

    window.addEventListener('load', this.resizeAllMasonryItems);
    window.addEventListener('resize', this.resizeAllMasonryItems);
    window.addEventListener('scroll', this.infinityScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('load', this.resizeAllMasonryItems);
    window.removeEventListener('resize', this.resizeAllMasonryItems);
    window.removeEventListener('scroll', this.infinityScroll);
  }

  render () {
    const { noMoreData, isFetching, exhibitionList } = this.props;
    return (
      <div className="exhibition-wrapper">
        <div className="masonry-wrapper">
          <div className="masonry">
            {(exhibitionList.length > 0 && exhibitionList[0] !== undefined)
              ? exhibitionList.map((item, idx) =>
                <MasonryItem
                  key={idx}
                  exhibitionItem={item}
                ></MasonryItem>)
              : <PageLoading></PageLoading>
            }
          </div>
        </div>
        {noMoreData
          ? <NoMoreLoading
              pageIdx={0}
              caption={'데이터를 모두 불러 왔습니다.'}
            ></NoMoreLoading>
          : isFetching
            ? <MasonryLoading
                isFetching={isFetching}
              ></MasonryLoading>
            : ''}
      </div>
    );
  }

  infinityScroll () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // 스크롤이 최하단이면서 fetch 중이 아니면서 데이터가 더 있을 때 호출
    if (scrollTop + clientHeight >= scrollHeight) {
      if (!this.props.isFetching && !this.props.noMoreData) {
        this.props.addExhibitionData();
      }
    }
  }
}

AppExhibition.propTypes = {
  exhibitionList: PropTypes.array,
  noMoreData: PropTypes.bool,
  isFetching: PropTypes.bool,
  initExhibitionData: PropTypes.func,
  addExhibitionData: PropTypes.func
};

export default AppExhibition;
