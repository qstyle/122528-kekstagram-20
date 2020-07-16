'use strict';
(function () {
  var filterBar = document.querySelector('.img-filters');
  var buttonFilterDefault = document.querySelector('#filter-default');
  var buttonFilterRandom = document.querySelector('#filter-random');
  var buttonFilterDiscussed = document.querySelector('#filter-discussed');
  window.renderFilterBar = function () {
    filterBar.classList.remove('img-filters--inactive');
  };

  buttonFilterDefault.addEventListener('click', function applayDefaultFilter() {
    window.addPhotoPage(window.loadData, 1);
    buttonFilterDefault.classList.add('img-filters__button--active');
    buttonFilterRandom.classList.remove('img-filters__button--active');
    buttonFilterDiscussed.classList.remove('img-filters__button--active');
  });

  buttonFilterRandom.addEventListener('click', function applayRandomFilter() {
    generateRandomFilter();
    buttonFilterDefault.classList.remove('img-filters__button--active');
    buttonFilterRandom.classList.add('img-filters__button--active');
    buttonFilterDiscussed.classList.remove('img-filters__button--active');
  });

  buttonFilterDiscussed.addEventListener('click', function applayDiscussedFilter() {
    generateDiscussedFilter();
    buttonFilterDefault.classList.remove('img-filters__button--active');
    buttonFilterRandom.classList.remove('img-filters__button--active');
    buttonFilterDiscussed.classList.add('img-filters__button--active');
  });

  function generateRandomFilter() {
    var randomPhotoArraysIndex = [];
    for (var i = 0; randomPhotoArraysIndex.length < 10; i++) {
      var randomPhotoIndex = window.generateRandom(0, window.loadData.length);
      if (!(randomPhotoArraysIndex.includes(randomPhotoIndex))) {
        randomPhotoArraysIndex.push(randomPhotoIndex);
      }
    }
    var randomPhotoArrays = [];
    for (var j = 0; j < randomPhotoArraysIndex.length; j++) {
      randomPhotoArrays.push(window.loadData[randomPhotoArraysIndex[j]]);
    }
    window.addPhotoPage(randomPhotoArrays, 1);
  }
  function generateDiscussedFilter() {
    var discussedArray = window.loadData;
    discussedArray.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });
    window.addPhotoPage(discussedArray, 1);
  }
})();
