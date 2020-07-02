'use strict';

// функция рандома
function generateRandom(randomMin, randomMax) {
  var randomValue = Math.round((Math.random() * randomMax));
  if (randomValue < randomMin) {
    randomValue += randomMin;
  }
  return randomValue;
}

// генерация сообщения коментария
function generateMessage() {
  var messages = [];
  var messageComent = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  for (var i = 0; i < generateRandom(1, 2); i++) {
    var randomMessageIndex = generateRandom(0, 5);
    messages.push(messageComent[randomMessageIndex]);
  }
  return messages.join('');
}

// генерация коментариев
function generateComment() {
  var comment = {};
  var randomAvatar = [1, 2, 3, 4, 5, 6];
  var nameComents = [
    'name1', 'name2', 'name3', 'name4', 'name5', 'name6'
  ];
  comment = {
    avatar: 'img/avatar-' + randomAvatar[generateRandom(0, 5)] + '.svg',
    message: generateMessage(),
    name: nameComents[generateRandom(0, 5)]
  };
  return comment;
}

function generateComments() {
  var comments = [];
  for (var i = 0; i < generateRandom(1, 2); i++) {
    comments.push(generateComment());
  }
  return comments;
}

// гернерация фото
function generateBlockPhoto(numberOfCopies) {
  var photosArray = [];
  for (var i = 0; i < numberOfCopies; i++) {
    var blockPhotoObj = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'blablabla',
      likes: generateRandom(15, 250),
      comments: generateComments()
    };
    photosArray.push(blockPhotoObj);
  }
  return photosArray;
}
var blockPhoto = generateBlockPhoto(25);

// создание блока фото
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

// генерация коментария для большого фото
function generateCommentBigPicture(arrayComment) {
  var elementCommentBigPicture = document.querySelector('#big_picture').content;
  var bigPictureClone = elementCommentBigPicture.cloneNode(true);
  bigPictureClone.querySelector('.social__picture').src = arrayComment.avatar;
  bigPictureClone.querySelector('.social__picture').alt = arrayComment.name;
  bigPictureClone.querySelector('.social__text').textContent = arrayComment.message;
  return bigPictureClone;
}

// отрисовка развернутой картинки
// eslint-disable-next-line no-unused-vars
function openBigPicture(photoObject) {
  var bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');
  var bigPictureImg = document.querySelector('.big-picture__img img');
  var bigPictureLikes = document.querySelector('.likes-count');
  var bigPictureDescription = document.querySelector('.social__caption');
  var bigPictureComentsCount = document.querySelector('.comments-count');
  var bigPictureComents = document.querySelector('.social__comments');
  var bigSocalPictureComents = document.querySelector('.social__comment-count');
  var bigPictureComentsLoader = document.querySelector('.comments-loader');
  var body = document.querySelector('body');
  bigPictureImg.src = photoObject.url;
  bigPictureLikes.textContent = photoObject.likes;
  bigPictureDescription.textContent = photoObject.description;
  bigPictureComentsCount.textContent = photoObject.comments.length;
  for (var i = 0; i < photoObject.comments.length; i++) {
    bigPictureComents.appendChild(generateCommentBigPicture(photoObject.comments[i]));
  }
  bigSocalPictureComents.classList.add('hidden');
  bigPictureComentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
}


// валидация хэщтэга
function validiteHashtag(hashtags) {
  for (var y = 0; y < hashtags.length; y++) {
    hashtags[y] = hashtags[y].toLowerCase();
  }
  var re = /^#[a-zA-ZА-Яа-я0-9]*$/;
  for (var i = 0; i < hashtags.length; i++) {
    var validStatus = 0;
    if (!re.test(hashtags[i])) {
      validStatus = 1;
      return validStatus;
    } else if (hashtags[i].length > 20 || hashtags[i].length < 2) {
      validStatus = 2;
      return validStatus;
    } else if (!(hashtags.indexOf(hashtags[i]) === hashtags.lastIndexOf(hashtags[i]))) {
      validStatus = 3;
      return validStatus;
    } else if (hashtags.length > 5) {
      validStatus = 4;
      return validStatus;
    } else {
      validStatus = 0;
      return validStatus;
    }
  }
  return validStatus;
}
// увеличение и уменьшение картинки в редакторе

function appZoomer(value) {
  document.querySelector('.scale__control--value').value = value + '%';
  picture.style = 'transform: scale(' + value / 100 + ')';
}

function zoomerPhoto(valueZoomer) {
  var value = parseFloat(document.querySelector('.scale__control--value').value);
  value = value + valueZoomer * 25;
  if (value >= 100) {
    value = 100;
  }
  if (value <= 25) {
    value = 25;
  }
  appZoomer(value);
  return value;
}

// scroll
var startScroll;
var effectLevel = document.querySelector('.img-upload__effect-level');
var scrollInput = document.querySelector('.effect-level__pin');
var upLoadModal = document.querySelector('.img-upload__overlay');
var buttonClose = document.querySelector('.img-upload__cancel');
var picture = document.querySelector('.img-upload__preview img');
var inputWidth;
var body = document.querySelector('body');
function pressMouse(evtevt) {
  evtevt.preventDefault();
  startScroll = evtevt.clientX;
  effectLevel.addEventListener('mousemove', scrollMove);
  effectLevel.addEventListener('mouseup', scrollUp);
  effectLevel.addEventListener('mouseleave', scrollUp);
  return startScroll;
}

