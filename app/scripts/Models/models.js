var Backbone = require('backbone');
var $ = require('jquery');

var RecipeModel = Backbone.Model.extend({
});

var RecipeCollection = Backbone.Collection.extend({
  model: RecipeModel
});

module.exports = {
  RecipeModel: RecipeModel,
  RecipeCollection: RecipeCollection
};
