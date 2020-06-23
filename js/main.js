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
  var message = [];
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
    message.push(messageComent[randomMessageIndex]);
  }
  return message.join('');
}

// генерация коментариев
function generateComment() {
  var comment = {};
  var randomAvatar = [1, 2, 3, 4, 5, 6];
  var nameComent = [
    'name1', 'name2', 'name3', 'name4', 'name5', 'name6'
  ];
  comment = {
    avatar: 'img/avatar-' + randomAvatar[generateRandom(0, 5)] + '.svg',
    message: generateMessage(),
    name: nameComent[generateRandom(0, 5)]
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
  var photoArray = [];
  for (var i = 0; i < numberOfCopies; i++) {
    var blockPhotoObj = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'blablabla',
      likes: generateRandom(15, 250),
      comments: generateComments()
    };
    photoArray.push(blockPhotoObj);
  }
  return photoArray;
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
function validityHashtag(hashtag) {
  var re = /^#[a-zA-ZА-Яа-я0-9]*$/;
  var inputArea = document.querySelector('.text__hashtags');
  for (var i = 0; i < hashtag.length; i++) {
    if (!re.test(hashtag[i])) {
      inputArea.setCustomValidity('alarm alarm');
    } else if (hashtag[i].length > 20 || hashtag[i].length < 2) {
      inputArea.setCustomValidity('alarm alarm2');
    } else if (!(hashtag.indexOf(hashtag[i]) === hashtag.lastIndexOf(hashtag[i]))) {
      inputArea.setCustomValidity('alarm alarm3');
    } else if (hashtag.length > 5) {
      inputArea.setCustomValidity('alarm alarm4');
    } else {
      return true;
    }
  }

}

// увеличение и уменьшение картинки в редакторе

function appZoomer(value) {
  var pictureUpLoad = document.querySelector('.img-upload__preview img');
  document.querySelector('.scale__control--value').value = value + '%';
  pictureUpLoad.style = 'transform: scale(' + value / 100 + ')';
}


function zoomer(valueZoomer) {
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
// функция фильтра
function radioEffect(effet) {
  var picture = document.querySelector('.img-upload__preview img');
  if (effet === 'effect-chrome') {
    picture.className = ('');
    picture.classList.add('effects__preview--chrome');
  }
  if (effet === 'effect-sepia') {
    picture.className = ('');
    picture.classList.add('effects__preview--sepia');
  }
  if (effet === 'effect-marvin') {
    picture.className = ('');
    picture.classList.add('effects__preview--marvin');
  }
  if (effet === 'effect-phobos') {
    picture.className = ('');
    picture.classList.add('effects__preview--phobos');
  }
  if (effet === 'effect-heat') {
    picture.className = ('');
    picture.classList.add('effects__preview--heat');
  }
  if (effet === 'effect-none') {
    picture.className = ('');
  }
}
// загрузка фотографии
function upLoadPhoto(evt) {
  var upLoadModal = document.querySelector('.img-upload__overlay');
  var upLoadButton = document.querySelector('#upload-file');
  var scrollInput = document.querySelector('.effect-level__pin');
  var scrollInputValue = document.querySelector('.effect-level__value').value;
  var zoomContorlSmiller = document.querySelector('.scale__control--smaller');
  var zoomControllBigger = document.querySelector('.scale__control--bigger');
  var InputHashtag = document.querySelector('.text__hashtags');

  if (evt.target.id === 'upload-file') {
    upLoadModal.classList.remove('hidden');
    var body = document.querySelector('body');
    body.classList.add('modal-open');
    zoomContorlSmiller.addEventListener('click', function zoomSmiller() {
      var valueZoomer = -1;
      return zoomer(valueZoomer);
    });
    zoomControllBigger.addEventListener('click', function zoomBigger() {
      var valueZoomer = 1;
      zoomer(valueZoomer);
    });
  }
  // скролл фильтра
  scrollInput.addEventListener('mousedown', function (evtevt) {
    evt.preventDefault();
    var startScroll = evtevt.clientX;
    document.addEventListener('mousemove', scrollMove);
    document.addEventListener('mouseup', scrollUp);
    function scrollMove(moveEvt) {
      moveEvt.preventDefault();
      var move = startScroll - moveEvt.clientX;
      startScroll = moveEvt.clientX;
      var scrolPosition = scrollInput.offsetLeft - move;
      if (scrolPosition < 0) {
        scrolPosition = 0;
      }
      if (scrolPosition > 450) {
        scrolPosition = 450;
      }
      var depth = document.querySelector('.effect-level__depth');
      scrollInput.style.left = scrolPosition + 'px';
      depth.style.width = scrolPosition + 'px';
      scrollInputValue.value = scrolPosition;
    }
    function scrollUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', scrollMove);
      document.removeEventListener('mouseup', scrollUp);
    }
  });
  // применение фильтра
  if (evt.target.classList.contains('effects__radio')) {
    radioEffect(evt.target.id);
  }

  if (evt.target.classList.contains('text__hashtags')) {
    var hashtag = document.querySelector('.text__hashtags').value;
    var hashtagArray = hashtag.split(' ');
    validityHashtag(hashtagArray);
  }
}
var upLoadForm = document.querySelector('#upload-select-image');
upLoadForm.addEventListener('change', function upLoadEvent(evt) {
  evt.preventDefault();
  upLoadPhoto(evt);
});

