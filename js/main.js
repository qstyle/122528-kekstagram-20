'use strict';

// функция рандома
var generateRandom = function (randomMin, randomMax) {
  var randomValue = Math.round((Math.random() * randomMax));
  if (randomValue < randomMin) {
    randomValue += randomMin;
  }
  return randomValue;
};
var comment = {};
// генерация коментариев
function generateComments() {
  var randomComment = generateRandom(0, 5);
  var messageComent = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  var nameComent = [
    'name1', 'name2', 'name3', 'name4', 'name5', 'name6'
  ];
  var randomAvatar = [1, 2, 3, 4, 5, 6];
  comment = {
    avatar: 'img/avatar-' + randomAvatar[randomComment] + '.svg',
    message: messageComent[randomComment],
    name: nameComent[randomComment]
  };
  return comment;
}
var blockPhoto = [];
// гернерация фото
var generateBlockPhoto = function () {

  for (var i = 0; i < 25; i++) {
    var comments = generateComments();
    var blockPhotoObj = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'blablabla',
      likes: generateRandom(15, 250),
      commentsObj: comments
    };
    blockPhoto[i] = blockPhotoObj;

  }
  return (blockPhoto);
};


generateBlockPhoto();

// создание блока фото
var picturesContainer = document.querySelector('.pictures');
var photoElementBlock = document.querySelector('#picture') .content.querySelector('.picture');

function rendrBlockPhoto(rednerBlock) {
  var photoElementClone = photoElementBlock.cloneNode(true);
  picturesContainer.appendChild(photoElementClone);
  photoElementClone.querySelector('.picture__img').src = rednerBlock.url;
  photoElementClone.querySelector('.picture__likes').textContent = rednerBlock.likes;
  photoElementClone.querySelector('.picture__comments').textContent = rednerBlock.commentsObj.avatar + rednerBlock.commentsObj.message + rednerBlock.commentsObj.name;
  return photoElementClone;
}


// рендер всех блоков
var fragment = document.createDocumentFragment();
for (var i = 0; i < blockPhoto.length; i++) {
  fragment.appendChild(rendrBlockPhoto(blockPhoto[i]));
}

picturesContainer.appendChild(fragment);
