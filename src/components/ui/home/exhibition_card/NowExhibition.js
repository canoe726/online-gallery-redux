import React from 'react';
import PropTypes from 'prop-types';

import ExhibitionCard from './ExhibitionCard';
import { ElementLoading } from '../../../../containers/loadingContainers';

class NowExhibition extends React.Component {
  componentDidMount () {
    this.props.initHomeExhibition();
  }

  render () {
    const { exhibition, exhibitionCardSize, exhibitionCardIdx } = this.props;
    return (
      <div className="now-exhibition-wrapper">
        <div className="title">진행중 전시</div>
        <div className="card-wrapper">
          {exhibition.length > 0
            ? exhibition.map((item, idx) =>
                (idx < (exhibitionCardSize + exhibitionCardIdx))
                  ? <ExhibitionCard
                      key={idx}
                      exhibitionCardSize={exhibitionCardSize}
                      data={item}
                    ></ExhibitionCard>
                  : null)
            : <ElementLoading></ElementLoading>
          }
        </div>
      </div>
    );
  }
}

NowExhibition.propTypes = {
  exhibition: PropTypes.array,
  exhibitionCardSize: PropTypes.number,
  exhibitionCardIdx: PropTypes.number,
  initHomeExhibition: PropTypes.func
};

export default NowExhibition;
