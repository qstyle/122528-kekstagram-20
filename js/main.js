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
  for (var i = 0; i <= photoObject.comments.length; i++) {
    bigPictureComents.appendChild(generateCommentBigPicture(photoObject.comments[i]));
  }
  bigSocalPictureComents.classList.add('hidden');
  bigPictureComentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
}
openBigPicture(blockPhoto[0]);
