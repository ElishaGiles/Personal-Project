angular.module('Remington').directive('carouselDirective', function($state) {

  return {
    restrict: 'EA',
    templateUrl: './views/directives/carousel-directive.html',
    controller: 'carouselCtrl'
  };

});
