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
    window.addPhotoPage(window.loadData);
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
    buttonFilterDefault.classList.remove('img-filters__button--active');
    buttonFilterRandom.classList.remove('img-filters__button--active');
    buttonFilterDiscussed.classList.add('img-filters__button--active');
  });
  function generateRandomFilter() {
    var randomPhotoArrays = [];
    for (var i = 0; i < 10; i++) {
      randomPhotoArrays.push(window.loadData[window.generateRandom(0, window.loadData.length)]);
    }
    window.addPhotoPage(randomPhotoArrays);
  }

})();
