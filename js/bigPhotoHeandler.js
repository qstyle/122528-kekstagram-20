'use strict';
(function () {
  function findBigPhoto(pictureSrcNum) {
    return window.loadData.find(function find(photo) {
      return photo.url.indexOf(pictureSrcNum) >= 0;
    });
  }

  function escPressHandler(evt) {
    if (evt.keyCode === 27) {
      cancelPhotoHandler();
    }
  }

  var bigPhotoCancelNode = document.querySelector('#picture-cancel');
  window.clickBigPhotosHandler = function (evt) {
    evt.preventDefault();
    document.addEventListener('keydown', escPressHandler);
    bigPhotoCancelNode.addEventListener('click', cancelPhotoHandler);
    var picturesSrc = evt.currentTarget.querySelector('img').src.split('/');
    var picturesSrcIndex = picturesSrc[picturesSrc.length - 1];
    var picture = findBigPhoto(picturesSrcIndex);
    window.openBigPicture(picture);

  };

  function cancelPhotoHandler() {
    window.bigPicture.classList.add('hidden');
    window.body.classList.remove('modal-open');
    window.resetCommentArray();
    window.bigPictureComentsLoader.removeEventListener('click', window.renderGroupCommentsHandler);
    bigPhotoCancelNode.removeEventListener('click', cancelPhotoHandler);
    document.removeEventListener('keydown', escPressHandler);
  }
  window.clickBigPhotoHandler = function () {
    window.photoLinks = document.querySelectorAll('.picture');
    for (var i = 0; i < window.photoLinks.length; i++) {
      window.photoLinks[i].addEventListener('click', window.clickBigPhotosHandler);
    }
  };
})();
