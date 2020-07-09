'use strict';
(function () {
  window.generateRandom = function (randomMin, randomMax) {
    var randomValue = Math.round((Math.random() * randomMax));
    if (randomValue < randomMin) {
      randomValue += randomMin;
    }
    return randomValue;
  };
})();
