'use strict';
(function () {
  var uploadForm = document.querySelector('#upload-select-image');
  uploadForm.addEventListener('change', function upLoadEventHandler(evt) {
    window.uploadPhoto(evt);
  });
})();


