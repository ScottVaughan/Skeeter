var React = require("react");
var ReactRouter = require("react-router");

var BrowseContent = React.createClass({
	loadCanvas: function(event) {
		console.log(event.which);
	 // <script src="components/browse/canvas.js"></script>
	},
	render: function() {
	return (
		<a href = "#/canvas">
			<div className = 'browse-canvas' onClick={this.loadCanvas}>
				Canvas
			</div>
		</a>
	);
	}
});

module.exports = BrowseContent;