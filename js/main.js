'use strict';

(function () {
  for (var i = 0; i < window.photoLinks.length; i++) {
    window.photoLinks[i].addEventListener('click', window.clickBigPhoto);
  }

  var upLoadForm = document.querySelector('#upload-select-image');
  upLoadForm.addEventListener('change', function upLoadEvent(evt) {
    window.upLoadPhoto(evt);
  });
})();
