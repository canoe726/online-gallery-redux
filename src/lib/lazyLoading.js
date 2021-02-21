import masnory from './masonry';

function lazyLoad (mode) {
  const lazyItems = [].slice.call(document.querySelectorAll('.lazy'));
  if (mode === 1) {
    masnory();
  }

  if ('IntersectionObserver' in window) {
    const lazyItemObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyItem = entry.target;
          lazyItem.src = lazyItem.dataset.src;
          lazyItem.classList.remove('lazy');
          lazyItemObserver.unobserve(lazyItem);
        }
      });
    });

    lazyItems.forEach(lazyImage => {
      lazyItemObserver.observe(lazyImage);
    });
  } else {
    console.log('not supported');
  }
}

export default lazyLoad;
