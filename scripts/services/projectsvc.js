'use strict';

/**
 * @ngdoc service
 * @name ciscogithubioApp.ProjectSvc
 * @description
 * # ProjectSvc
 * Service in the ciscogithubioApp.
 */
angular.module('devnetApp')
  .service('ProjectSvc', function ($log, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      getPosts : function(title) {
        //$log.info("title: ", title);
        return $http.get('data/' + title + '.json');
      }
    }
  });
