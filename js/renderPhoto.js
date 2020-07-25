'use strict';

(function () {
  var picturesContainer = document.querySelector('.pictures');
  var photoElementBlock = document.querySelector('#picture').content;
  function renderBlockPhoto(loadData) {
    var photoElementClone = photoElementBlock.cloneNode(true);
    photoElementClone.querySelector('.picture__img').src = loadData.url;
    photoElementClone.querySelector('.picture__likes').textContent = loadData.likes;
    photoElementClone.querySelector('.picture__comments').textContent = loadData.comments.length;
    return photoElementClone;
  }

  function rednerBlockAll(loadData) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < loadData.length; i++) {
      fragment.appendChild(renderBlockPhoto(loadData[i]));
    }
    return fragment;
  }
  window.addPhotoPage = function (loadData, clearPhoto) {
    if (clearPhoto) {
      clearPhotos();
    }
    picturesContainer.appendChild(rednerBlockAll(loadData));
    window.clickBigPhotoHandler();
  };

  function clearPhotos() {
    for (var i = 0; i < window.photoLinks.length; i++) {
      window.photoLinks[i].removeEventListener('click', window.clickBigPhotosHandler);
      picturesContainer.removeChild(window.photoLinks[i]);
    }
  }
})();
