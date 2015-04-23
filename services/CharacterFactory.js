character.factory('CharacterFactory', function() {
  var factory = {};

  factory.create = function(playerName, playerSex, playerClass) {
    factory.name = playerName;
    factory.sex = playerSex;
    factory.class = playerClass;
    factory.outcome = null;
  };

  return factory;
});
