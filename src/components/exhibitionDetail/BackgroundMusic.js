import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { onlineGalleryApiConstants as API } from '../../api/onlineGalleryApiConstants';

const BackgroundMusic = ({ data }) => {
  const musicRef = useRef();

  useEffect(() => {
    stopBackgroundMusic();
  });

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
        <source src={API.ROOT_IMG + data.bgm} type="audio/mpeg"/>
      </audio>
    </div>
  );

  function volumeBackgroundMusic (e) {
    const music = musicRef.current;
    const curVolume = music.volume;
    if (curVolume === 1.0) {
      music.volume = 0.5;
    } else if (curVolume === 0.5) {
      music.volume = 0.25;
    } else if (curVolume === 0.25) {
      music.volume = 1.0;
    }
  }

  function playBackgroundMusic (e) {
    const music = musicRef.current;
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        music.load();
        music.volume = 1.0;
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
