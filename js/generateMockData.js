'use strict';

(function () {
  function generateMessage() {
    var messages = [];
    var MESSAGE_COMMENTS = [
      'Всё отлично!',
      'В целом всё неплохо. Но не всё.',
      'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
      'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
      'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
      'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
    ];
    for (var i = 0; i < window.generateRandom(1, 2); i++) {
      var randomMessageIndex = window.generateRandom(0, 5);
      messages.push(MESSAGE_COMMENTS[randomMessageIndex]);
    }
    return messages.join('');
  }

  function generateComment() {
    var comment = {};
    var AVATAR = [1, 2, 3, 4, 5, 6];
    var USER_NAMES = [
      'name1', 'name2', 'name3', 'name4', 'name5', 'name6'
    ];
    comment = {
      avatar: 'img/avatar-' + AVATAR[window.generateRandom(0, 5)] + '.svg',
      message: generateMessage(),
      name: USER_NAMES[window.generateRandom(0, 5)]
    };
    return comment;
  }

  function generateComments() {
    var comments = [];
    for (var i = 0; i < window.generateRandom(1, 2); i++) {
      comments.push(generateComment());
    }
    return comments;
  }
  var photosArray = [];

  window.generateBlockPhoto = function (numberOfCopies) {
    for (var i = 0; i < numberOfCopies; i++) {
      var blockPhotoObj = {
        url: 'photos/' + (i + 1) + '.jpg',
        description: 'blablabla',
        likes: window.generateRandom(15, 250),
        comments: generateComments()
      };
      photosArray.push(blockPhotoObj);
    }
    return photosArray;
  };
}
)();
