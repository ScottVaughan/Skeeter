var React = require("react");
var ReactRouter = require("react-router");
var ExpandableNav = require('react-expandable-nav');
var ExpandableNavContainer = ExpandableNav.ExpandableNavContainer;
var ExpandableNavbar = ExpandableNav.ExpandableNavbar;
var ExpandableNavHeader = ExpandableNav.ExpandableNavHeader;
var ExpandableNavMenu = ExpandableNav.ExpandableNavMenu;
var ExpandableNavMenuItem = ExpandableNav.ExpandableNavMenuItem;
var ExpandableNavPage = ExpandableNav.ExpandableNavPage;
var ExpandableNavToggleButton = ExpandableNav.ExpandableNavToggleButton;

var History = ReactRouter.History;
var auth = require("./authentication.js");
var BrowseContent = require('./browseContent.js');

var Nav = React.createClass({
   
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
    auth.logout();
  },

  render: function() {

     var header = {
        small: <span className = "logo"><a href = "/">S</a></span>,
        full: <span>Skeeter</span>
      };
      var menuItems = {
        small: [
      <span className="glyphicon glyphicon-search"></span>,
          <span className="glyphicon glyphicon-user"></span>,
          <span className="glyphicon glyphicon-heart"></span>,
          <span className="glyphicon glyphicon-log-out"></span>,
          <span className="glyphicon glyphicon-log-in"></span>],
        full: [
          <span>Browse</span>,
          <span>Profile</span>,
          <span>Awards</span>,
          <span>Logout</span>,
          <span>Login</span>]
      };
      return (
     <ExpandableNavContainer>
          <ExpandableNavbar fullClass="full" smallClass="small">
            <ExpandableNavHeader small={header.small} full={header.full} url='#' />
              {this.state.loggedIn ? (
                 <ExpandableNavMenu>
                  <ExpandableNavMenuItem small={menuItems.small[0]} full={menuItems.full[0]} url='/#/browse' active = {true}/>
                  <ExpandableNavMenuItem small={menuItems.small[1]} full={menuItems.full[1]} active = {false}/>
                  <ExpandableNavMenuItem small={menuItems.small[2]} full={menuItems.full[2]} active = {false}/>
                  <ExpandableNavMenuItem small={menuItems.small[3]} full={menuItems.full[3]} onClick={this.logout} active = {false}/>
                 </ExpandableNavMenu>
               ) : (
               <ExpandableNavMenu>
                  <ExpandableNavMenuItem small={menuItems.small[0]} full={menuItems.full[0]} url='/#/browse' active = {true}/>
                  <ExpandableNavMenuItem small={menuItems.small[1]} full={menuItems.full[1]} active = {false}/>
                  <ExpandableNavMenuItem small={menuItems.small[2]} full={menuItems.full[2]} active = {false}/>
                  <ExpandableNavMenuItem small={menuItems.small[4]} full={menuItems.full[4]} url='/#/login' active = {false}/>
  
                 </ExpandableNavMenu>)}              
          </ExpandableNavbar>
          <ExpandableNavToggleButton smallClass="s" fullClass = "s" className="shared"/>
          <ExpandableNavPage>
          {this.state.loggedIn ? (
           <h3>You are logged in as {this.props.name} </h3>
           ) : (<h3>Login so you can reply to topics! </h3>)
           }  
          <BrowseContent />
          </ExpandableNavPage>
        </ExpandableNavContainer> 
     );
  }
});

module.exports = Nav;