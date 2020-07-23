'use strict';
(function () {
  var upLoadForm = document.querySelector('#upload-select-image');
  upLoadForm.addEventListener('change', function upLoadEventHandler(evt) {
    window.upLoadPhoto(evt);
  });
})();


