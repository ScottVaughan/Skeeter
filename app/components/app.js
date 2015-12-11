var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;

// Top-level component for the app
var App = React.createClass({
  render: function() {
    return (
	<div className="container">
	  {this.props.children}
	</div>
    );
  }
});

module.exports = App;