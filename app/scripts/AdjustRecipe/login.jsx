var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');
require('backbone-react-component');

Parse.initialize('bakers-app');
Parse.serverURL = 'http://annaimpson.herokuapp.com/';

var Login = React.createClass({

  handleSignUp: function(){
    console.log('handleSignUp');
    $('#signup').on('submit', function(event){
      event.preventDefault();

      var user = new Parse.User();
      user.set({'username': $('#email').val(), 'password': $('#password').val()});
      user.signUp(null, {
        'success': function(results){
          console.log('results: ', results);
          Backbone.history.navigate('recipeInput', {trigger: true});
        },
        'error': function(user, error){
          console.log(user, error);
        }
      });
    });
  },
  handleSignIn: function(){
  console.log('handleSignIn');
  $('#login').on('submit', function(event){
    event.preventDefault();

    Parse.User
      .logIn($('#email-login').val(), $('#password-login').val(), {
        success: function(user) {
          console.log(user);
          Backbone.history.navigate('recipeInput', {trigger: true});
        },
        error: function(user, error) {
        }
      });
    });
    console.log(Parse.User.current());
  },
  render: function(){
    return(
      <div className="login-signin">
        <div className="row">
          <div className="col-md-12">
            <form id="login" className="form-signin">
              <h2 className="form-signin-heading">Please login</h2>
              <input id="email-login" type="text" className="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
              <input id="password-login" type="password" className="form-control" name="password" placeholder="Password" required=""/>
              <button onClick={this.handleSignIn} className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            </form>
          </div>

          <div className="col-md-12">
            <form id="signup" className="form-signup" method="post">
              <h2 className="form-signin-heading">No Account? Please sign up</h2>
              <input id = "email" type="text" className="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
              <input id="password" type="password" className="form-control" name="password" placeholder="Password" required=""/>
              <button onClick={this.handleSignUp} className="btn btn-lg btn-primary btn-block" type="submit">Sign Up!!!</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Login;
