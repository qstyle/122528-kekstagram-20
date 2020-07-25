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

    var groupArrayComments = photoObject.comments.slice();
    window.resetCommentArray = function () {
      groupArrayComments.splice(0, groupArrayComments.length);
      groupArrayComments = photoObject.comments.slice();
    };

    window.renderGroupCommentsHandler = function () {
      var fragment = document.createDocumentFragment();
      window.bigPictureComentsLoader.classList.remove('hidden');
      var groupComments = groupArrayComments.splice(0, 5);
      groupComments.forEach(function (groupComment) {
        fragment.appendChild(window.generateCommentBigPicture(groupComment));
        bigPictureComents.appendChild(fragment);
      });
      if (groupArrayComments.length === 0) {
        window.bigPictureComentsLoader.classList.add('hidden');
      }
    };

    window.renderGroupCommentsHandler();
    window.bigPictureComentsLoader.addEventListener('click', window.renderGroupCommentsHandler);
    bigSocalPictureComents.classList.add('hidden');
    window.body.classList.add('modal-open');
  };

})();
