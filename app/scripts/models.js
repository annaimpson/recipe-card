var Backbone = require('backbone');
var $ = require('jquery');
var Parse = require('parse');

var Recipe = Parse.Object.extend('Recipe', {
  totalWeight: function(){

  },
  calculate: function(){

  }
});

var Ingredient = Parse.Object.extend('Ingredient');

module.exports = {
  'Recipe': Recipe,
  'Ingredient': Ingredient
};
