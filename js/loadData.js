'use strict';

(function () {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    window.datadata = xhr.response;
    window.addPhotoPage(window.datadata);
  });
  xhr.open('GET', 'https://javascript.pages.academy/kekstagram/data');
  xhr.send();
})();

