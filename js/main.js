'use strict';

var upLoadForm = document.querySelector('#upload-select-image');
upLoadForm.addEventListener('change', function upLoadEvent(evt) {
  window.upLoadPhoto(evt);
});


