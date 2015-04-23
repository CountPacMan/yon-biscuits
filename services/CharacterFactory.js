character.factory('CharacterFactory', function() {
  var factory = {};
  factory.player = [];

  factory.createPlayer = function(playerName, playerSex, playerClass) {
    factory.player.push({playerName: playerName, playerSex: playerSex, playerClass: playerClass});
    // factory.playerName = playerName;
    // factory.playerSex = playerSex;
    // factory.playerClass = playerClass;
    console.log("factory name: " + factory.player[0].playerName);
    console.log("factory sex: " + factory.player[0].playerSex);
    console.log("factory class: " + factory.player[0].playerClass);
  };
  return factory;
});
