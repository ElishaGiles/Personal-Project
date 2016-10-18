angular.module('Remington').controller('carouselCtrl', function($scope) {


  $scope.slickConfig = {
      enabled: true,
      autoplay: false,
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
    // {
    //   url:"./Images/featureCarousel/hunting.jpg",
    //   id: "zero"
    // },
    // {
    //   url:"./Images/featureCarousel/micro_pistol.jpg",
    //   id: "one"
    // },
    {
      url:"./Images/featureCarousel/protection.jpg",
      id: "two"
    },
    {
      url:"./Images/featureCarousel/1460.jpg",
      id: "three"
    },
    {
      url:"./Images/featureCarousel/Remington-R51.jpg",
      id: "four"
    }
  ];

  $scope.numberLoaded = true;

})
