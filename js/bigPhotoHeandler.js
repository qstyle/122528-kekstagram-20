'use strict';
(function () {
  function findBigPhoto(pictureSrcNum) {
    return window.loadData.find(function find(photo) {
      return photo.url.indexOf(pictureSrcNum) >= 0;
    });
  }

  function escHandler(evtevt) {
    if (evtevt.keyCode === 27) {
      cancelPhotoHandler();
    }
  }

  var cancelBigPhoto = document.querySelector('#picture-cancel');
  window.clickBigPhotosHandler = function (evt) {
    evt.preventDefault();
    document.addEventListener('keydown', escHandler);
    cancelBigPhoto.addEventListener('click', cancelPhotoHandler);
    var picturesSrc = evt.currentTarget.querySelector('img').src.split('/');
    var picturesSrcNum = picturesSrc[picturesSrc.length - 1];
    var picture = findBigPhoto(picturesSrcNum);
    window.openBigPicture(picture);

  };

  function cancelPhotoHandler() {
    window.bigPicture.classList.add('hidden');
    window.body.classList.remove('modal-open');
    window.resetCommentArray();
    window.bigPictureComentsLoader.removeEventListener('click', window.renderGroupCommentsHandler);
    cancelBigPhoto.removeEventListener('click', cancelPhotoHandler);
    document.removeEventListener('keydown', escHandler);
  }
  window.clickBigPhotoHandler = function () {
    window.photoLinks = document.querySelectorAll('.picture');
    for (var i = 0; i < window.photoLinks.length; i++) {
      window.photoLinks[i].addEventListener('click', window.clickBigPhotosHandler);
    }
  };
})();
