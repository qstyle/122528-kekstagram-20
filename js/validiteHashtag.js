'use strict';
(function () {
  window.validiteHashtag = function (hashtags) {
    for (var y = 0; y < hashtags.length; y++) {
      hashtags[y] = hashtags[y].toLowerCase();
    }
    var re = /^#[a-zA-ZА-Яа-я0-9]*$/;
    var validStatus = 0;
    for (var i = 0; i < hashtags.length; i++) {
      if (!re.test(hashtags[i])) {
        validStatus = 1;
      } else if (hashtags[i].length > 20 || hashtags[i].length < 2) {
        validStatus = 2;
      } else if (!(hashtags.indexOf(hashtags[i]) === hashtags.lastIndexOf(hashtags[i]))) {
        validStatus = 3;
      } else if (hashtags.length > 5) {
        validStatus = 4;
      }
    }
    return validStatus;
  };
})();
