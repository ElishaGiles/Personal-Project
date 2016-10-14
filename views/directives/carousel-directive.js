angular.module('Remington')
  .directive('carousel-directive', function($state, $scope) {


return {
  restrict: 'EA',
  templateUrl: './views/directives/carousel-directive.html',
  controller: './carouselCtrl.js'


})
