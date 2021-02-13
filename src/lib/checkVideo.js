function checkVideo () {
  const videos = [].slice.call(document.querySelectorAll('video'));

  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.classList.add('play');
          video.play();
        } else {
          video.classList.remove('play');
          video.pause();
        }
      });
    });

    videos.forEach(video => {
      videoObserver.observe(video);
    });
  } else {
    console.log('not supported');
  }
}

export default checkVideo;
