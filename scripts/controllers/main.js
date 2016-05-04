'use strict';

/**
 * @ngdoc function
 * @name ciscogithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ciscogithubioApp
 */
angular.module('devnetApp')
  .controller('MainCtrl', function ($scope, $log, $http, $routeParams, ProjectSvc) {


    var projectStats = {};
    var carouselItems =[];
    var title = ''
    
    //$log.info($routeParams);
    
    if ($routeParams.name == 'sample-code') {
        title = 'Sample Code'
    } else if ($routeParams.name == 'll') {
        title = 'Learning Labs Code'
    } else if ($routeParams.name == 'projects') {
        title = 'Projects'
    }
    
    $scope.pageTitle = title;
    
    $scope.predicate = 'title';
    $scope.reverse = false;

    ProjectSvc.getPosts($routeParams.name).success(function(data) {
      $scope.projects = data;
    });



    $scope.now = new Date();

    $scope.itemsPerPage = 6;

    $scope.sort = function(keyname){
      $scope.predicate = keyname;
      $scope.reverse = !$scope.reverse;
      // $log.info(keyname);
      // $log.info($scope.reverse);
    }

    $scope.reset = function(){
      $scope.searchProjects = '';
    };


    var initSlickCarousel = function(data) {
      /* Slick Carousel */

      $scope.carouselData = carouselItems;
      $scope.slickConfigLoaded = true;
      $scope.updateNumber1 = function () {
        $scope.slickConfigLoaded = false;
        $scope.number1[2] = '123';
        $scope.number1.push(Math.floor((Math.random() * 10) + 100));
        $timeout(function () {
          $scope.slickConfigLoaded = true;
        }, 5);
      };
      $scope.slickCurrentIndex = 0;
      $scope.slickConfig = {
        dots: true,
        autoplay: true,
        initialSlide: 0,
        infinite: true,
        autoplaySpeed: 5000,
      };

      /* End Slick Carousel */
    };

  });

  angular.module('devnetApp').filter('cut', function () {
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
              //Also remove . and , so its gives a cleaner result.
              if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
                lastspace = lastspace - 1;
              }
              value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
});
