'use strict';
(function () {
  window.applyEffect = function (scrolMove) {
    window.picture.className = ('');
    window.effectLevel.classList.remove('hidden');
    window.picture.classList.add('effects__preview--' + window.effect);
    switch (window.effect) {
      case 'chrome':
        window.picture.style = 'filter: grayscale(' + scrolMove / 100 + ')';
        break;
      case 'sepia':
        window.picture.style = 'filter: sepia(' + scrolMove / 100 + ')';
        break;
      case 'marvin':
        window.picture.style = 'filter: invert(' + scrolMove + '%)';
        break;
      case 'phobos':
        var phobosLevel = scrolMove * 3 / 100;
        window.picture.style = 'filter: blur(' + phobosLevel + 'px)';
        break;
      case 'heat':
        var heatLevel = scrolMove * 3 / 100;
        if (heatLevel < 1) {
          heatLevel = 1;
        }
        window.picture.style = 'filter: brightness(' + heatLevel + ')';
        break;
      case 'none':
        window.effectLevel.classList.add('hidden');
        window.picture.style = '';
        break;
    }
  };
})();
