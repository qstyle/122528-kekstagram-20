'use strict';
(function () {
  window.photoLinks = document.querySelectorAll('.picture');
  function findBigPhoto(pictureSrcNum) {
    return window.datadata.find(function find(photo) {
      return photo.url.indexOf(pictureSrcNum) >= 0;
    });
  }

  function escHandler(evtevt) {
    if (evtevt.keyCode === 27) {
      cancelPhotoHandler();
    }
  }

  var cancelBigPhoto = document.querySelector('#picture-cancel');
  window.clickBigPhoto = function (evt) {
    console.log('!');
    evt.preventDefault();
    document.addEventListener('keydown', escHandler);
    cancelBigPhoto.addEventListener('click', cancelPhotoHandler);
    var picturesSrc = evt.currentTarget.querySelector('img').src.split('/');
    var picturesSrcNum = picturesSrc[picturesSrc.length - 1];
    var picture = findBigPhoto(picturesSrcNum);

  };

  function cancelPhotoHandler() {
    window.bigPicture.classList.add('hidden');
    window.body.classList.remove('modal-open');
    cancelBigPhoto.removeEventListener('click', cancelPhotoHandler);
    document.removeEventListener('keydown', escHandler);
  }
})();
