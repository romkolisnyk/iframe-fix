var lastHeight = 0, curHeight = 0, lastWidth = 0, curWidth = 0, frame = window.parent.document.getElementById('myIframe');

setInterval(function () {
  curHeight = document.querySelector('body').offsetHeight;

  if (curHeight != lastHeight) {
    frame.style.height = (lastHeight = curHeight) + 'px';
    frame.style.maxHeight = 100 + 'vh';
  }
}, 10);
setInterval(function () {
  curWidth = document.querySelector('body>div').offsetWidth;

  if (curWidth != lastWidth) {
    frame.style.width = (lastWidth = curWidth) + 20 + 'px';
    frame.style.maxWidth = 100 + 'vw';
  }
}, 10);