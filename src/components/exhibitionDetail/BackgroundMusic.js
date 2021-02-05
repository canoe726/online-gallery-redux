import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const BackgroundMusic = ({ data }) => {
  const musicRef = useRef();

  return (
    <div className={data.bgm.length > 0 ? 'background-music' : 'background-music active'}>
      <div className="turn-music-btn" onClick={volumeBackgroundMusic}>
        <i className="fas fa-volume-up"></i>
      </div>
      <div className="play-music-btn" onClick={playBackgroundMusic}>
        <i className="fas fa-play"></i>
      </div>
      <div className="stop-music-btn" onClick={stopBackgroundMusic}>
        <i className="fas fa-stop"></i>
      </div>
      {/* autoPlay={true}  */}
      <audio className="music" ref={musicRef}>
        <source src={data.bgm} type="audio/mpeg"/>
      </audio>
    </div>
  );

  function volumeBackgroundMusic (e) {
    const music = musicRef.current;
    const curVolume = music.volume;
    if (curVolume === 0.15) {
      music.volume = 0.075;
    } else if (curVolume === 0.075) {
      music.volume = 0.03;
    } else if (curVolume === 0.03) {
      music.volume = 0.15;
    }
  }

  function playBackgroundMusic (e) {
    const music = musicRef.current;
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

  function stopBackgroundMusic (e) {
    const music = musicRef.current;
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
};

BackgroundMusic.propTypes = {
  data: PropTypes.object
};

export default BackgroundMusic;
