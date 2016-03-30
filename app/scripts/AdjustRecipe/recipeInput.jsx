var React = require('react');
var ReactDOM = require('react-dom');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');
var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');
var Parse = require('parse');
var $ = require('jquery');
var Backbone = require('backbone');
var models = require('../models');
require('backbone-react-component');


var recipeHeader = React.createClass({
  render: function(){
    return(
      <div>
        <header>
          <h6 className="slogan">The kitchen is yours, chef!</h6>
          <h6 className="company-name">Batch Maker</h6>
          <div className="glyphs">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
            <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
          </div>
        </header>
      </div>
    )
  }
})

var makeRecipe = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return {title: '', notes: '', ingredientCount:''};
  },

  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var router = this.props.router;
    var recipe = new models.Recipe();
    recipe.set({
      "title": this.state.title,
      "notes": this.state.notes
    });
    Backbone.history.navigate('recipe', {trigger: true});

    recipe.save(null, {
      success: function(recipe) {
        var recipeIngredients = [];

        for(var i=1; i <= self.state.ingredientCount; i++){
          console.log("formset: ", i, self.refs["formset" +i]);

          var quantity = self.refs["formset" +i].refs["quantity"+i].getInputDOMNode().value;
          var units = self.refs["formset" +i].refs["units"+i].getInputDOMNode().value;
          var name = self.refs["formset" +i].refs["name"+i].getInputDOMNode().value;

          var ingredient = new models.Ingredient();
          ingredient.set('quantity', parseInt(qty));
          ingredient.set('units', units);
          ingredient.set('name', name);
          ingredient.set('recipe', recipe);

          recipeIngredients.push(ingredient);
          console.log(recipeIngredients);
        }

        console.log(recipeIngredients);

        Parse.Object.saveAll(recipeIngredients, {
          success: function(list) {
            alert('ing saved!');
          },
          error: function(error) {
            console.log(error);
          }
        });
        router.navigate('recipes/', {trigger: true});
      },
      error: function(recipe, error) {
        alert('Failed to create new object with error code: ' + error.message);
      }
    });
  },
  render: function(){
    var ingredientForms = [];
    for (var i=1; i<= this.state.ingredientCount; i++){
      var count = i;
      ingredientForms.push(<IngredientFormset key={count} count={count} ref={"formset"+count}/>);
    }
    return(
      <div className="recipe-input-page">
        <div className="first-row">
          <div className="row">
            <div className="col-md-12">
              <h6 className="info">Basic Info</h6>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img src="..." alt="" className="img-thumbnail"/>
            </div>
            <div className="col-md-8">
              <form className="form-group">
                <input type="text" className="recipe-name" placeholder="Recipe Name"/>
                <input type="text" className="author-input" placeholder="By"/>
              </form>
            </div>
          </div>
          <div className="row">
            <form className="form-group">
              <select className="form-group selectpicker type-button">
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Dessert</option>
              </select>
              <input type="text" className="form-control prep-time" placeholder="Prep Time"/>
              <input type="text" className="form-control cook-time" placeholder="Cook Time"/>
                <select className="form-group selectpicker temp-button">
                  <option>Cooking Temp F</option>
                  <option>Cooking Temp C</option>
                </select>
            </form>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h6 className="will-make">This recipe will make</h6>
            </div>
            <div className="col-md-4">
              <form className="form-group">
                <input className="form-control amount-input" type="text" placeholder="Amount"/>
              </form>
            </div>
            <div className="col-md-4">
              <form className="form-group">
                <input className="form-control food-input" type="text" placeholder="cookies, loaves, etc."/>
              </form>
            </div>
          </div>
        </div>

        <div className="second-row">
          <div className="row">
            <div className="col-md-12">
              <h6 className="step1">Step 1</h6>
            </div>
            <div className= "col-md-2">
              <form className="form-group">
                <input type="text" className="form-control chosen-amount" placeholder="Amount"/>
              </form>
            </div>
            <div className="col-md-4 chosen-units">
              <form className="form-group">
                <input type="text" className="form-control" placeholder="Units"/>
              </form>
            </div>
            <div className="col-md-8 chosen-ingredient">
              <form className="form-group">
                <input type="text" className="form-control" placeholder="Ingredient"/>
              </form>
            </div>
            <div className="col-md-2 minus-button">
              <button><span className="glyphicon glyphicon-minus" aria-hidden="true"></span></button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <form className="form-group">
                <input type="text" className="form-control amount" placeholder="Amount"/>
              </form>
            </div>
            <div className="col-md-4 units">
              <form className="form-group">
                <input type="text" className="form-control" placeholder="Units"/>
              </form>
            </div>
            <div className="col-md-8 ingredient">
              <form className = "form-group">
                <input type="text" className="form-control" placeholder="Ingredient"/>
              </form>
            </div>
            <div className="col-md-2 plus-button">
              <button><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
            </div>
            <div className="col-md-12 recipe-input">
              <form className="form-group">
                <textarea className="form-control recipe-input" rows="3" placeholder="What directions go with this step?"></textarea>
                <button type="button" className="btn btn-default another-step">Add another step</button>
              </form>
            </div>
          </div>
        </div>

        {ingredientForms}

        <div className="col-md-12">
          <h6 className="notes">Personal Notes</h6>
        </div>
        <div className="col-md-12 personal-notes">
          <form className="form-group">
            <textarea className="form-control personal-notes"></textarea>
            <button type="button" className="btn btn-default another-step">Add recipe!</button>
          </form>
        </div>
        <div class="row">
          <div class="col-md-12">
            <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Submit New Recipe</button>
          </div>
        </div>
  </div>
    );
    console.log(makeRecipe);
  }
});

module.exports = {
  recipeHeader: recipeHeader,
  makeRecipe: makeRecipe
};
