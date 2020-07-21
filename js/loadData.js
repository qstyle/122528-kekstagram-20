'use strict';

(function () {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      window.loadData = xhr.response;
      window.addPhotoPage(window.loadData);
      window.clickBigPhotoHandler();
      window.renderFilterBar();
    } else {
      // eslint-disable-next-line no-alert
      alert('ошибка № ' + xhr.status + '!');
    }
  });
  xhr.open('GET', 'https://javascript.pages.academy/kekstagram/data');
  xhr.send();
})();
