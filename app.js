var character = angular.module('character', ['ui.router']);

character.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('create', {
    url: "/create",
    templateUrl: "partials/create.html",
    controller: 'CreateCtrl'
  });
});
