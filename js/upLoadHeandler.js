'use strict';

(function () {
  var buttonClose = document.querySelector('.img-upload__cancel');
  var inputArea = document.querySelector('.text__hashtags');
  var zoomContorlSmiller = document.querySelector('.scale__control--smaller');
  var zoomControllBigger = document.querySelector('.scale__control--bigger');
  var inputComment = document.querySelector('.text__description');
  window.upLoadPhoto = function (evt) {
    if (evt.target.id === 'upload-file') {
      window.scrollInput.addEventListener('mousedown', window.pressMouse);
      buttonClose.addEventListener('click', closeModal);
      window.upLoadModal.classList.remove('hidden');
      window.body.classList.add('modal-open');
      zoomContorlSmiller.addEventListener('click', window.zoomSmillerHandler);
      zoomControllBigger.addEventListener('click', window.zoomBiggerHandler);
    }

    if (evt.target.classList.contains('effects__radio')) {
      window.effect = evt.target.value;
      window.applyEffect(100);
      window.resetSlider();
    }
    if (evt.target.classList.contains('text__description')) {
      var comment = inputComment.value;
      if (comment.length === 0) {
        inputComment.setCustomValidity('');
      } else {
        if (comment.length > 140) {
          inputComment.setCustomValidity('длина комментария не может составлять больше 140 символов');
        }
      }
    }

    // валидация хэщтэга
    if (evt.target.classList.contains('text__hashtags')) {
      var hashtags = inputArea.value;
      var hashtagArray = hashtags.split(' ');
      if ((hashtagArray.length === 1 && hashtagArray[0] === '')) {
        inputArea.setCustomValidity('');
      } else {
        var hashtagValidity = window.validiteHashtag(hashtagArray);
        switch (hashtagValidity) {
          case 0:
            inputArea.setCustomValidity('');
            break;
          case 1:
            inputArea.style = 'background-color: white';
            inputArea.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
            break;
          case 2:
            inputArea.style = 'background-color: white';
            inputArea.setCustomValidity('хеш-тег не может состоять только из одной решётки, максимальная длина одного хэш-тега 20 символов, включая решётку');
            break;
          case 3:
            inputArea.style = 'background-color: white';
            inputArea.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
            break;
          case 4:
            inputArea.style = 'background-color: white';
            inputArea.setCustomValidity('нельзя указать больше пяти хэш-тегов');
            break;
        }
      }
    }
  };
  function closeModal() {
    window.upLoadModal.classList.add('hidden');
    window.scrollInput.removeEventListener('mousedown', undefined);
    window.body.classList.remove('modal-open');
    window.picture.className = 'effects__preview--none';
    window.picture.style = '';
    inputArea.setCustomValidity('');
    window.resetSlider();
    window.effectLevel.classList.add('hidden');
    zoomContorlSmiller.removeEventListener('click', window.zoomSmillerHandler);
    zoomControllBigger.removeEventListener('click', window.zoomBiggerHandler);
    buttonClose.removeEventListener('click', closeModal);
  }
})();
