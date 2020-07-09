'use strict';

(function () {
  window.picture = document.querySelector('.img-upload__preview img');
  function appZoomer(value) {
    document.querySelector('.scale__control--value').value = value + '%';
    window.picture.style = 'transform: scale(' + value / 100 + ')';
  }
  var value = parseFloat(document.querySelector('.scale__control--value').value);
  window.zoomerPhoto = function (valueZoomer) {
    value = value + valueZoomer * 25;
    if (value >= 100) {
      value = 100;
    }
    if (value <= 25) {
      value = 25;
    }
    appZoomer(value);
    return value;
  };
  window.zoomSmillerHandler = function () {
    window.zoomerPhoto(-1);
  };
  window.zoomBiggerHandler = function () {
    window.zoomerPhoto(1);
  };

})();
