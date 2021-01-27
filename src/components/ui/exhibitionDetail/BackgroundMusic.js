import React from 'react';
import PropTypes from 'prop-types';

class BackgroundMusic extends React.Component {
  constructor (props) {
    super(props);

    this.volumeBackgroundMusic = this.volumeBackgroundMusic.bind(this);
    this.playBackgroundMusic = this.playBackgroundMusic.bind(this);
    this.stopBackgroundMusic = this.stopBackgroundMusic.bind(this);
  }

  componentDidMount () {
    // const backgroundMusicWrapper = document.querySelector('.background-music');
    // const backgroundMusic = document.querySelector('.background-music .music');
    // const musicSource = backgroundMusic.querySelector('source');
    // const bgm = this.props.data.bgm;
    // if (bgm.length > 0) {
    //   musicSource.src = bgm;
    //   backgroundMusic.volume = 0.15;
    //   // at first not allowed autoplay music
    //   //   backgroundMusic.load();
    //   //   backgroundMusic.volume = 0.15;
    //   //   backgroundMusic.play();
    // } else {
    //   backgroundMusicWrapper.classList.add('hidden');
    //   // backgroundMusic.pause();
    // }
  }

  render () {
    return (
      <div className="background-music">
        <div className="turn-music-btn" onClick={this.volumeBackgroundMusic}>
          <i className="fas fa-volume-up"></i>
        </div>
        <div className="play-music-btn" onClick={this.playBackgroundMusic}>
          <i className="fas fa-play"></i>
        </div>
        <div className="stop-music-btn" onClick={this.stopBackgroundMusic}>
          <i className="fas fa-stop"></i>
        </div>
        {/* autoPlay={true}  */}
        <audio className="music">
          <source src={this.props.data.bgm} type="audio/mpeg"/>
        </audio>
      </div>
    );
  }

  volumeBackgroundMusic (e) {
    const target = e.target;
    const music = target.parentNode.parentNode.querySelector('.music');
    const curVolume = music.volume;
    if (curVolume === 0.15) {
      music.volume = 0.075;
    } else if (curVolume === 0.075) {
      music.volume = 0.03;
    } else if (curVolume === 0.03) {
      music.volume = 0.15;
    }
  }

  playBackgroundMusic (e) {
    const target = e.target;
    const music = target.parentNode.parentNode.querySelector('.music');
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        music.load();
        music.volume = 0.15;
        music.play();
      }).catch(error => {
        console.log(error);
      });
    } else {
      console.log('음악을 재생할 수 없습니다.');
    }
  }

  stopBackgroundMusic (e) {
    const target = e.target;
    const music = target.parentNode.parentNode.querySelector('.music');
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        music.pause();
      }).catch(error => {
        console.log(error);
      });
    } else {
      console.log('음악을 재생할 수 없습니다.');
    }
  }
}

BackgroundMusic.propTypes = {
  data: PropTypes.object
};

export default BackgroundMusic;
