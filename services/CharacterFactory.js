character.factory('CharacterFactory', function() {
  var factory = {};

  factory.create = function(playerName, playerSex, playerClass) {
    factory.name = playerName;
    factory.sex = playerSex;
    factory.class = playerClass;
    factory.outcome = null;
    factory.knife = false;
    factory.wisdom = false;
  };

  factory.updateOutcome = function(string) {
    factory.outcome = string;
  };

  factory.updateWisdom = function() {
    factory.wisdom = true;
  };

  return factory;
});
