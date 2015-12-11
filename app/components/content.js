var React = require("react");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;



var Content = React.createClass({
  render: function() {
    return (
      <div>
        <section className="callout">
          <div className="video-bg">
            <video autoPlay loop muted>
              <source src="../assets/videos/test.webm" type="video/webm"></source>
              <source src="../assets/videos/test.ogg" type="video/ogg"></source>
              <source src="../assets/videos/test.mp4" type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-overlay"> 
            <h2><em id="emText">Create.</em><p id="secondaryText">Share. Explore.</p></h2>
          </div>
          <div className="callout-inner">
            
          </div>
        </section>

      </div>
    );
  }
});   

module.exports = Content;