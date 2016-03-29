var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');


var Login = require('./AdjustRecipe/login.jsx');
var recipeInput = require('./AdjustRecipe/recipeInput.jsx').makeRecipe;
var Recipe = require('./AdjustRecipe/recipe.jsx');

var appContainer = document.getElementById('app');

var LoginRouter = Backbone.Router.extend({
  routes: {
    '': 'login',
    'recipe': 'recipe',
    'recipeInput': 'recipeInput',
    'recipeHeader': 'recipeHeader'
  },
  login: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(Login), document.getElementById('app')
    );
  },

  recipe: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(Recipe), document.getElementById('app')
    );
  },

  recipeInput: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(recipeInput), document.getElementById('app')
    );
  }
});

module.exports = LoginRouter;
