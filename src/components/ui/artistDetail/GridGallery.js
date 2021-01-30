import React from 'react';
import PropTypes from 'prop-types';

class ArtistDetailItem extends React.Component {
  render () {
    const { artistDetailPictureList } = this.props;
    console.log(artistDetailPictureList);
    return (
      <div className="grid-gallery">
        <div className="grid-item">
          <img className="img-item" src="/samples/artwork1.jpg"></img>
          <div className="caption-wrapper">
            <div className="caption image">{'aaaaaaaa'}</div>
            <div className="caption artist">{'bbbbbbbb'}</div>
          </div>
        </div>
        <div className="grid-item">
        <img className="img-item" src="/samples/artwork2.jpg"></img>
        <div className="caption-wrapper">
            <div className="caption image">{'aaaaaaaa'}</div>
            <div className="caption artist">{'bbbbbbbb'}</div>
        </div>
        </div>
        <div className="grid-item">
        <img className="img-item" src="/samples/artwork3.jpg"></img>
        <div className="caption-wrapper">
            <div className="caption image">{'aaaaaaaa'}</div>
            <div className="caption artist">{'bbbbbbbb'}</div>
        </div>
        </div>
        <div className="grid-item">
        <img className="img-item" src="/samples/artwork4.jpg"></img>
        <div className="caption-wrapper">
            <div className="caption image">{'aaaaaaaa'}</div>
            <div className="caption artist">{'bbbbbbbb'}</div>
        </div>
        </div>
        <div className="grid-item">
        <img className="img-item" src="/samples/artwork5.jpg"></img>
        <div className="caption-wrapper">
            <div className="caption image">{'aaaaaaaa'}</div>
            <div className="caption artist">{'bbbbbbbb'}</div>
        </div>
        </div>
        <div className="grid-item">
        <img className="img-item" src="/samples/artwork6.jpg"></img>
        <div className="caption-wrapper">
            <div className="caption image">{'aaaaaaaa'}</div>
            <div className="caption artist">{'bbbbbbbb'}</div>
        </div>
        </div>
        <div className="grid-item">
        <img className="img-item" src="/samples/artwork7.jpg"></img>
        <div className="caption-wrapper">
            <div className="caption image">{'aaaaaaaa'}</div>
            <div className="caption artist">{'bbbbbbbb'}</div>
        </div>
        </div>
        <div className="grid-item">
        <img className="img-item" src="/samples/artwork8.jpg"></img>
        <div className="caption-wrapper">
            <div className="caption image">{'aaaaaaaa'}</div>
            <div className="caption artist">{'bbbbbbbb'}</div>
        </div>
        </div>
        <div className="grid-item">
        <img className="img-item" src="/samples/artwork1.jpg"></img>
        <div className="caption-wrapper">
            <div className="caption image">{'aaaaaaaa'}</div>
            <div className="caption artist">{'bbbbbbbb'}</div>
        </div>
        </div>
      </div>
    );
  }
}

ArtistDetailItem.propTypes = {
  artistDetailPictureList: PropTypes.array
};

export default ArtistDetailItem;
