'use strict';

(function () {
  var main = document.querySelector('main');

  window.successForm = function () {
    var successModal = (document.querySelector('#success').content).cloneNode(true);
    main.appendChild(successModal);
    document.addEventListener('click', closeSuccessHandlerFormHandler);
    document.addEventListener('keydown', closeSuccessHandler);
  };

  function closeSuccessHandler(evt) {
    if (evt.keyCode === 27) {
      closeSuccessHandlerFormHandler();
    }
  }

  window.errorForm = function () {
    var errorModal = (document.querySelector('#error').content).cloneNode(true);
    main.appendChild(errorModal);
    document.addEventListener('click', closeErrorHandlerFormHandler);
    document.addEventListener('keydown', closeErrorHandler);
  };

  function closeErrorHandler(evt) {
    if (evt.keyCode === 27) {
      closeErrorHandlerFormHandler();
    }
  }

  function closeSuccessHandlerFormHandler() {
    var successModalCloser = main.querySelector('.success');
    main.removeChild(successModalCloser);
    document.removeEventListener('click', closeSuccessHandlerFormHandler);
    document.removeEventListener('keydown', closeSuccessHandler);
  }

  function closeErrorHandlerFormHandler() {
    var errorModalCloser = main.querySelector('.error');
    main.removeChild(errorModalCloser);
    document.removeEventListener('click', closeErrorHandlerFormHandler);
    document.removeEventListener('keydown', closeErrorHandler);
  }
}
)();
