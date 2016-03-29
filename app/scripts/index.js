var Backbone = require('backbone');

var Router = require('./router');

var realRouter = new Router();
$(function(){
  Backbone.history.start();
});