function scrollUp(upEvt) {
  upEvt.preventDefault();
  effectLevel.removeEventListener('mousemove', scrollMove);
  effectLevel.removeEventListener('mouseup', scrollUp);
}

function closeModal() {
  upLoadModal.classList.add('hidden');
  scrollInput.removeEventListener('mousedown', undefined);
  buttonClose.removeEventListener('click', closeModal);
  body.classList.remove('modal-open');
}

// загрузка фотографии
var effect;
function upLoadPhoto(evt) {
  var zoomContorlSmiller = document.querySelector('.scale__control--smaller');
  var zoomControllBigger = document.querySelector('.scale__control--bigger');
  if (evt.target.id === 'upload-file') {
    scrollInput.addEventListener('mousedown', pressMouse);
    buttonClose.addEventListener('click', closeModal);
    upLoadModal.classList.remove('hidden');
    body.classList.add('modal-open');
    zoomContorlSmiller.addEventListener('click', function zoomSmiller() {
      zoomerPhoto(-1);
    });
    zoomControllBigger.addEventListener('click', function zoomBigger() {
      zoomerPhoto(1);
    });
  }

  // применение фильтра
  if (evt.target.classList.contains('effects__radio')) {
    effect = evt.target.value;
    applyEffect(100);
    resetSlider();
  }

  // валидация хэщтэга
  if (evt.target.classList.contains('text__hashtags')) {
    var hashtags = document.querySelector('.text__hashtags').value;
    var hashtagArray = hashtags.split(' ');
    var inputArea = document.querySelector('.text__hashtags');
    if ((hashtagArray.length === 1 && hashtagArray[0] === '')) {
      inputArea.setCustomValidity('');
    } else {
      var hashtagValidity = validiteHashtag(hashtagArray);
      if (hashtagValidity === 0) {
        inputArea.style = 'background-color: green';
        inputArea.setCustomValidity('');
      }
      if (validiteHashtag(hashtagArray) === 1) {
        inputArea.style = 'background-color: white';
        inputArea.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
      }
      if (validiteHashtag(hashtagArray) === 2) {
        inputArea.style = 'background-color: white';
        inputArea.setCustomValidity('хеш-тег не может состоять только из одной решётки, максимальная длина одного хэш-тега 20 символов, включая решётку');
      }
      if (validiteHashtag(hashtagArray) === 3) {
        inputArea.style = 'background-color: white';
        inputArea.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
      }
      if (validiteHashtag(hashtagArray) === 4) {
        inputArea.style = 'background-color: white';
        inputArea.setCustomValidity('нельзя указать больше пяти хэш-тегов');
      }
    }
  }
}

// возвращение слайдера
function resetSlider() {
  var depth = document.querySelector('.effect-level__depth');
  scrollInput.style = 'left:' + inputWidth + '';
  depth.style = 'width:' + inputWidth + '';
}

function applyEffect(scrolMove) {
  picture.className = ('');
  effectLevel.classList.remove('hidden');
  switch (effect) {
    case 'chrome':
      picture.classList.add('effects__preview--chrome');
      picture.style = 'filter: grayscale(' + scrolMove / 100 + ')';
      break;
    case 'sepia':
      picture.classList.add('effects__preview--sepia');
      picture.style = 'filter: sepia(' + scrolMove / 100 + ')';
      break;
    case 'marvin':
      picture.classList.add('effects__preview--marvin');
      picture.style = 'filter: invert(' + scrolMove + '%)';
      break;
    case 'phobos':
      picture.classList.add('effects__preview--phobos');
      var phobosLevel = scrolMove * 3 / 100;
      picture.style = 'filter: blur(' + phobosLevel + 'px)';
      break;
    case 'heat':
      var heatLevel = scrolMove * 3 / 100;
      if (heatLevel < 1) {
        heatLevel = 1;
      }
      picture.classList.add('effects__preview--heat');
      picture.style = 'filter: brightness(' + heatLevel + ')';
      break;
    case 'none':
      effectLevel.classList.add('hidden');
      picture.style = '';
      break;
  }
}

function scrollMove(moveEvt) {
  moveEvt.preventDefault();
  var move = startScroll - moveEvt.clientX;
  inputWidth = document.querySelector('.effect-level__line').offsetWidth;
  startScroll = moveEvt.clientX;
  var scrollPosition = scrollInput.offsetLeft - move;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  if (scrollPosition > inputWidth) {
    scrollPosition = inputWidth;
  }
  var depth = document.querySelector('.effect-level__depth');
  scrollInput.style.left = scrollPosition + 'px';
  depth.style.width = scrollPosition + 'px';
  scrollPosition = scrollPosition * 100 / inputWidth;
  scrollInput.value = scrollPosition;
  return applyEffect(scrollPosition);
}

var upLoadForm = document.querySelector('#upload-select-image');
upLoadForm.addEventListener('change', function upLoadEvent(evt) {
  upLoadPhoto(evt);
});


