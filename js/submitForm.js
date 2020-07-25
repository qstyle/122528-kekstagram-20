'use strict';

(function () {
  var formAcceptor = document.querySelector('#upload-select-image');
  formAcceptor.addEventListener('submit', function submitHandler(evt) {
    evt.preventDefault();
    var formValue = new FormData(formAcceptor);
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://javascript.pages.academy/kekstagram');
    xhr.send(formValue);
    xhr.addEventListener('load', function submitFormHandler() {
      if (xhr.status === 200) {
        window.closeModalHandler();
        window.showSuccessMessage();
      } else {
        window.closeModalHandler();
        window.showErrorMessage();
      }
    });
  });
})();

