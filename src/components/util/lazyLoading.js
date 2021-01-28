// import { resizeMasonryItem } from './masonry';

function lazyLoad () {
  const lazyItems = [].slice.call(document.querySelectorAll('.lazy'));

  if ('IntersectionObserver' in window) {
    const lazyItemObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyItem = entry.target;
          lazyItem.src = lazyItem.dataset.src;
          lazyItem.classList.remove('lazy');
          lazyItemObserver.unobserve(lazyItem);

        //   checkUrl(lazyImage);
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

// // 특정 URL 에 따른 이미지 처리
// function checkUrl (lazyImage) {
//   const urls = window.location.href.split('/');
//   const masonryUrl = ['exhibition', 'author'];

//   // masonry 가 존재하는 url 이면 위치 조정
//   for (let idx = 0; idx < masonryUrl.length; idx++) {
//     if (urls[3] === masonryUrl[idx]) {
//       lazyImage.addEventListener('load', () => {
//         resizeMasonryItem(lazyImage.parentNode);
//       });
//       break;
//     }
//   }
// }

export { lazyLoad };
