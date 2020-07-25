'use strict';
(function () {
  var filterBar = document.querySelector('.img-filters');
  var buttonFilter = document.querySelectorAll('.img-filters__button');
  var buttonFilterDefault = document.querySelector('#filter-default');
  var buttonFilterRandom = document.querySelector('#filter-random');
  var buttonFilterDiscussed = document.querySelector('#filter-discussed');

  window.renderFilterBar = function () {
    filterBar.classList.remove('img-filters--inactive');
  };

  function debounce(func, wait, immediate) {
    var timeout;
    return function (evt) {
      var context = evt;
      var args = arguments;
      function later() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      }
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }

  for (var i = 0; i < buttonFilter.length; i++) {
    buttonFilter[i].addEventListener('click', debounce(applyFilterHandler, 500, 0));
  }


  function applyFilterHandler(evt) {
    switch (evt.target.id) {
      case buttonFilterDefault.id:
        window.addPhotoPage(window.loadData, 1);
        break;
      case buttonFilterRandom.id:
        generateRandomFilter();
        break;
      case buttonFilterDiscussed.id:
        generateDiscussedFilter();
        break;
    }

    for (var k = 0; k < buttonFilter.length; k++) {
      if (evt.target.id === buttonFilter[k].id) {
        buttonFilter[k].classList.add('img-filters__button--active');
      } else {
        buttonFilter[k].classList.remove('img-filters__button--active');
      }
    }
  }

  function generateRandomFilter() {
    var randomPhotoArrayIndexes = [];
    for (var j = 0; randomPhotoArrayIndexes.length < 10; j++) {
      var randomPhotoIndex = window.generateRandom(0, window.loadData.length - 1);
      if (!(randomPhotoArrayIndexes.includes(randomPhotoIndex))) {
        randomPhotoArrayIndexes.push(randomPhotoIndex);
      }
    }
    var randomPhotoArrays = randomPhotoArrayIndexes.map(function (element) {
      return window.loadData[element];
    });
    window.addPhotoPage(randomPhotoArrays, 1);
  }

  function generateDiscussedFilter() {
    var discussedArrayPhotos = window.loadData.slice();
    discussedArrayPhotos.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });
    window.addPhotoPage(discussedArrayPhotos, 1);
  }
})();
