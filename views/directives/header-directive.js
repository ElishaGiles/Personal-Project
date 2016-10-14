angular.module('Remington')
  .directive('headerDirective', function($state) {
  return {
    restrict: 'EA',
    controller: 'landingCtrl',
    templateUrl: './views/directives/header-directive.html'
  };

});
