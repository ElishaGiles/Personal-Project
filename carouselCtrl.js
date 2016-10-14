angular.module('Remington').controller('carouselCtrl', function($scope) {


  $scope.slickConfig = {
      enabled: true,
      autoplay: true,
      draggable: false,
      autoplaySpeed: 3000,
      method: {},
      event: {
          beforeChange: function (event, slick, currentSlide, nextSlide) {
          },
          afterChange: function (event, slick, currentSlide, nextSlide) {
          }
      }
  };

  $scope.pictures = ["./Images/featureCarousel/hunting.jpg", "./Images/featureCarousel/micro_pistol.jpg",
"./Images/featureCarousel/protection.jpg", "./Images/featureCarousel/rem_783_shooting_jpg.jpg",
"./Images/featureCarousel/Remington-R51.jpg"];

  $scope.numberLoaded = true;

})
