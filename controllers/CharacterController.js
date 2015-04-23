character.controller('CharacterCtrl', function CharacterCtrl($scope, $state, CharacterFactory) {
  $scope.player = CharacterFactory;

  $scope.createPlayer = function() {
    var playerName = $scope.playerName;
    var playerSex = $scope.playerSex;
    var playerClass = $scope.playerClass;
    $scope.player.create(playerName, playerSex, playerClass);
    $scope.playerName = null;
    $state.go('/game');
  };

  $scope.swimFate = function() {
    //one hundred sided die roll
    var roll = Math.floor(Math.random() * 100) + 1;
    console.log(roll);

    if ($scope.player.class === "fighter") {
      // 75% chance to make it
      if (roll < 75) {
        //success
        return "Ye are a mighty fighter and swim with great fortitude all the way to North Portland!";
      } else {
        //fail
        return "Ye are a mighty fighter and swim with great fortitude, but as fate would have it, a great river dragon hath appeared and eaten thee!";
      }
    } else {
      // 25% chance to make it
      if (roll < 25) {
        //success
        return "Ye are a lowly thief and a terrible swimmer, but manage to make it all the way to North Portland!";
      } else {
        //fail
        return "Ye are a lowly thief and a terrible swimmer and drown as soon as you start!";
        //goto death
      }
    }
  };

});
