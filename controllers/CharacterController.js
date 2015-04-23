character.controller('CharacterCtrl', function CharacterCtrl($scope, CharacterFactory) {
  $scope.player = CharacterFactory.factory;
  $scope.CharacterFactory = CharacterFactory;

  $scope.createPlayer = function() {
    var playerName = $scope.playerName;
    var playerSex = $scope.playerSex;
    var playerClass = $scope.playerClass;
    $scope.CharacterFactory.createPlayer(playerName, playerSex, playerClass);
    $scope.playerName = null;
  };
});
