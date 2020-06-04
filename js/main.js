'use strict';

// функция рандома
var generateRandom = function (randomMax) {
  var randomValue = Math.round((Math.random() * randomMax));
  return randomValue;
};


// гернерация фото
var generateBlockPhoto = function () {
  var BlockPhoto = [];

  for (var i = 1; i <= 25; i++) {
    
    var BlockPhotoObj = {
      url: 'photos/' + (i) + '.jpg',
      description: 'blablabla',
      likes: generateRandom(250),
      comments: 'randomComent()'
    };
    BlockPhoto[i] = BlockPhotoObj;
    BlockPhoto.push(i);
  }
  console.log(BlockPhoto);
};
generateBlockPhoto();
