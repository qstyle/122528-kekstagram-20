'use strict';

(function () {
  window.picture = document.querySelector('.img-upload__preview img');
  function applyZoom(value) {
    document.querySelector('.scale__control--value').value = value + '%';
    window.picture.style = 'transform: scale(' + value / 100 + ')';
  }

  function applyZoomPhoto(valueZoomer) {
    var value = parseFloat(document.querySelector('.scale__control--value').value);
    value = value + valueZoomer * 25;
    if (value >= 100) {
      value = 100;
    }
    if (value <= 25) {
      value = 25;
    }
    applyZoom(value);
    return value;
  }
  window.zoomSmallerHandler = function () {
    window.applyEffect(100);
    window.resetSlider();
    applyZoomPhoto(-1);
  };
  window.zoomBiggerHandler = function () {
    window.applyEffect(100);
    window.resetSlider();
    applyZoomPhoto(1);
  };
  window.resetZoomer = function () {
    document.querySelector('.scale__control--value').value = '100%';
  };
})();
