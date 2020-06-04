'use strict';

// функция рандома
var generateRandom = function (randomMin, randomMax) {
  var randomValue = Math.round((Math.random() * randomMax));
  if (randomValue < randomMin) {
    randomValue += randomMin;
  }
  return randomValue;
};
// генерация имени
var generateName = function () {
  var nameComent = [
    'name1', 'name2', 'name3', 'name4', 'name5', 'name6'
  ];
  var NameRandom = nameComent[generateRandom(1, 6)];
  return NameRandom;
};

// генерация сообщения
var generateMessage = function () {
  var messageComent = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  var messageRandom = messageComent[generateRandom(1, 6)];
  return messageRandom;
};
// генерация аватара
var generateAvatar = function () {
  var avatarRandom = 'img/avatar-' + generateRandom(1, 6) + '.svg';
  return avatarRandom;
};

// генерация коментариев
var generateComments = function () {
  var comment = {
    avatar: generateAvatar(),
    message: generateMessage(),
    name: generateName()
  };
  return comment;
};

// гернерация фото
var generateBlockPhoto = function () {
  var blockPhoto = [];
  for (var i = 0; i < 25; i++) {
    var blockPhotoObj = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'blablabla',
      likes: generateRandom(15, 250),
      comments: generateComments()
    };
    blockPhoto[i] = blockPhotoObj;

  }
  console.log(blockPhoto);
};
generateBlockPhoto();
