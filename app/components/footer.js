var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer">
        <ul>
          <li><a href="#home">Terms and conditions</a></li>
          <li><a href="#news">How too</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <p id="CopyRighted"> Skeeter &copy; CopyRighted</p>
      </div>
    );
  }
});   

module.exports = Footer;