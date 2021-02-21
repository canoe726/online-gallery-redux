function masonry () {
  if (!document.querySelector('.masonry').clientWidth) return;

  const gutter = 20;
  const images = document.querySelectorAll('.masonry-item');
  const imagesWidth = document.querySelector('.masonry').clientWidth;

  let imgStack;
  // 반응형 masonry
  if (imagesWidth > 1600) {
    imgStack = Array.from({ length: 4 }, () => 0);
  } else if (imagesWidth > 1200) {
    imgStack = Array.from({ length: 3 }, () => 0);
  } else if (imagesWidth > 800) {
    imgStack = Array.from({ length: 2 }, () => 0);
  } else {
    imgStack = Array.from({ length: 1 }, () => 0);
  }

  // masonry-item 가로 크기
  const colWidth = imagesWidth / imgStack.length;
  for (let i = 0; i < images.length; i++) {
    const minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));
    const x = colWidth * minIndex;
    const y = imgStack[minIndex];
    imgStack[minIndex] += (images[i].children[1].clientHeight + gutter);
    images[i].style.transform = `translateX(${x}px) translateY(${y}px)`;
    images[i].style.width = `${colWidth}px`;
    if (i === images.length - 1) {
      // masnory 전체 높이
      document.querySelector('.masonry').style.height = `${Math.max.apply(0, imgStack)}px`;
    }
  }
}

export default masonry;
