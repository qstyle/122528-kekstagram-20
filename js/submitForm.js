'use strict';

(function () {
  var form = document.querySelector('#upload-select-image');


  form.addEventListener('submit', function onSubmitHandler(evt) {
    evt.preventDefault();

    var formValue = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://javascript.pages.academy/kekstagram');
    xhr.send(formValue);
  });
})();
