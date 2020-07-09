'use strict';
(function () {
  window.validiteHashtag = function (hashtags) {
    for (var y = 0; y < hashtags.length; y++) {
      hashtags[y] = hashtags[y].toLowerCase();
    }
    var re = /^#[a-zA-ZА-Яа-я0-9]*$/;
    for (var i = 0; i < hashtags.length; i++) {
      var validStatus = 0;
      if (!re.test(hashtags[i])) {
        validStatus = 1;
        return validStatus;
      } else if (hashtags[i].length > 20 || hashtags[i].length < 2) {
        validStatus = 2;
        return validStatus;
      } else if (!(hashtags.indexOf(hashtags[i]) === hashtags.lastIndexOf(hashtags[i]))) {
        validStatus = 3;
        return validStatus;
      } else if (hashtags.length > 5) {
        validStatus = 4;
        return validStatus;
      } else {
        validStatus = 0;
        return validStatus;
      }
    }
    return validStatus;
  };
})();
