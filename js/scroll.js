'use strict';
(function () {
  var startScroll;
  window.effectLevel = document.querySelector('.img-upload__effect-level');
  window.scrollInput = document.querySelector('.effect-level__pin');
  window.uploadModal = document.querySelector('.img-upload__overlay');

  var inputWidth;
  window.pressMouseHandler = function (evtevt) {
    evtevt.preventDefault();
    startScroll = evtevt.clientX;
    window.document.addEventListener('mousemove', scrollMoveHandler);
    window.document.addEventListener('mouseup', scrollUpHandler);
    return startScroll;
  };

  function scrollUpHandler(upEvt) {
    upEvt.preventDefault();
    window.document.removeEventListener('mousemove', scrollMoveHandler);
    window.document.removeEventListener('mouseup', scrollUpHandler);
  }

  function scrollMoveHandler(moveEvt) {
    moveEvt.preventDefault();
    var move = startScroll - moveEvt.clientX;
    inputWidth = document.querySelector('.effect-level__line').offsetWidth;
    startScroll = moveEvt.clientX;
    var scrollPosition = window.scrollInput.offsetLeft - move;
    if (scrollPosition < 0) {
      scrollPosition = 0;
    }
    if (scrollPosition > inputWidth) {
      scrollPosition = inputWidth;
    }
    window.scrollInput.style.left = scrollPosition + 'px';
    depth.style.width = scrollPosition + 'px';
    scrollPosition = scrollPosition * 100 / inputWidth;
    window.scrollInput.value = scrollPosition;
    return window.applyEffect(scrollPosition);
  }
  var depth = document.querySelector('.effect-level__depth');
  window.resetSlider = function () {
    window.scrollInput.style = 'left:' + inputWidth + '';
    depth.style = 'width:' + inputWidth + '';
  };
})();
