var character = angular.module('character', ['ui.router']);

character.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('/create', {
    url: "/create",
    templateUrl: "partials/create.html",
    controller: 'CharacterCtrl'
  });

  $stateProvider.state('/game', {
    url: "/game",
    templateUrl: "partials/game.html",
    controller: 'CharacterCtrl'
  });

  $stateProvider.state('/river', {
    url: "/river",
    templateUrl: "partials/river.html",
    controller: 'CharacterCtrl'
  });

  $stateProvider.state('/knife', {
    url: "/knife",
    templateUrl: "partials/knife.html",
    controller: 'CharacterCtrl'
  });

  $stateProvider.state('/bridge', {
    url: "/bridge",
    templateUrl: "partials/bridge.html",
    controller: 'CharacterCtrl'
  });

  $stateProvider.state('/talk', {
    url: "/talk",
    templateUrl: "partials/talk.html",
    controller: 'CharacterCtrl'
  });

  $stateProvider.state('/north', {
    url: "/north",
    templateUrl: "partials/north.html",
    controller: 'CharacterCtrl'
  });

  $stateProvider.state('/look', {
    url: "/look",
    templateUrl: "partials/look.html",
    controller: 'CharacterCtrl'
  });

  $stateProvider.state('/fail', {
    url: "/fail",
    templateUrl: "partials/fail.html",
    controller: 'CharacterCtrl'
  });

  $stateProvider.state('/death', {
    url: "/death",
    templateUrl: "partials/gameover.html",
    controller: 'CharacterCtrl'
  });

  $stateProvider.state('/fight', {
    url: "/fight",
    templateUrl: "partials/fight.html",
    controller: 'CharacterCtrl'
  });
});
