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

    window.renderGroupComments = function () {
      var groupCommentsArray = photoObject.comments;
      if (groupCommentsArray.length >= 5) {
        bigPictureComentsLoader.classList.remove('hidden');
        for (var i = 0; i < 5; i++) {
          bigPictureComents.appendChild(window.generateCommentBigPicture(groupCommentsArray[0]));
          groupCommentsArray.splice(0, 1);
        }
      }
      if (groupCommentsArray.length < 5) {
        for (var y = 0; y < groupCommentsArray.length; y++) {
          bigPictureComents.appendChild(window.generateCommentBigPicture(groupCommentsArray[0]));
          groupCommentsArray.splice(0, 1);
        }
      } if (groupCommentsArray.length === 0) {
        bigPictureComentsLoader.classList.add('hidden');
        groupCommentsArray = photoObject.comments;
      }
    };

    window.renderGroupComments();
    bigPictureComentsLoader.addEventListener('click', window.renderGroupComments);
    bigSocalPictureComents.classList.add('hidden');
    window.body.classList.add('modal-open');
  };

})();
