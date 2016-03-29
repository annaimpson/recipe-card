var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
require('backbone-react-component');

var Recipe = React.createClass({
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
              <div className="recipe-box"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Recipe;
