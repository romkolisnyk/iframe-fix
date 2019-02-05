document.addEventListener("DOMContentLoaded", function () {

  var lastHeight = 0, curHeight = 0, lastWidth = 0, curWidth = 0, frame = document.querySelector('.banner iframe');

  setInterval(function () {
    curHeight = frame.contentDocument.querySelector('body').offsetHeight;

    if (curHeight != lastHeight) {
      frame.style.height = (lastHeight = curHeight) + 'px';
      frame.style.maxHeight = 100 + 'vh';
    }
  }, 100);
  setInterval(function () {
    curWidth = frame.contentDocument.querySelector('body>div').offsetWidth;

    if (curWidth != lastWidth) {
      frame.style.width = (lastWidth = curWidth) + 'px';
      frame.style.maxWidth = 100 + 'vw';
    }
  }, 100);
});