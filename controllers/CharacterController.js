character.controller('CharacterCtrl', function CharacterCtrl($scope, $state, CharacterFactory) {
  $scope.CharacterFactory = CharacterFactory;
  $scope.players = CharacterFactory.factory;


  $scope.createPlayer = function() {
    var playerName = $scope.playerName;
    var playerSex = $scope.playerSex;
    var playerClass = $scope.playerClass;
    console.log("name = " + playerName);
    console.log("sex = " + playerSex);
    console.log("class = " + playerClass);
    $scope.CharacterFactory.createPlayer(playerName, playerSex, playerClass);
    console.log("name in object = " + players.player[0].playerName);
    console.log("sex in object = " + players.player[0].playerSex);
    console.log("class in object = " + players.player[0].playerClass);
    $scope.playerName = null;
    $state.go('/game');
  };
});
