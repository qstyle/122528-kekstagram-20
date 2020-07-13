'use strict';
(function () {
  var main = document.querySelector('main');
  var successModal = (document.querySelector('#success').content).cloneNode(true);
  window.successForm = function () {
    main.appendChild(successModal);
    document.addEventListener('click', closeSuccessForm);
    document.addEventListener('keydown', closeSuccess);
  };

  function closeSuccess(evt) {
    if (evt.keyCode === 27) {
      closeSuccessForm();
    }
  }

  window.errorForm = function () {
    var errorModal = (document.querySelector('#error').content).cloneNode(true);
    main.appendChild(errorModal);
    document.addEventListener('click', closeErrorForm);
    document.addEventListener('keydown', closeError);
  };

  function closeError(evt) {
    if (evt.keyCode === 27) {
      closeErrorForm();
    }
  }

  function closeSuccessForm() {
    var successModalCloser = main.querySelector('.success');
    main.removeChild(successModalCloser);
    document.removeEventListener('click', closeSuccessForm);
    document.removeEventListener('keydown', closeSuccess);
  }

  function closeErrorForm() {
    var errorModalCloser = main.querySelector('.error');
    main.removeChild(errorModalCloser);
    document.removeEventListener('click', closeErrorForm);
    document.removeEventListener('keydown', closeError);
  }
}
)();
