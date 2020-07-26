'use strict';

(function () {
  var main = document.querySelector('main');

  window.showSuccessMessage = function () {
    var successModal = (document.querySelector('#success').content).cloneNode(true);
    main.appendChild(successModal);
    document.addEventListener('click', closeSuccessFormHandler);
    document.addEventListener('keydown', closeSuccessHandler);
  };

  function closeSuccessHandler(evt) {
    if (evt.keyCode === 27) {
      closeSuccessFormHandler(evt);
    }
  }

  window.showErrorMessage = function () {
    var errorModal = (document.querySelector('#error').content).cloneNode(true);
    main.appendChild(errorModal);
    document.addEventListener('click', closeErrorFormHandler);
    document.addEventListener('keydown', closeErrorHandler);
  };

  function closeErrorHandler(evt) {
    if (evt.keyCode === 27) {
      closeErrorFormHandler(evt);
    }
  }

  function closeSuccessFormHandler(evt) {
    var successModal = document.querySelector('.success__inner');
    var successModalText = document.querySelector('.success__title');
    if (evt.target === successModal || evt.target === successModalText) {
      return;
    } else {
      var successModalCloser = main.querySelector('.success');
      main.removeChild(successModalCloser);
      document.removeEventListener('click', closeSuccessFormHandler);
      document.removeEventListener('keydown', closeSuccessHandler);
    }

  }

  function closeErrorFormHandler(evt) {
    var errorModalCloser = main.querySelector('.error');
    var errorModal = document.querySelector('.error__inner');
    var errorModalText = document.querySelector('.error__title');
    if (evt.target === errorModal || evt.target === errorModalText) {
      return;
    } else {
      main.removeChild(errorModalCloser);
      document.removeEventListener('click', closeErrorFormHandler);
      document.removeEventListener('keydown', closeErrorHandler);
    }
  }
}
)();
