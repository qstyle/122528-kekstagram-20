
'use strict';

// функция рандома
var generateRandom = function (randomMin, randomMax) {
  var randomValue = Math.round((Math.random() * randomMax));
  if (randomValue < randomMin) {
    randomValue += randomMin;
  }
  return randomValue;
};

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
    message.join('');
  }
  return message;
}

// генерация коментариев

function generateComments() {
  var comments = [];
  var comment = {};
  var generateComment = generateRandom(0, 5);
  var nameComent = [
    'name1', 'name2', 'name3', 'name4', 'name5', 'name6'
  ];
  var randomAvatar = [1, 2, 3, 4, 5, 6];
  comment = {
    avatar: 'img/avatar-' + randomAvatar[generateComment] + '.svg',
    message: generateMessage(),
    name: nameComent[generateComment]
  };
  for (var i = 0; i < generateRandom(1, 6); i++) {
    comments.push(comment);
  }
  return comments;
}

// гернерация фото
var blockPhoto = [];
function generateBlockPhoto(numberOfCopies) {
  for (var i = 0; i < numberOfCopies; i++) {
    var blockPhotoObj = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'blablabla',
      likes: generateRandom(15, 250),
      comments: generateComments()
    };
    blockPhoto.push(blockPhotoObj);
  }
  return blockPhoto;

}
generateBlockPhoto(25);

// создание блока фото
function renderPhoto() {
  var picturesContainer = document.querySelector('.pictures');
  var photoElementBlock = document.querySelector('#picture') .content.querySelector('.picture');
  function renderBlockPhoto(rednerBlock) {
    var photoElementClone = photoElementBlock.cloneNode(true);
    photoElementClone.querySelector('.picture__img').src = rednerBlock.url;
    photoElementClone.querySelector('.picture__likes').textContent = rednerBlock.likes;
    photoElementClone.querySelector('.picture__comments').textContent = rednerBlock.comments.length;
    return photoElementClone;
  }

  // рендер всех блоков
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < blockPhoto.length; i++) {
    fragment.appendChild(renderBlockPhoto(blockPhoto[i]));
  }
  picturesContainer.appendChild(fragment);
}
renderPhoto();

