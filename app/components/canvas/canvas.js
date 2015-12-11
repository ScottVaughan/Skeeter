var React = require("react");
var ReactRouter = require("react-router");
var Draggable = require('react-draggable');

var Tag = React.createClass({
	getInitialState: function(){
        return {contextMenuLocation: ''};
    },
	componentDidMount: function(){
		this.contextMenu = this.refs.contextMenu;
	},
    render: function() {
        var location = this.state.contextMenuLocation;
        var contentMenuStyle = {
            display: location ? 'block' : 'none',
            position: 'absolute',
            left: location ? location.x : 0,
            top: location ? location.y : 0
        };
        return (
            <div>
				<Draggable
	                handle=".tag"
	                start={{x: location ? location.x : 1025, y: location ? location.y : 1025}}
	                grid={[25, 25]}
	                draggable={"parent"}
	                zIndex={100}
	                onStart={this.handleStart}
	                onDrag={this.handleDrag}
	                onStop={this.handleStop}>
	                <div className="tag">
	                  <div className = "tag-avatar">
		                  <img src ="https://avatars2.githubusercontent.com/u/506980?v=3&s=460" />
		                  <span className = "tagTitle"><h3>Politics</h3></span>
		                </div>
	              	  <textarea placeholder="ZAPMAN1337:  Make murica great again!"/>
	                </div>
	            </Draggable>
				<Draggable
	                handle=".tag"
	                start={{x: 1425, y: 1025}}
	                grid={[25, 25]}
	                draggable={"parent"}
	                zIndex={100}
	                onStart={this.handleStart}
	                onDrag={this.handleDrag}
	                onStop={this.handleStop}>
	                <div className="tag">
	                  <div className = "tag-avatar">
		                  <img src ="https://cs.byu.edu/sites/default/files/styles/faculty_listing/public/pictures/picture-17184-1387472506.jpg?itok=n21ljU0a" />
		                  <span className = "tagTitle"><h3>Cooking AI</h3></span>
		                </div>
	              	  <textarea />
	                </div>
	            </Draggable>
				<Draggable
	                handle=".tag"
	                start={{x: 1825, y: 1025}}
	                grid={[25, 25]}
	                draggable={"parent"}
	                zIndex={100}
	                onStart={this.handleStart}
	                onDrag={this.handleDrag}
	                onStop={this.handleStop}>
	                <div className="tag">
	                  <div className = "tag-avatar">
		                  <img src ="https://cs.byu.edu/sites/default/files/styles/faculty_listing/public/faculty/Egbert.jpg?itok=hh_CQbxn" />
		                  <span className = "tagTitle"><h3>3D Transformations</h3></span>
		                </div>
	              	  <textarea />
	                </div>
	            </Draggable>
            </div>
        );
    }
});
var Canvas = React.createClass({
    getInitialState: function() {
        return {};
    },
	_onContextMenu: function(e) {
		this.contextMenu.setState({
			contextMenuLocation: {'x' : e.pageX, 'y': e.pageY}
		});
		return false;
	},
    _onPageClick: function() {
    },
	handleStart: function (event, ui) {
		console.log('Event: ', event);
		console.log('Position: ', ui.position);
    },
    handleDrag: function (event, ui) {
		console.log('Event: ', event);
		console.log('Position: ', ui.position);
    },
    handleStop: function (event, ui) {
		console.log('Event: ', event);
   		console.log('Position: ', ui.position);
    },
  render: function() {
    return (
		<div id = "container" onClick={this._onPageClick} onContextMenu={this._onContextMenu}>
			<Draggable
                handle=".canvas-container"
                start={{x: -1000, y: -1000}}
                grid={[25, 25]}
                zIndex={0}
                bounds = {{left: -2500, top: -2500, right: 0, bottom: 0}}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className="canvas-container">
					<Tag ref="contextMenu" />
                </div>
            </Draggable>
        </div>
    );
  }
});

module.exports = Canvas;