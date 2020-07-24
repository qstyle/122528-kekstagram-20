'use strict';

(function () {
  window.picture = document.querySelector('.img-upload__preview img');
  function applyZoom(value) {
    document.querySelector('.scale__control--value').value = value + '%';
    window.picture.style = 'transform: scale(' + value / 100 + ')';
  }

  var value = parseFloat(document.querySelector('.scale__control--value').value);
  function applyZoomPhoto(valueZoomer) {
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
  window.zoomSmillerHandler = function () {
    applyZoomPhoto(-1);
  };
  window.zoomBiggerHandler = function () {
    applyZoomPhoto(1);
  };
  window.resetZoomer = function () {
    document.querySelector('.scale__control--value').value = '100%';
  };
})();
