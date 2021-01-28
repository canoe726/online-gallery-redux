import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { lazyLoad } from '../../../util/lazyLoading';

class ExhibitionCard extends React.Component {
  componentDidMount () {
    lazyLoad();
  }

  render () {
    const { history, exhibitionCardSize, data } = this.props;
    return (
      <div
        className="card-item"
        onClick={() => history.push(`/exhibition/${data.exhibitionId}`)}
        style={{ width: `${100 / exhibitionCardSize}%` }}
        >
        <img className="cover-img lazy" data-src={data.posterImage}></img>
        <div className="caption-wrapper">
            <div className="caption-text">{data.title}</div>
        </div>
      </div>
    );
  }
}

ExhibitionCard.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  exhibitionCardSize: PropTypes.number,
  data: PropTypes.object
};

export default withRouter(ExhibitionCard);
