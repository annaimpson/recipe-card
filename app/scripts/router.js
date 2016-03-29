var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');


var Login = require('./AdjustRecipe/login.jsx');
var recipeHeader = require('./AdjustRecipe/recipeInput.jsx').recipeHeader;
var recipeInput = require('./AdjustRecipe/recipeInput.jsx').makeRecipe;
var Recipe = require('./AdjustRecipe/recipe.jsx');

var LoginRouter = Backbone.Router.extend({
  routes: {
    '': 'login',
    'recipe': 'recipe',
    'recipeInput': 'recipeInput',
    'recipeHeader': 'recipeHeader'
  },
  login: function(){
    ReactDOM.render(
      React.createElement(Login), document.getElementById('app')
    );
  },

  recipe: function(){
    ReactDOM.render(
      React.createElement(Recipe), document.getElementById('app')
    );
  },

  recipeHeader: function(){
    ReactDOM.render(
      React.createElement(recipeHeader), document.getElementById('header')
    );
  },
  recipeInput: function(){
    ReactDOM.render(
      React.createElement(recipeInput), document.getElementById('app')
    );
  }

});

module.exports = LoginRouter;
