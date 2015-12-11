
var React = require("react");
var ReactRouter = require("react-router");

var Content = require("./content.js");
var Footer = require("./footer.js");
var Header = require("./header.js");


var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
        {/* A JSX comment */}
      </div>
    );
  }
});

module.exports = Home;