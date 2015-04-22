character.factory('CharacterFactory', function() {
  var factory = {};

  factory.makeCharacter = function(name, sex, class) {
    factory = {
      name: name,
      sex: sex,
      class: class
    });
  };
  return factory;
});
