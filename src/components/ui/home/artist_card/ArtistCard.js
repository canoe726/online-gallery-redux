import React from 'react';
import PropTypes from 'prop-types';

class ArtistCard extends React.Component {
  render () {
    const { data } = this.props;
    return (
      <div className="card-item">
        <img className="cover-img" src={data.profileImage}></img>
        <div className="caption-wrapper">
            <div className="caption-text">{data.nickname}</div>
        </div>
      </div>
    );
  }
}

ArtistCard.propTypes = {
  data: PropTypes.object
};

export default ArtistCard;
