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

  $scope.pictures = [
    {
      url:"./Images/featureCarousel/hunting.jpg",
      id: 0
    },
    {
      url:"./Images/featureCarousel/micro_pistol.jpg",
      id: 1
    },
    {
      url:"./Images/featureCarousel/protection.jpg",
      id: 2
    },
    {
      url:"./Images/featureCarousel/1460.jpg",
      id: 3
    },
    {
      url:"./Images/featureCarousel/Remington-R51.jpg",
      id: 4
    }
  ];

  $scope.numberLoaded = true;

})
