var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var auth = require("./authentication.js");
//header and footer is written in styles/sass/partials/base/_base.scss
var Header = React.createClass({

  // initial state
  getInitialState: function() 
  {
    return {loggedIn: auth.loggedIn()};
  },
  // callback when user is logged in
  setStateOnAuth: function(loggedIn) 
  {
    this.setState({loggedIn:loggedIn});
  },
 // when the component loads, setup the callback
  componentWillMount: function()
  {
    auth.onChange = this.setStateOnAuth;
  },

  // logout the user and stay on page
  logout: function(event)
  {
    console.log("logging out!!!");
    auth.logout();
  },

  render: function() {
    return (
      <div>
        <div className="header">
            <p id="logo">S</p><span id="title"><h1>K E E T E R</h1></span>
        </div>
        <div className="headerNav">
        {this.state.loggedIn ? (
                 <ul>
                  <li><Link className="btn btn-primary btn-md" onClick={this.logout} to="logout">Logout</Link></li>
                  <li><Link className="a" to="browse">Browse</Link></li>
                  <li><a href="#achievement">Achievement</a></li>
                  <li><a href="#profile">Profile</a></li>
                 </ul>
               ) : (
               <ul>
                  <li><Link className="btn btn-primary btn-md" to="register">Register</Link></li>
                  <li><Link className="btn btn-primary btn-md" to="login">Login</Link></li>
                  <li><Link className="a" to="browse">Browse</Link></li>
                  <li><a href="#achievement">Achievement</a></li>
                  <li><a href="#profile">Profile</a></li>
                 </ul>
               )}
        </div>
      </div>
    );
  }
}); 

module.exports = Header;