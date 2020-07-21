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
    xhr.addEventListener('load', function submitForm() {
      if (xhr.status === 200) {
        window.closeModal();
        window.successForm();
      } else {
        window.closeModal();
        window.errorForm();
      }
    });
  });
})();

