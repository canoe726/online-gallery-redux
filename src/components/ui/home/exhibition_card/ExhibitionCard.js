import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ExhibitionCard extends React.Component {
  render () {
    const { data } = this.props;
    return (
      <div className="card-item">
        <Link to={`/exhibition/${data.exhibitionId}`}>
          <img className="cover-img" src={data.posterImage}></img>
          <div className="caption-wrapper">
              <div className="caption-text">{data.title}</div>
          </div>
        </Link>
      </div>
    );
  }
}

ExhibitionCard.propTypes = {
  data: PropTypes.object
};

export default ExhibitionCard;
