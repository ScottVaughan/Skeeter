var React = require("react");
var ReactRouter = require("react-router");

var auth = require("./authentication.js");
var Nav = require("./nav.js");
var Tag = require("./tag.js");


var Browse = React.createClass({
  render: function() {
  	var name = auth.getName();
    return (
      <div id = "container">
      	<Nav name={name}/>
      </div>
    );
  }
});

module.exports = Browse;