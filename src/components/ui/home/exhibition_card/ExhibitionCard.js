import React from 'react';
import PropTypes from 'prop-types';

class ExhibitionCard extends React.Component {
  render () {
    const { data } = this.props;
    return (
      <div className="card-item">
        <img className="cover-img" src={data.posterImage}></img>
        <div className="caption-wrapper">
            <div className="caption-text">{data.title}</div>
        </div>
      </div>
    );
  }
}

ExhibitionCard.propTypes = {
  data: PropTypes.object
};

export default ExhibitionCard;
