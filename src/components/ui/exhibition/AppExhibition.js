import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/exhibition/exhibition.scss';

import MasonryItem from './MasonryItem';
import { resizeAllMasonryItems } from '../../util/masonry';
import { MasonryLoading } from '../../../containers/loadingContainers';

class AppExhibition extends React.Component {
  constructor (props) {
    super(props);
    window.scrollTo(0, 0);
    this.resizeAllMasonryItems = resizeAllMasonryItems.bind(this);
  }

  componentDidMount () {
    this.props.initExhibitionData();
    window.addEventListener('resize', this.resizeAllMasonryItems);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeAllMasonryItems);
  }

  render () {
    const { exhibitionList } = this.props;
    return (
      <div className="exhibition-wrapper">
        <div className="masonry-wrapper">
          <div className="masonry">
            {exhibitionList.length > 0
              ? exhibitionList.map((item, idx) =>
                <MasonryItem
                  key={idx}
                  exhibitionItem={item}
                ></MasonryItem>)
              : '불러오는중...'
            }
          </div>
        </div>
        <MasonryLoading></MasonryLoading>
      </div>
    );
  }
}

AppExhibition.propTypes = {
  exhibitionList: PropTypes.array,
  initExhibitionData: PropTypes.func
};

export default AppExhibition;
