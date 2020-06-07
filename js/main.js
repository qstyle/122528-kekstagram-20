'use strict';

// функция рандома
var generateRandom = function (randomMin, randomMax) {
  var randomValue = Math.round((Math.random() * randomMax));
  if (randomValue < randomMin) {
    randomValue += randomMin;
  }
  return randomValue;
};

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
  var comment = {
    avatar: 'img/avatar-' + randomAvatar[randomComment] + '.svg',
    message: messageComent[randomComment],
    name: nameComent[randomComment]
  };
  return comment;
}

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
