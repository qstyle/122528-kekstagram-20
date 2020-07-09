'use strict';
(function () {
  window.generateCommentBigPicture = function generateCommentBigPicture(arrayComment) {
    var elementCommentBigPicture = document.querySelector('#big_picture').content;
    var bigPictureClone = elementCommentBigPicture.cloneNode(true);
    bigPictureClone.querySelector('.social__picture').src = arrayComment.avatar;
    bigPictureClone.querySelector('.social__picture').alt = arrayComment.name;
    bigPictureClone.querySelector('.social__text').textContent = arrayComment.message;
    return bigPictureClone;
  };
})();
