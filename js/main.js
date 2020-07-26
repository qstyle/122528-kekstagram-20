'use strict';
(function () {
  var uploadForm = document.querySelector('#upload-select-image');
  uploadForm.addEventListener('change', function uploadEventHandler(evt) {
    window.uploadPhoto(evt);
  });
})();


