angular.module("Remington", ['ui.router', 'slickCarousel'])
  .config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "./landing.html",
      controller: 'landingCtrl'
    })
    .state('rifles', {
      url: '/rifles',
      templateUrl: "./landing.html",
      // controller:
    })
    .state('shotguns', {
      url: '/shotguns',
      templateUrl: "./landing.html",
      // controller:
    })
    .state('handguns', {
      url: '/handguns',
      templateUrl: "./landing.html",
      // controller:
    })
    .state('ammunition', {
      url: '/ammunition',
      templateUrl: "./landing.html",
      // controller:
    })
    .state('shop', {
      url: '/shop',
      templateUrl: "./landing.html",
      // controller:
    })
    .state('country', {
      url: '/country',
      templateUrl: "./landing.html",
      // controller:
    })
    .state('cart', {
      url: '/shop',
      templateUrl: "./landing.html",
      // controller:
    })

    $urlRouterProvider
      .otherwise('/');


});
