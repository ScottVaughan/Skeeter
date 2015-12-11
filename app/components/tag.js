var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;

//header and footer is written in styles/sass/partials/base/_base.scss
var Tag = React.createClass({
  render: function() {
    /*
    var str = "TheNinjaYoshiXWarrior567";
    var tagTitleLength = str.length;
    var tagTitle = document.getElementsByClassName('tagTitle');
    if(tagTitleLength > 20)
      tagTitle.style.font-size = "1.0em";
    else
      tagTitle.style.font-size = "2.0em";*/

    return (
        <div className="tag">
          {/*<img className="tag-avatar" src="../../assets/images/yoshi.jpg" alt="Mountain View" height="42" width="42"></img>*/}
          <h3 className="tagTitle">TheNinjaYoshiXWarrior567</h3>
          <textarea className="tagPost" placeholder="Write a comment..." rows="6" cols="30">
          </textarea>
        
        </div>
    );
  }
}); 

module.exports = Tag;