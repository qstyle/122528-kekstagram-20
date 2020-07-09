'use strict';
(function () {
  var blockPhoto = window.generateBlockPhoto(25);
  var picturesContainer = document.querySelector('.pictures');
  var photoElementBlock = document.querySelector('#picture').content;
  var renderBlockPhoto = function (rednerBlock) {
    var photoElementClone = photoElementBlock.cloneNode(true);
    photoElementClone.querySelector('.picture__img').src = rednerBlock.url;
    photoElementClone.querySelector('.picture__likes').textContent = rednerBlock.likes;
    photoElementClone.querySelector('.picture__comments').textContent = rednerBlock.comments.length;
    return photoElementClone;
  };

  // рендер всех блоков
  function rednerBlockAll() {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < blockPhoto.length; i++) {
      fragment.appendChild(renderBlockPhoto(blockPhoto[i]));
    }
    return fragment;
  }
  picturesContainer.appendChild(rednerBlockAll());
  window.blockPhoto = blockPhoto;
})();
