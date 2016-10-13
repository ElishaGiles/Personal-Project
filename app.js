angular.module("Remington", ['ui-router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "./views/home.html",
      controller: 'homeController'
    })
    .state('rifles', {
      url: '/rifles',
      templateUrl: './views/cooking.html',
      controller: 'cookingController'
    })
    .state('shotguns', {
      url: '/shotguns',
      templateUrl: './views/distance.html',
      controller: 'distanceController'
    })
    .state('handguns', {
      url: '/handguns',
      templateUrl: './views/science.html',
      controller: 'scienceController'
    })
    .state('ammunition', {
      url: '/ammunition',
      templateUrl: './views/currency.html',
      controller: 'currencyController'
    })
    .state('ammunition', {
      url: '/ammunition',
      templateUrl: './views/currency.html',
      controller: 'currencyController'
    })
    .state('ammunition', {
      url: '/ammunition',
      templateUrl: './views/currency.html',
      controller: 'currencyController'
    })
    $urlRouterProvider
      .otherwise('/');

});
