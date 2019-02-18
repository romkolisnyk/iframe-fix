// INITIAL CODE

var lastHeight = 0, curHeight = 0, lastWidth = 0, curWidth = 0, frame = window.parent.document.querySelector('.banner iframe');

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





// EXTRA FUNCTIONALITY

settings({
  // positionY: 200 + 'px', // from bottom
  // positionX: 0 + 'px', // from left
  speed: 20, // set > 20 and < 100 if banner opens slowly (banner paddings is growing)
  // customWidth: 200 + 'px', // set a specific width
  // customHeight: 100 + 'px', // set a specific height
});

var lastHeight = 0, curHeight = 0, lastWidth = 0, curWidth = 0, frame = window.parent.document.querySelector('.banner iframe');

document.querySelector('body').style.overflow = 'hidden';

function settings(params) {

  setInterval(function () {
    curHeight = document.querySelector('body').offsetHeight;

    if (curHeight != lastHeight) {
      frame.style.height = (lastHeight = curHeight) + params.speed + 'px';
      frame.style.maxHeight = 100 + 'vh';
      frame.style.bottom = params.positionY;
      frame.style.height = params.customHeight;
    }
  }, 5);

  setInterval(function () {
    curWidth = document.querySelector('body>div').offsetWidth;

    if (curWidth != lastWidth) {
      frame.style.width = (lastWidth = curWidth) + params.speed + 'px';
      frame.style.maxWidth = 100 + 'vw';
      frame.style.left = params.positionX;
      frame.style.width = params.customWidth;
    }
  }, 5);
}