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
    window.bigPictureComentsLoader = document.querySelector('.comments-loader');
    bigPictureImg.src = photoObject.url;
    bigPictureLikes.textContent = photoObject.likes;
    bigPictureDescription.textContent = photoObject.description;
    bigPictureComentsCount.textContent = photoObject.comments.length;
    bigPictureComents.innerHTML = '';

    var groupCommentsArray = photoObject.comments.slice();
    window.resetCommentArray = function () {
      groupCommentsArray.splice(0, groupCommentsArray.length);
      groupCommentsArray = photoObject.comments.slice();
    };

    window.renderGroupComments = function () {
      var fragment = document.createDocumentFragment();
      window.bigPictureComentsLoader.classList.remove('hidden');
      var groupComments = groupCommentsArray.splice(0, 5);
      groupComments.forEach(function (groupComment) {
        fragment.appendChild(window.generateCommentBigPicture(groupComment));
        bigPictureComents.appendChild(fragment);
      });
      if (groupCommentsArray.length === 0) {
        window.bigPictureComentsLoader.classList.add('hidden');
      }
    };

    window.renderGroupComments();
    window.bigPictureComentsLoader.addEventListener('click', window.renderGroupComments);
    bigSocalPictureComents.classList.add('hidden');
    window.body.classList.add('modal-open');
  };

})();
