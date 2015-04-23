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
        $scope.player.updateOutcome("Ye are a mighty fighter and swim with great fortitude all the way to North Portland!");
        $state.go('/river');
      } else {
        //fail
        $scope.player.updateOutcome("Ye are a mighty fighter and swim with great fortitude, but as fate would have it, a great river dragon hath appeared and eaten thee!");
        //goto death
        $state.go('/death');
      }
    } else {
      // 25% chance to make it
      if (roll < 25) {
        //success
        $scope.player.updateOutcome("Ye are a lowly thief and a terrible swimmer, but manage to make it all the way to North Portland!");        
        $state.go('/river');
      } else {
        //fail
        $scope.player.updateOutcome("Ye are a lowly thief and a terrible swimmer and drown as soon as you start!");
        //goto death
        $state.go('/death');
      }
    }
  };

  $scope.stealKnife = function() {
    //one hundred sided die roll
    var roll = Math.floor(Math.random() * 100) + 1;
    console.log(roll);

    if ($scope.player.class === "fighter") {
      // 50% chance to make it
      if (roll < 50) {
        //success
        $scope.player.updateOutcome("Unfortunately, you are a large fighter with an undelicate touch, and you wake the man from his slumber! Fortunately, you easily knock him thence and take his knife.");
      } else {
        //fail
        $scope.player.updateOutcome("Unfortunately, you are a large fighter with an undelicate touch, and you wake the man from his slumber! The fellow is stealthy and thrusts the knife into your side before you realize what has happened.");
        //goto death
        $state.go('/death');
      }
    } else {
      // 75% chance to make it
      if (roll < 75) {
        //success
        $scope.player.updateOutcome("Being the elite and graceful thief that you are, you lift the knife from the sleeping man with ease!");
      } else {
        //fail
        $scope.player.updateOutcome("At the precise moment of theft, the man's odorous stench makes you stagger, and you jostle him awake. In a fog of anger and confusion, he thrusts his knife firmly into your chest.");
        //goto death
        $state.go('/death');
      }
    }
    $state.go('/knife');
  };

  $scope.bridge = function() {
    $state.go('/bridge');
  };

  $scope.talk = function() {
    $scope.player.updateWisdom();
    $state.go('/talk');
  };

  $scope.north = function() {
    $state.go('/north');
  };

  $scope.attack = function() {
    //one hundred sided die roll
    var roll = Math.floor(Math.random() * 100) + 1;
    console.log(roll);

    if ($scope.player.class === "fighter") {
      // 90% chance to make it or 100% with knife
      if ($scope.player.knife || roll < 90) {
        //success
        $scope.player.updateOutcome("The ranting man has no chance. You dispatch him quickly before he can say another word and you toss his corpse into the Willamette.");
      } else {
        //fail
        $scope.player.updateOutcome("You slip off the bridge and fall into the murky depths of the Willamette and drown. Terrible luck for a fighter.");
        //goto death
        $state.go('/death');
      }
    } else {
      // 75% chance to make it
      if (roll < 75) {
        //success
        $scope.player.updateOutcome("Being the elite and graceful thief that you are, dispatch the fiend before he can say another word and you toss his corpse into the Willamette.");
      } else {
        //fail
        $scope.player.updateOutcome("You slip off the bridge and fall into the murky depths of the Willamette and drown. Terrible luck for a fighter.");
        //goto death
        $state.go('/death');
      }
    }
    $state.go('/fight');
  };

  $scope.look = function() {
    //one hundred sided die roll
    var roll = Math.floor(Math.random() * 100) + 1;
    console.log(roll);

    if ($scope.player.wisdom || roll < 50) {
      $state.go('/look');
    } else {
      $state.go('/fail');
    }
  };


});
