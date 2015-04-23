character.factory('CharacterFactory', function() {
  var factory = {};

  factory.createPlayer = function(playerName, playerSex, playerClass) {
    factory.playerName = playerName;
    factory.playerSex = playerSex;
    factory.playerClass = playerClass;
  };
  return factory;
});
