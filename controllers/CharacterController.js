character.controller('CharacterCtrl', function CharacterCtrl($scope, $state, CharacterFactory) {
  $scope.player = CharacterFactory.factory;
  $scope.CharacterFactory = CharacterFactory;

  $scope.createPlayer = function() {
    var playerName = $scope.playerName;
    var playerSex = $scope.playerSex;
    var playerClass = $scope.playerClass;
    console.log("name = " + playerName);
    console.log("sex = " + playerSex);
    console.log("class = " + playerClass);
    $scope.CharacterFactory.createPlayer(playerName, playerSex, playerClass);
    $scope.playerName = null;
    $state.go('/game');
  };
});
