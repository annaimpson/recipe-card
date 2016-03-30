var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');
var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');
var Parse = require('parse');
var ParseReact = require('parse-react');
var Backbone = require('backbone');
var models = require('../models');
var recipe = require('./recipeInput.jsx');
require('backbone-react-component');
console.log(recipe);


Parse.initialize('bakers-app');
Parse.serverURL = 'http://annaimpson.herokuapp.com/';


var Recipe = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      recipes: (new Parse.Query('Recipe')).descending('createAt')
    };
  },
  render: function(){
    return(
      <div>
        <div className="recipe-header">
          <div className="row nav-row">
            <div className= "col-md-3">
              <h6 className="makes">Makes</h6>
            </div>
            <div className= "col-md-3">
              <form className="form-group">
                <input type="text" className="form-control serving-number" placeholder="#"/>
              </form>
            </div>
            <div className="col-md-3">
              <h6 className="servings">servings</h6>
            </div>
            <div className="col-md-3 USradio">
              <form className="form-group">
                <input className="USradio" type="radio" name="setting" value="US" checked/><div className="US">US</div>
              </form>
            </div>
            <div className="col-md-3 metricRadio">
              <form className="form-group">
                <input className="metricRadio" type="radio" name="setting" value="metric" checked/><div className="metric">Metric</div>
              </form>
            </div>
            <div className="col-md-3 adjust-button">
              <button type="button" className="btn btn-default adjust-button">Adjust Recipe</button>
            </div>
          </div>
        </div>
        <div className="recipe">
          <div className="row">
            <div className="col-md-12">

              <ul className="recipe-box">
                {this.data.recipes.map(function(recipe) {
                  return <li key={recipe.id}>{recipe.name} :: {recipe.ingredient}</li>;
                })}

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Recipe;
