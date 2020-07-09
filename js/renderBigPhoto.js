'use strict';

(function () {
  window.body = document.querySelector('body');
  window.bigPicture = document.querySelector('.big-picture');
  window.openBigPicture = function (photoObject) {
    window.bigPicture.classList.remove('hidden');
    var bigPictureImg = document.querySelector('.big-picture__img img');
    var bigPictureLikes = document.querySelector('.likes-count');
    var bigPictureDescription = document.querySelector('.social__caption');
    var bigPictureComentsCount = document.querySelector('.comments-count');
    var bigPictureComents = document.querySelector('.social__comments');
    var bigSocalPictureComents = document.querySelector('.social__comment-count');
    var bigPictureComentsLoader = document.querySelector('.comments-loader');
    bigPictureImg.src = photoObject.url;
    bigPictureLikes.textContent = photoObject.likes;
    bigPictureDescription.textContent = photoObject.description;
    bigPictureComentsCount.textContent = photoObject.comments.length;
    bigPictureComents.innerHTML = '';
    for (var i = 0; i < photoObject.comments.length; i++) {
      bigPictureComents.appendChild(window.generateCommentBigPicture(photoObject.comments[i]));
    }
    bigSocalPictureComents.classList.add('hidden');
    bigPictureComentsLoader.classList.add('hidden');
    window.body.classList.add('modal-open');
  };
})();
