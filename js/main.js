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


// гернерация фото
var generateBlockPhoto = function () {
  var blockPhoto = [];
  for (var i = 0; i < 25; i++) {
    var blockPhotoObj = {
      url: 'photos/' + (i + 1) + '.jpg',
      description: 'blablabla',
      likes: generateRandom(15, 250),
      comments: 'generatePhotoComment()'
    };
    blockPhoto[i] = blockPhotoObj;

  }
  console.log(blockPhoto);
};
generateBlockPhoto();
