var Backbone = require('backbone');
var $ = require('jquery');
var Parse = require('parse');

var Router = require('./router');

var realRouter = new Router();
$(function(){
  Backbone.history.start();
});

  // ref.on('child_added', function(snapshot){
  //   var newRecipe = snapshot.val();
  //   displayNewRecipe(newRecipe);
  // });
  //
  // function displayNewRecipe(text){
  //   console.log(text);
  //
  //   $('.recipe-box').append('<div>' + text.user + '</div>');
  // };
