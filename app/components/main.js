
var React = require("react");
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require("./app.js");
var Home = require("./home.js");
var Browse = require("./browse.js");
var Canvas = require("./canvas/canvas.js");
var Login = require("./login.js");
var Register = require("./register.js");

require("../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../styles/stylesheets/main.css");

var routes = (
  <Router>
    <Route name="app" path="/" component ={App}>
      <IndexRoute component = {Home} />
      <Route name="home" path="/home" component={Home} />
      <Route name="browse" path="/browse" component={Browse} />
      <Route name="canvas" path="/canvas" component={Canvas} />
      <Route name="login" path="/login" component={Login} />
      <Route name="register" path="/register" component={Register} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById("content"));
