angular.module('projectGridDirective', [])
.directive('projectGrid', function() {
  return {
    restrict: 'E',
    scope: {
        projects: '=projects',
        paginationId: '@paginationId'
    },
    templateUrl: 'scripts/directives/project-grid/projectGrid.html'
  };
});