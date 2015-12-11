webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(158);
	var ReactRouter = __webpack_require__(159);
	
	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var IndexRoute = ReactRouter.IndexRoute;
	
	var App = __webpack_require__(208);
	var Home = __webpack_require__(209);
	var Browse = __webpack_require__(215);
	var Canvas = __webpack_require__(266);
	var Login = __webpack_require__(268);
	var Register = __webpack_require__(269);
	
	__webpack_require__(270);
	__webpack_require__(279);
	
	var routes = React.createElement(
	  Router,
	  null,
	  React.createElement(
	    Route,
	    { name: "app", path: "/", component: App },
	    React.createElement(IndexRoute, { component: Home }),
	    React.createElement(Route, { name: "home", path: "/home", component: Home }),
	    React.createElement(Route, { name: "browse", path: "/browse", component: Browse }),
	    React.createElement(Route, { name: "canvas", path: "/canvas", component: Canvas }),
	    React.createElement(Route, { name: "login", path: "/login", component: Login }),
	    React.createElement(Route, { name: "register", path: "/register", component: Register })
	  )
	);
	
	ReactDOM.render(routes, document.getElementById("content"));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(3);


/***/ },
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	var History = ReactRouter.History;
	
	// Top-level component for the app
	var App = React.createClass({
	  displayName: "App",
	
	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "container" },
	      this.props.children
	    );
	  }
	});
	
	module.exports = App;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	
	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	
	var Content = __webpack_require__(210);
	var Footer = __webpack_require__(211);
	var Header = __webpack_require__(212);
	
	var Home = React.createClass({
	  displayName: "Home",
	
	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(Header, null),
	      React.createElement(Content, null),
	      React.createElement(Footer, null)
	    );
	  }
	});
	
	module.exports = Home;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	
	var Link = ReactRouter.Link;
	
	var Content = React.createClass({
	  displayName: "Content",
	
	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "section",
	        { className: "callout" },
	        React.createElement(
	          "div",
	          { className: "video-bg" },
	          React.createElement(
	            "video",
	            { autoPlay: true, loop: true, muted: true },
	            React.createElement("source", { src: "../assets/videos/test.webm", type: "video/webm" }),
	            React.createElement("source", { src: "../assets/videos/test.ogg", type: "video/ogg" }),
	            React.createElement("source", { src: "../assets/videos/test.mp4", type: "video/mp4" }),
	            "Your browser does not support the video tag."
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "video-overlay" },
	          React.createElement(
	            "h2",
	            null,
	            React.createElement(
	              "em",
	              { id: "emText" },
	              "Create."
	            ),
	            React.createElement(
	              "p",
	              { id: "secondaryText" },
	              "Share. Explore."
	            )
	          )
	        ),
	        React.createElement("div", { className: "callout-inner" })
	      )
	    );
	  }
	});
	
	module.exports = Content;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	var History = ReactRouter.History;
	
	var Footer = React.createClass({
	  displayName: "Footer",
	
	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "footer" },
	      React.createElement(
	        "ul",
	        null,
	        React.createElement(
	          "li",
	          null,
	          React.createElement(
	            "a",
	            { href: "#home" },
	            "Terms and conditions"
	          )
	        ),
	        React.createElement(
	          "li",
	          null,
	          React.createElement(
	            "a",
	            { href: "#news" },
	            "How too"
	          )
	        ),
	        React.createElement(
	          "li",
	          null,
	          React.createElement(
	            "a",
	            { href: "#contact" },
	            "Contact"
	          )
	        ),
	        React.createElement(
	          "li",
	          null,
	          React.createElement(
	            "a",
	            { href: "#about" },
	            "About"
	          )
	        )
	      ),
	      React.createElement(
	        "p",
	        { id: "CopyRighted" },
	        " Skeeter © CopyRighted"
	      )
	    );
	  }
	});
	
	module.exports = Footer;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	var History = ReactRouter.History;
	var Link = ReactRouter.Link;
	var auth = __webpack_require__(213);
	//header and footer is written in styles/sass/partials/base/_base.scss
	var Header = React.createClass({
	  displayName: "Header",
	
	  // initial state
	  getInitialState: function () {
	    return { loggedIn: auth.loggedIn() };
	  },
	  // callback when user is logged in
	  setStateOnAuth: function (loggedIn) {
	    this.setState({ loggedIn: loggedIn });
	  },
	  // when the component loads, setup the callback
	  componentWillMount: function () {
	    auth.onChange = this.setStateOnAuth;
	  },
	
	  // logout the user and stay on page
	  logout: function (event) {
	    console.log("logging out!!!");
	    auth.logout();
	  },
	
	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "div",
	        { className: "header" },
	        React.createElement(
	          "p",
	          { id: "logo" },
	          "S"
	        ),
	        React.createElement(
	          "span",
	          { id: "title" },
	          React.createElement(
	            "h1",
	            null,
	            "K E E T E R"
	          )
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "headerNav" },
	        this.state.loggedIn ? React.createElement(
	          "ul",
	          null,
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              Link,
	              { className: "btn btn-primary btn-md", onClick: this.logout, to: "logout" },
	              "Logout"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              Link,
	              { className: "a", to: "browse" },
	              "Browse"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#achievement" },
	              "Achievement"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#profile" },
	              "Profile"
	            )
	          )
	        ) : React.createElement(
	          "ul",
	          null,
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              Link,
	              { className: "btn btn-primary btn-md", to: "register" },
	              "Register"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              Link,
	              { className: "btn btn-primary btn-md", to: "login" },
	              "Login"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              Link,
	              { className: "a", to: "browse" },
	              "Browse"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#achievement" },
	              "Achievement"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "#profile" },
	              "Profile"
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	module.exports = Header;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(214);
	
	// authentication object
	var auth = {
	  register: function (username, password, cb) {
	    // submit request to server, call the callback when complete
	    var url = "/users/register";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'POST',
	      data: {
	        username: username,
	        password: password
	      },
	      // on success, store a login token
	      success: (function (res) {
	        localStorage.token = res.token;
	        localStorage.name = res.username;
	        this.onChange(true);
	        if (cb) cb(true);
	      }).bind(this),
	
	      error: (function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.token;
	        this.onChange(false);
	        if (cb) cb(false);
	      }).bind(this)
	    });
	  },
	
	  // login the user
	  login: function (username, password, cb) {
	    console.log("login in");
	    // submit login request to server, call callback when complete
	    cb = arguments[arguments.length - 1];
	    // check if token in local storage
	    if (localStorage.token) {
	      this.onChange(true);
	      if (cb) cb(true);
	      return;
	    }
	
	    // submit request to server
	    var url = "/users/login";
	    $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'POST',
	      data: {
	        username: username,
	        password: password
	      },
	      success: (function (res) {
	        // on success, store a login token
	        localStorage.token = res.token;
	        localStorage.name = res.username;
	        this.onChange(true);
	        if (cb) cb(true);
	      }).bind(this),
	      error: (function (xhr, status, err) {
	        // if there is an error, remove any login token
	        delete localStorage.token;
	        this.onChange(false);
	        if (cb) cb(false);
	      }).bind(this)
	    });
	  },
	  // get the token from local storage
	  getToken: function () {
	    return localStorage.token;
	  },
	  // get the name from local storage
	  getName: function () {
	    return localStorage.name;
	  },
	  // logout the user, call the callback when complete
	  logout: function (cb) {
	    delete localStorage.token;
	    this.onChange(false);
	    if (cb) cb();
	  },
	  // check if user is logged in
	  loggedIn: function () {
	    return !!localStorage.token;
	  },
	  // default onChange function
	  onChange: function () {}
	};
	
	module.exports = auth;

/***/ },
/* 214 */,
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	
	var auth = __webpack_require__(213);
	var Nav = __webpack_require__(216);
	var Tag = __webpack_require__(265);
	
	var Browse = React.createClass({
	  displayName: "Browse",
	
	  render: function () {
	    var name = auth.getName();
	    return React.createElement(
	      "div",
	      { id: "container" },
	      React.createElement(Nav, { name: name })
	    );
	  }
	});
	
	module.exports = Browse;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	var ExpandableNav = __webpack_require__(217);
	var ExpandableNavContainer = ExpandableNav.ExpandableNavContainer;
	var ExpandableNavbar = ExpandableNav.ExpandableNavbar;
	var ExpandableNavHeader = ExpandableNav.ExpandableNavHeader;
	var ExpandableNavMenu = ExpandableNav.ExpandableNavMenu;
	var ExpandableNavMenuItem = ExpandableNav.ExpandableNavMenuItem;
	var ExpandableNavPage = ExpandableNav.ExpandableNavPage;
	var ExpandableNavToggleButton = ExpandableNav.ExpandableNavToggleButton;
	
	var History = ReactRouter.History;
	var auth = __webpack_require__(213);
	var BrowseContent = __webpack_require__(264);
	
	var Nav = React.createClass({
	  displayName: "Nav",
	
	  // initial state
	  getInitialState: function () {
	
	    return { loggedIn: auth.loggedIn() };
	  },
	  // callback when user is logged in
	  setStateOnAuth: function (loggedIn) {
	    this.setState({ loggedIn: loggedIn });
	  },
	  // when the component loads, setup the callback
	  componentWillMount: function () {
	    auth.onChange = this.setStateOnAuth;
	  },
	
	  // logout the user and stay on page
	  logout: function (event) {
	    auth.logout();
	  },
	
	  render: function () {
	
	    var header = {
	      small: React.createElement(
	        "span",
	        { className: "logo" },
	        React.createElement(
	          "a",
	          { href: "/" },
	          "S"
	        )
	      ),
	      full: React.createElement(
	        "span",
	        null,
	        "Skeeter"
	      )
	    };
	    var menuItems = {
	      small: [React.createElement("span", { className: "glyphicon glyphicon-search" }), React.createElement("span", { className: "glyphicon glyphicon-user" }), React.createElement("span", { className: "glyphicon glyphicon-heart" }), React.createElement("span", { className: "glyphicon glyphicon-log-out" }), React.createElement("span", { className: "glyphicon glyphicon-log-in" })],
	      full: [React.createElement(
	        "span",
	        null,
	        "Browse"
	      ), React.createElement(
	        "span",
	        null,
	        "Profile"
	      ), React.createElement(
	        "span",
	        null,
	        "Awards"
	      ), React.createElement(
	        "span",
	        null,
	        "Logout"
	      ), React.createElement(
	        "span",
	        null,
	        "Login"
	      )]
	    };
	    return React.createElement(
	      ExpandableNavContainer,
	      null,
	      React.createElement(
	        ExpandableNavbar,
	        { fullClass: "full", smallClass: "small" },
	        React.createElement(ExpandableNavHeader, { small: header.small, full: header.full, url: "#" }),
	        this.state.loggedIn ? React.createElement(
	          ExpandableNavMenu,
	          null,
	          React.createElement(ExpandableNavMenuItem, { small: menuItems.small[0], full: menuItems.full[0], url: "/#/browse", active: true }),
	          React.createElement(ExpandableNavMenuItem, { small: menuItems.small[1], full: menuItems.full[1], active: false }),
	          React.createElement(ExpandableNavMenuItem, { small: menuItems.small[2], full: menuItems.full[2], active: false }),
	          React.createElement(ExpandableNavMenuItem, { small: menuItems.small[3], full: menuItems.full[3], onClick: this.logout, active: false })
	        ) : React.createElement(
	          ExpandableNavMenu,
	          null,
	          React.createElement(ExpandableNavMenuItem, { small: menuItems.small[0], full: menuItems.full[0], url: "/#/browse", active: true }),
	          React.createElement(ExpandableNavMenuItem, { small: menuItems.small[1], full: menuItems.full[1], active: false }),
	          React.createElement(ExpandableNavMenuItem, { small: menuItems.small[2], full: menuItems.full[2], active: false }),
	          React.createElement(ExpandableNavMenuItem, { small: menuItems.small[4], full: menuItems.full[4], url: "/#/login", active: false })
	        )
	      ),
	      React.createElement(ExpandableNavToggleButton, { smallClass: "s", fullClass: "s", className: "shared" }),
	      React.createElement(
	        ExpandableNavPage,
	        null,
	        this.state.loggedIn ? React.createElement(
	          "h3",
	          null,
	          "You are logged in as ",
	          this.props.name,
	          " "
	        ) : React.createElement(
	          "h3",
	          null,
	          "Login so you can reply to topics! "
	        ),
	        React.createElement(BrowseContent, null)
	      )
	    );
	  }
	});
	
	module.exports = Nav;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  ExpandableNavContainer: __webpack_require__(218),
	  ExpandableNavbar: __webpack_require__(238),
	  ExpandableNavHeader: __webpack_require__(258),
	  ExpandableNavItem: __webpack_require__(259),
	  ExpandableNavMenu: __webpack_require__(260),
	  ExpandableNavMenuItem: __webpack_require__(261),
	  ExpandableNavPage: __webpack_require__(262),
	  ExpandableNavToggleButton: __webpack_require__(263)
	};


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(219);
	
	var ExpandableNavContainer = React.createClass({displayName: "ExpandableNavContainer",
	  getInitialState:function() {
	    return {
	      expanded: this.props.expanded || false,
	    };
	  },
	  handleToggle:function() {
	    this.setState({expanded: !this.state.expanded});
	  },
	  render:function() {
	    return (
	      React.createElement("div", React.__spread({},  this.props), 
	        React.Children.map(this.props.children, this.renderChild)
	      )
	    );
	  },
	  renderChild:function(child, i) {
	    return React.addons.cloneWithProps(child, {
	      key: child.key ? child.key : i,
	      expanded: this.state.expanded,
	      handleToggle: this.handleToggle,
	      ref: child.ref
	    });
	  },
	});
	
	module.exports = ExpandableNavContainer;


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var warning = __webpack_require__(25);
	warning(
	  false,
	  // Require examples in this string must be split to prevent React's
	  // build tools from mistaking them for real requires.
	  // Otherwise the build tools will attempt to build a 'react-addons-{addon}' module.
	  'require' + "('react/addons') is deprecated. " +
	  'Access using require' + "('react-addons-{addon}') instead."
	);
	
	module.exports = __webpack_require__(220);


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactWithAddons
	 */
	
	/**
	 * This module exists purely in the open source project, and is meant as a way
	 * to create a separate standalone build of React. This build has "addons", or
	 * functionality we've built and think might be useful but doesn't have a good
	 * place to live inside React core.
	 */
	
	'use strict';
	
	var LinkedStateMixin = __webpack_require__(221);
	var React = __webpack_require__(2);
	var ReactComponentWithPureRenderMixin = __webpack_require__(224);
	var ReactCSSTransitionGroup = __webpack_require__(226);
	var ReactFragment = __webpack_require__(232);
	var ReactTransitionGroup = __webpack_require__(227);
	var ReactUpdates = __webpack_require__(54);
	
	var cloneWithProps = __webpack_require__(233);
	var shallowCompare = __webpack_require__(225);
	var update = __webpack_require__(236);
	var warning = __webpack_require__(25);
	
	var warnedAboutBatchedUpdates = false;
	
	React.addons = {
	  CSSTransitionGroup: ReactCSSTransitionGroup,
	  LinkedStateMixin: LinkedStateMixin,
	  PureRenderMixin: ReactComponentWithPureRenderMixin,
	  TransitionGroup: ReactTransitionGroup,
	
	  batchedUpdates: function () {
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(warnedAboutBatchedUpdates, 'React.addons.batchedUpdates is deprecated. Use ' + 'ReactDOM.unstable_batchedUpdates instead.') : undefined;
	      warnedAboutBatchedUpdates = true;
	    }
	    return ReactUpdates.batchedUpdates.apply(this, arguments);
	  },
	  cloneWithProps: cloneWithProps,
	  createFragment: ReactFragment.create,
	  shallowCompare: shallowCompare,
	  update: update
	};
	
	if (process.env.NODE_ENV !== 'production') {
	  React.addons.Perf = __webpack_require__(142);
	  React.addons.TestUtils = __webpack_require__(237);
	}
	
	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedStateMixin
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var ReactLink = __webpack_require__(222);
	var ReactStateSetters = __webpack_require__(223);
	
	/**
	 * A simple mixin around ReactLink.forState().
	 */
	var LinkedStateMixin = {
	  /**
	   * Create a ReactLink that's linked to part of this component's state. The
	   * ReactLink will have the current value of this.state[key] and will call
	   * setState() when a change is requested.
	   *
	   * @param {string} key state key to update. Note: you may want to use keyOf()
	   * if you're using Google Closure Compiler advanced mode.
	   * @return {ReactLink} ReactLink instance linking to the state.
	   */
	  linkState: function (key) {
	    return new ReactLink(this.state[key], ReactStateSetters.createStateKeySetter(this, key));
	  }
	};
	
	module.exports = LinkedStateMixin;

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactLink
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * ReactLink encapsulates a common pattern in which a component wants to modify
	 * a prop received from its parent. ReactLink allows the parent to pass down a
	 * value coupled with a callback that, when invoked, expresses an intent to
	 * modify that value. For example:
	 *
	 * React.createClass({
	 *   getInitialState: function() {
	 *     return {value: ''};
	 *   },
	 *   render: function() {
	 *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
	 *     return <input valueLink={valueLink} />;
	 *   },
	 *   _handleValueChange: function(newValue) {
	 *     this.setState({value: newValue});
	 *   }
	 * });
	 *
	 * We have provided some sugary mixins to make the creation and
	 * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
	 */
	
	var React = __webpack_require__(2);
	
	/**
	 * @param {*} value current value of the link
	 * @param {function} requestChange callback to request a change
	 */
	function ReactLink(value, requestChange) {
	  this.value = value;
	  this.requestChange = requestChange;
	}
	
	/**
	 * Creates a PropType that enforces the ReactLink API and optionally checks the
	 * type of the value being passed inside the link. Example:
	 *
	 * MyComponent.propTypes = {
	 *   tabIndexLink: ReactLink.PropTypes.link(React.PropTypes.number)
	 * }
	 */
	function createLinkTypeChecker(linkType) {
	  var shapes = {
	    value: typeof linkType === 'undefined' ? React.PropTypes.any.isRequired : linkType.isRequired,
	    requestChange: React.PropTypes.func.isRequired
	  };
	  return React.PropTypes.shape(shapes);
	}
	
	ReactLink.PropTypes = {
	  link: createLinkTypeChecker
	};
	
	module.exports = ReactLink;

/***/ },
/* 223 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactStateSetters
	 */
	
	'use strict';
	
	var ReactStateSetters = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function (component, funcReturningState) {
	    return function (a, b, c, d, e, f) {
	      var partialState = funcReturningState.call(component, a, b, c, d, e, f);
	      if (partialState) {
	        component.setState(partialState);
	      }
	    };
	  },
	
	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function (component, key) {
	    // Memoize the setters.
	    var cache = component.__keySetters || (component.__keySetters = {});
	    return cache[key] || (cache[key] = createStateKeySetter(component, key));
	  }
	};
	
	function createStateKeySetter(component, key) {
	  // Partial state is allocated outside of the function closure so it can be
	  // reused with every call, avoiding memory allocation when this function
	  // is called.
	  var partialState = {};
	  return function stateKeySetter(value) {
	    partialState[key] = value;
	    component.setState(partialState);
	  };
	}
	
	ReactStateSetters.Mixin = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateSetter(function(xValue) {
	   *     return {x: xValue};
	   *   })(1);
	   *
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function (funcReturningState) {
	    return ReactStateSetters.createStateSetter(this, funcReturningState);
	  },
	
	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateKeySetter('x')(1);
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function (key) {
	    return ReactStateSetters.createStateKeySetter(this, key);
	  }
	};
	
	module.exports = ReactStateSetters;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */
	
	'use strict';
	
	var shallowCompare = __webpack_require__(225);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/
	
	'use strict';
	
	var shallowEqual = __webpack_require__(117);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroup
	 */
	
	'use strict';
	
	var React = __webpack_require__(2);
	
	var assign = __webpack_require__(39);
	
	var ReactTransitionGroup = __webpack_require__(227);
	var ReactCSSTransitionGroupChild = __webpack_require__(229);
	
	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;
	
	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
	
	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	        }
	    }
	  };
	}
	
	var ReactCSSTransitionGroup = React.createClass({
	  displayName: 'ReactCSSTransitionGroup',
	
	  propTypes: {
	    transitionName: ReactCSSTransitionGroupChild.propTypes.name,
	
	    transitionAppear: React.PropTypes.bool,
	    transitionEnter: React.PropTypes.bool,
	    transitionLeave: React.PropTypes.bool,
	    transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	    transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	    transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	  },
	
	  getDefaultProps: function () {
	    return {
	      transitionAppear: false,
	      transitionEnter: true,
	      transitionLeave: true
	    };
	  },
	
	  _wrapChild: function (child) {
	    // We need to provide this childFactory so that
	    // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	    // leave while it is leaving.
	    return React.createElement(ReactCSSTransitionGroupChild, {
	      name: this.props.transitionName,
	      appear: this.props.transitionAppear,
	      enter: this.props.transitionEnter,
	      leave: this.props.transitionLeave,
	      appearTimeout: this.props.transitionAppearTimeout,
	      enterTimeout: this.props.transitionEnterTimeout,
	      leaveTimeout: this.props.transitionLeaveTimeout
	    }, child);
	  },
	
	  render: function () {
	    return React.createElement(ReactTransitionGroup, assign({}, this.props, { childFactory: this._wrapChild }));
	  }
	});
	
	module.exports = ReactCSSTransitionGroup;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */
	
	'use strict';
	
	var React = __webpack_require__(2);
	var ReactTransitionChildMapping = __webpack_require__(228);
	
	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);
	
	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',
	
	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },
	
	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },
	
	  getInitialState: function () {
	    return {
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },
	
	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },
	
	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });
	
	    var key;
	
	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  },
	
	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },
	
	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];
	
	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	
	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },
	
	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	    return React.createElement(this.props.component, this.props, childrenToRender);
	  }
	});
	
	module.exports = ReactTransitionGroup;

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactTransitionChildMapping
	 */
	
	'use strict';
	
	var flattenChildren = __webpack_require__(116);
	
	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children) {
	    if (!children) {
	      return children;
	    }
	    return flattenChildren(children);
	  },
	
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};
	
	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};
	
	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }
	
	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }
	
	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }
	
	    return childMapping;
	  }
	};
	
	module.exports = ReactTransitionChildMapping;

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * @providesModule ReactCSSTransitionGroupChild
	 */
	
	'use strict';
	
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	
	var CSSCore = __webpack_require__(230);
	var ReactTransitionEvents = __webpack_require__(231);
	
	var onlyChild = __webpack_require__(156);
	
	// We don't remove the element from the DOM until we receive an animationend or
	// transitionend event. If the user screws up and forgets to add an animation
	// their node will be stuck in the DOM forever, so we detect if an animation
	// does not start and if it doesn't, we just call the end listener immediately.
	var TICK = 17;
	
	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',
	
	  propTypes: {
	    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      active: React.PropTypes.string
	    }), React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      enterActive: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      leaveActive: React.PropTypes.string,
	      appear: React.PropTypes.string,
	      appearActive: React.PropTypes.string
	    })]).isRequired,
	
	    // Once we require timeouts to be specified, we can remove the
	    // boolean flags (appear etc.) and just accept a number
	    // or a bool for the timeout flags (appearTimeout etc.)
	    appear: React.PropTypes.bool,
	    enter: React.PropTypes.bool,
	    leave: React.PropTypes.bool,
	    appearTimeout: React.PropTypes.number,
	    enterTimeout: React.PropTypes.number,
	    leaveTimeout: React.PropTypes.number
	  },
	
	  transition: function (animationType, finishCallback, userSpecifiedDelay) {
	    var node = ReactDOM.findDOMNode(this);
	
	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }
	
	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timeout = null;
	
	    var endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      clearTimeout(timeout);
	
	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);
	
	      ReactTransitionEvents.removeEndEventListener(node, endListener);
	
	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };
	
	    CSSCore.addClass(node, className);
	
	    // Need to do this to actually trigger a transition.
	    this.queueClass(activeClassName);
	
	    // If the user specified a timeout delay.
	    if (userSpecifiedDelay) {
	      // Clean-up the animation after the specified delay
	      timeout = setTimeout(endListener, userSpecifiedDelay);
	      this.transitionTimeouts.push(timeout);
	    } else {
	      // DEPRECATED: this listener will be removed in a future version of react
	      ReactTransitionEvents.addEndEventListener(node, endListener);
	    }
	  },
	
	  queueClass: function (className) {
	    this.classNameQueue.push(className);
	
	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameQueue, TICK);
	    }
	  },
	
	  flushClassNameQueue: function () {
	    if (this.isMounted()) {
	      this.classNameQueue.forEach(CSSCore.addClass.bind(CSSCore, ReactDOM.findDOMNode(this)));
	    }
	    this.classNameQueue.length = 0;
	    this.timeout = null;
	  },
	
	  componentWillMount: function () {
	    this.classNameQueue = [];
	    this.transitionTimeouts = [];
	  },
	
	  componentWillUnmount: function () {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });
	  },
	
	  componentWillAppear: function (done) {
	    if (this.props.appear) {
	      this.transition('appear', done, this.props.appearTimeout);
	    } else {
	      done();
	    }
	  },
	
	  componentWillEnter: function (done) {
	    if (this.props.enter) {
	      this.transition('enter', done, this.props.enterTimeout);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function (done) {
	    if (this.props.leave) {
	      this.transition('leave', done, this.props.leaveTimeout);
	    } else {
	      done();
	    }
	  },
	
	  render: function () {
	    return onlyChild(this.props.children);
	  }
	});
	
	module.exports = ReactCSSTransitionGroupChild;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSCore
	 * @typechecks
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(13);
	
	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */
	
	var CSSCore = {
	
	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function (element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;
	
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function (element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : undefined;
	
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function (element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },
	
	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function (element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : undefined;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  }
	
	};
	
	module.exports = CSSCore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionEvents
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(9);
	
	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },
	
	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}
	
	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFragment
	 */
	
	'use strict';
	
	var ReactChildren = __webpack_require__(110);
	var ReactElement = __webpack_require__(42);
	
	var emptyFunction = __webpack_require__(15);
	var invariant = __webpack_require__(13);
	var warning = __webpack_require__(25);
	
	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set a fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */
	
	var numericPropertyRegex = /^\d+$/;
	
	var warnedAboutNumeric = false;
	
	var ReactFragment = {
	  // Wrap a keyed object in an opaque proxy that warns you if you access any
	  // of its properties.
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : undefined;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : undefined;
	      return object;
	    }
	
	    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.') : invariant(false) : undefined;
	
	    var result = [];
	
	    for (var key in object) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : undefined;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }
	
	    return result;
	  }
	};
	
	module.exports = ReactFragment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule cloneWithProps
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(42);
	var ReactPropTransferer = __webpack_require__(234);
	
	var keyOf = __webpack_require__(79);
	var warning = __webpack_require__(25);
	
	var CHILDREN_PROP = keyOf({ children: null });
	
	var didDeprecatedWarn = false;
	
	/**
	 * Sometimes you want to change the props of a child passed to you. Usually
	 * this is to add a CSS class.
	 *
	 * @param {ReactElement} child child element you'd like to clone
	 * @param {object} props props you'd like to modify. className and style will be
	 * merged automatically.
	 * @return {ReactElement} a clone of child with props merged in.
	 * @deprecated
	 */
	function cloneWithProps(child, props) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(didDeprecatedWarn, 'cloneWithProps(...) is deprecated. ' + 'Please use React.cloneElement instead.') : undefined;
	    didDeprecatedWarn = true;
	    process.env.NODE_ENV !== 'production' ? warning(!child.ref, 'You are calling cloneWithProps() on a child with a ref. This is ' + 'dangerous because you\'re creating a new child which will not be ' + 'added as a ref to its parent.') : undefined;
	  }
	
	  var newProps = ReactPropTransferer.mergeProps(props, child.props);
	
	  // Use `child.props.children` if it is provided.
	  if (!newProps.hasOwnProperty(CHILDREN_PROP) && child.props.hasOwnProperty(CHILDREN_PROP)) {
	    newProps.children = child.props.children;
	  }
	
	  // The current API doesn't retain _owner, which is why this
	  // doesn't use ReactElement.cloneAndReplaceProps.
	  return ReactElement.createElement(child.type, newProps);
	}
	
	module.exports = cloneWithProps;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTransferer
	 */
	
	'use strict';
	
	var assign = __webpack_require__(39);
	var emptyFunction = __webpack_require__(15);
	var joinClasses = __webpack_require__(235);
	
	/**
	 * Creates a transfer strategy that will merge prop values using the supplied
	 * `mergeStrategy`. If a prop was previously unset, this just sets it.
	 *
	 * @param {function} mergeStrategy
	 * @return {function}
	 */
	function createTransferStrategy(mergeStrategy) {
	  return function (props, key, value) {
	    if (!props.hasOwnProperty(key)) {
	      props[key] = value;
	    } else {
	      props[key] = mergeStrategy(props[key], value);
	    }
	  };
	}
	
	var transferStrategyMerge = createTransferStrategy(function (a, b) {
	  // `merge` overrides the first object's (`props[key]` above) keys using the
	  // second object's (`value`) keys. An object's style's existing `propA` would
	  // get overridden. Flip the order here.
	  return assign({}, b, a);
	});
	
	/**
	 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
	 * NOTE: if you add any more exceptions to this list you should be sure to
	 * update `cloneWithProps()` accordingly.
	 */
	var TransferStrategies = {
	  /**
	   * Never transfer `children`.
	   */
	  children: emptyFunction,
	  /**
	   * Transfer the `className` prop by merging them.
	   */
	  className: createTransferStrategy(joinClasses),
	  /**
	   * Transfer the `style` prop (which is an object) by merging them.
	   */
	  style: transferStrategyMerge
	};
	
	/**
	 * Mutates the first argument by transferring the properties from the second
	 * argument.
	 *
	 * @param {object} props
	 * @param {object} newProps
	 * @return {object}
	 */
	function transferInto(props, newProps) {
	  for (var thisKey in newProps) {
	    if (!newProps.hasOwnProperty(thisKey)) {
	      continue;
	    }
	
	    var transferStrategy = TransferStrategies[thisKey];
	
	    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
	      transferStrategy(props, thisKey, newProps[thisKey]);
	    } else if (!props.hasOwnProperty(thisKey)) {
	      props[thisKey] = newProps[thisKey];
	    }
	  }
	  return props;
	}
	
	/**
	 * ReactPropTransferer are capable of transferring props to another component
	 * using a `transferPropsTo` method.
	 *
	 * @class ReactPropTransferer
	 */
	var ReactPropTransferer = {
	
	  /**
	   * Merge two props objects using TransferStrategies.
	   *
	   * @param {object} oldProps original props (they take precedence)
	   * @param {object} newProps new props to merge in
	   * @return {object} a new object containing both sets of props merged.
	   */
	  mergeProps: function (oldProps, newProps) {
	    return transferInto(assign({}, oldProps), newProps);
	  }
	
	};
	
	module.exports = ReactPropTransferer;

/***/ },
/* 235 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule joinClasses
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Combines multiple className strings into one.
	 * http://jsperf.com/joinclasses-args-vs-array
	 *
	 * @param {...?string} className
	 * @return {string}
	 */
	function joinClasses(className /*, ... */) {
	  if (!className) {
	    className = '';
	  }
	  var nextClass;
	  var argLength = arguments.length;
	  if (argLength > 1) {
	    for (var ii = 1; ii < argLength; ii++) {
	      nextClass = arguments[ii];
	      if (nextClass) {
	        className = (className ? className + ' ' : '') + nextClass;
	      }
	    }
	  }
	  return className;
	}
	
	module.exports = joinClasses;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */
	
	/* global hasOwnProperty:true */
	
	'use strict';
	
	var assign = __webpack_require__(39);
	var keyOf = __webpack_require__(79);
	var invariant = __webpack_require__(13);
	var hasOwnProperty = ({}).hasOwnProperty;
	
	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}
	
	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });
	
	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];
	
	var ALL_COMMANDS_SET = {};
	
	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});
	
	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
	}
	
	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;
	
	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;
	
	    return spec[COMMAND_SET];
	  }
	
	  var nextValue = shallowCopy(value);
	
	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }
	
	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }
	
	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }
	
	  return nextValue;
	}
	
	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTestUtils
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(30);
	var EventPluginHub = __webpack_require__(31);
	var EventPropagators = __webpack_require__(73);
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	var ReactElement = __webpack_require__(42);
	var ReactBrowserEventEmitter = __webpack_require__(29);
	var ReactCompositeComponent = __webpack_require__(63);
	var ReactInstanceHandles = __webpack_require__(45);
	var ReactInstanceMap = __webpack_require__(47);
	var ReactMount = __webpack_require__(28);
	var ReactUpdates = __webpack_require__(54);
	var SyntheticEvent = __webpack_require__(77);
	
	var assign = __webpack_require__(39);
	var emptyObject = __webpack_require__(58);
	var findDOMNode = __webpack_require__(91);
	var invariant = __webpack_require__(13);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	function Event(suffix) {}
	
	/**
	 * @class ReactTestUtils
	 */
	
	function findAllInRenderedTreeInternal(inst, test) {
	  if (!inst || !inst.getPublicInstance) {
	    return [];
	  }
	  var publicInst = inst.getPublicInstance();
	  var ret = test(publicInst) ? [publicInst] : [];
	  var currentElement = inst._currentElement;
	  if (ReactTestUtils.isDOMComponent(publicInst)) {
	    var renderedChildren = inst._renderedChildren;
	    var key;
	    for (key in renderedChildren) {
	      if (!renderedChildren.hasOwnProperty(key)) {
	        continue;
	      }
	      ret = ret.concat(findAllInRenderedTreeInternal(renderedChildren[key], test));
	    }
	  } else if (ReactElement.isValidElement(currentElement) && typeof currentElement.type === 'function') {
	    ret = ret.concat(findAllInRenderedTreeInternal(inst._renderedComponent, test));
	  }
	  return ret;
	}
	
	/**
	 * Todo: Support the entire DOM.scry query syntax. For now, these simple
	 * utilities will suffice for testing purposes.
	 * @lends ReactTestUtils
	 */
	var ReactTestUtils = {
	  renderIntoDocument: function (instance) {
	    var div = document.createElement('div');
	    // None of our tests actually require attaching the container to the
	    // DOM, and doing so creates a mess that we rely on test isolation to
	    // clean up, so we're going to stop honoring the name of this method
	    // (and probably rename it eventually) if no problems arise.
	    // document.documentElement.appendChild(div);
	    return ReactDOM.render(instance, div);
	  },
	
	  isElement: function (element) {
	    return ReactElement.isValidElement(element);
	  },
	
	  isElementOfType: function (inst, convenienceConstructor) {
	    return ReactElement.isValidElement(inst) && inst.type === convenienceConstructor;
	  },
	
	  isDOMComponent: function (inst) {
	    return !!(inst && inst.nodeType === 1 && inst.tagName);
	  },
	
	  isDOMComponentElement: function (inst) {
	    return !!(inst && ReactElement.isValidElement(inst) && !!inst.tagName);
	  },
	
	  isCompositeComponent: function (inst) {
	    if (ReactTestUtils.isDOMComponent(inst)) {
	      // Accessing inst.setState warns; just return false as that'll be what
	      // this returns when we have DOM nodes as refs directly
	      return false;
	    }
	    return inst != null && typeof inst.render === 'function' && typeof inst.setState === 'function';
	  },
	
	  isCompositeComponentWithType: function (inst, type) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return false;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    var constructor = internalInstance._currentElement.type;
	
	    return constructor === type;
	  },
	
	  isCompositeComponentElement: function (inst) {
	    if (!ReactElement.isValidElement(inst)) {
	      return false;
	    }
	    // We check the prototype of the type that will get mounted, not the
	    // instance itself. This is a future proof way of duck typing.
	    var prototype = inst.type.prototype;
	    return typeof prototype.render === 'function' && typeof prototype.setState === 'function';
	  },
	
	  isCompositeComponentElementWithType: function (inst, type) {
	    var internalInstance = ReactInstanceMap.get(inst);
	    var constructor = internalInstance._currentElement.type;
	
	    return !!(ReactTestUtils.isCompositeComponentElement(inst) && constructor === type);
	  },
	
	  getRenderedChildOfCompositeComponent: function (inst) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return null;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    return internalInstance._renderedComponent.getPublicInstance();
	  },
	
	  findAllInRenderedTree: function (inst, test) {
	    if (!inst) {
	      return [];
	    }
	    !ReactTestUtils.isCompositeComponent(inst) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findAllInRenderedTree(...): instance must be a composite component') : invariant(false) : undefined;
	    return findAllInRenderedTreeInternal(ReactInstanceMap.get(inst), test);
	  },
	
	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the class name matching `className`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithClass: function (root, classNames) {
	    if (!Array.isArray(classNames)) {
	      classNames = classNames.split(/\s+/);
	    }
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      if (ReactTestUtils.isDOMComponent(inst)) {
	        var className = inst.className;
	        if (typeof className !== 'string') {
	          // SVG, probably.
	          className = inst.getAttribute('class') || '';
	        }
	        var classList = className.split(/\s+/);
	        return classNames.every(function (name) {
	          return classList.indexOf(name) !== -1;
	        });
	      }
	      return false;
	    });
	  },
	
	  /**
	   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithClass: function (root, className) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match ' + '(found: ' + all.length + ') for class:' + className);
	    }
	    return all[0];
	  },
	
	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the tag name matching `tagName`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithTag: function (root, tagName) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      return ReactTestUtils.isDOMComponent(inst) && inst.tagName.toUpperCase() === tagName.toUpperCase();
	    });
	  },
	
	  /**
	   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithTag: function (root, tagName) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match for tag:' + tagName);
	    }
	    return all[0];
	  },
	
	  /**
	   * Finds all instances of components with type equal to `componentType`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedComponentsWithType: function (root, componentType) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      return ReactTestUtils.isCompositeComponentWithType(inst, componentType);
	    });
	  },
	
	  /**
	   * Same as `scryRenderedComponentsWithType` but expects there to be one result
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactComponent} The one match.
	   */
	  findRenderedComponentWithType: function (root, componentType) {
	    var all = ReactTestUtils.scryRenderedComponentsWithType(root, componentType);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match for componentType:' + componentType + ' (found ' + all.length + ')');
	    }
	    return all[0];
	  },
	
	  /**
	   * Pass a mocked component module to this method to augment it with
	   * useful methods that allow it to be used as a dummy React component.
	   * Instead of rendering as usual, the component will become a simple
	   * <div> containing any provided children.
	   *
	   * @param {object} module the mock function object exported from a
	   *                        module that defines the component to be mocked
	   * @param {?string} mockTagName optional dummy root tag name to return
	   *                              from render method (overrides
	   *                              module.mockTagName if provided)
	   * @return {object} the ReactTestUtils object (for chaining)
	   */
	  mockComponent: function (module, mockTagName) {
	    mockTagName = mockTagName || module.mockTagName || 'div';
	
	    module.prototype.render.mockImplementation(function () {
	      return React.createElement(mockTagName, null, this.props.children);
	    });
	
	    return this;
	  },
	
	  /**
	   * Simulates a top level event being dispatched from a raw event that occurred
	   * on an `Element` node.
	   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`
	   * @param {!Element} node The dom to simulate an event occurring on.
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnNode: function (topLevelType, node, fakeNativeEvent) {
	    fakeNativeEvent.target = node;
	    ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(topLevelType, fakeNativeEvent);
	  },
	
	  /**
	   * Simulates a top level event being dispatched from a raw event that occurred
	   * on the `ReactDOMComponent` `comp`.
	   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`.
	   * @param {!ReactDOMComponent} comp
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnDOMComponent: function (topLevelType, comp, fakeNativeEvent) {
	    ReactTestUtils.simulateNativeEventOnNode(topLevelType, findDOMNode(comp), fakeNativeEvent);
	  },
	
	  nativeTouchData: function (x, y) {
	    return {
	      touches: [{ pageX: x, pageY: y }]
	    };
	  },
	
	  createRenderer: function () {
	    return new ReactShallowRenderer();
	  },
	
	  Simulate: null,
	  SimulateNative: {}
	};
	
	/**
	 * @class ReactShallowRenderer
	 */
	var ReactShallowRenderer = function () {
	  this._instance = null;
	};
	
	ReactShallowRenderer.prototype.getRenderOutput = function () {
	  return this._instance && this._instance._renderedComponent && this._instance._renderedComponent._renderedOutput || null;
	};
	
	var NoopInternalComponent = function (element) {
	  this._renderedOutput = element;
	  this._currentElement = element;
	};
	
	NoopInternalComponent.prototype = {
	
	  mountComponent: function () {},
	
	  receiveComponent: function (element) {
	    this._renderedOutput = element;
	    this._currentElement = element;
	  },
	
	  unmountComponent: function () {},
	
	  getPublicInstance: function () {
	    return null;
	  }
	};
	
	var ShallowComponentWrapper = function () {};
	assign(ShallowComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
	  _instantiateReactComponent: function (element) {
	    return new NoopInternalComponent(element);
	  },
	  _replaceNodeWithMarkupByID: function () {},
	  _renderValidatedComponent: ReactCompositeComponent.Mixin._renderValidatedComponentWithoutOwnerOrContext
	});
	
	ReactShallowRenderer.prototype.render = function (element, context) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactShallowRenderer render(): Invalid component element.%s', typeof element === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : '') : invariant(false) : undefined;
	  !(typeof element.type !== 'string') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactShallowRenderer render(): Shallow rendering works only with custom ' + 'components, not primitives (%s). Instead of calling `.render(el)` and ' + 'inspecting the rendered output, look at `el.props` directly instead.', element.type) : invariant(false) : undefined;
	
	  if (!context) {
	    context = emptyObject;
	  }
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(false);
	  this._render(element, transaction, context);
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	};
	
	ReactShallowRenderer.prototype.unmount = function () {
	  if (this._instance) {
	    this._instance.unmountComponent();
	  }
	};
	
	ReactShallowRenderer.prototype._render = function (element, transaction, context) {
	  if (this._instance) {
	    this._instance.receiveComponent(element, transaction, context);
	  } else {
	    var rootID = ReactInstanceHandles.createReactRootID();
	    var instance = new ShallowComponentWrapper(element.type);
	    instance.construct(element);
	
	    instance.mountComponent(rootID, transaction, context);
	
	    this._instance = instance;
	  }
	};
	
	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
	 * - ... (All keys from event plugin `eventTypes` objects)
	 */
	function makeSimulator(eventType) {
	  return function (domComponentOrNode, eventData) {
	    var node;
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      node = findDOMNode(domComponentOrNode);
	    } else if (domComponentOrNode.tagName) {
	      node = domComponentOrNode;
	    }
	
	    var dispatchConfig = ReactBrowserEventEmitter.eventNameDispatchConfigs[eventType];
	
	    var fakeNativeEvent = new Event();
	    fakeNativeEvent.target = node;
	    // We don't use SyntheticEvent.getPooled in order to not have to worry about
	    // properly destroying any properties assigned from `eventData` upon release
	    var event = new SyntheticEvent(dispatchConfig, ReactMount.getID(node), fakeNativeEvent, node);
	    assign(event, eventData);
	
	    if (dispatchConfig.phasedRegistrationNames) {
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	    } else {
	      EventPropagators.accumulateDirectDispatches(event);
	    }
	
	    ReactUpdates.batchedUpdates(function () {
	      EventPluginHub.enqueueEvents(event);
	      EventPluginHub.processEventQueue(true);
	    });
	  };
	}
	
	function buildSimulators() {
	  ReactTestUtils.Simulate = {};
	
	  var eventType;
	  for (eventType in ReactBrowserEventEmitter.eventNameDispatchConfigs) {
	    /**
	     * @param {!Element|ReactDOMComponent} domComponentOrNode
	     * @param {?object} eventData Fake event data to use in SyntheticEvent.
	     */
	    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
	  }
	}
	
	// Rebuild ReactTestUtils.Simulate whenever event plugins are injected
	var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
	EventPluginHub.injection.injectEventPluginOrder = function () {
	  oldInjectEventPluginOrder.apply(this, arguments);
	  buildSimulators();
	};
	var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
	EventPluginHub.injection.injectEventPluginsByName = function () {
	  oldInjectEventPlugins.apply(this, arguments);
	  buildSimulators();
	};
	
	buildSimulators();
	
	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
	 * - ... (All keys from `EventConstants.topLevelTypes`)
	 *
	 * Note: Top level event types are a subset of the entire set of handler types
	 * (which include a broader set of "synthetic" events). For example, onDragDone
	 * is a synthetic event. Except when testing an event plugin or React's event
	 * handling code specifically, you probably want to use ReactTestUtils.Simulate
	 * to dispatch synthetic events.
	 */
	
	function makeNativeSimulator(eventType) {
	  return function (domComponentOrNode, nativeEventData) {
	    var fakeNativeEvent = new Event(eventType);
	    assign(fakeNativeEvent, nativeEventData);
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      ReactTestUtils.simulateNativeEventOnDOMComponent(eventType, domComponentOrNode, fakeNativeEvent);
	    } else if (domComponentOrNode.tagName) {
	      // Will allow on actual dom nodes.
	      ReactTestUtils.simulateNativeEventOnNode(eventType, domComponentOrNode, fakeNativeEvent);
	    }
	  };
	}
	
	Object.keys(topLevelTypes).forEach(function (eventType) {
	  // Event type is stored as 'topClick' - we transform that to 'click'
	  var convenienceName = eventType.indexOf('top') === 0 ? eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
	  /**
	   * @param {!Element|ReactDOMComponent} domComponentOrNode
	   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
	   */
	  ReactTestUtils.SimulateNative[convenienceName] = makeNativeSimulator(eventType);
	});
	
	module.exports = ReactTestUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(219);
	
	var joinClasses = __webpack_require__(239),
	    assign = __webpack_require__(240);
	
	var ExpandableNavbar = React.createClass({displayName: "ExpandableNavbar",
	  propTypes: {
	    fullWidth: React.PropTypes.number,
	    smallWidth: React.PropTypes.number,
	    fullClass: React.PropTypes.string,
	    smallClass: React.PropTypes.string
	  },
	  getDefaultProps:function() {
	    return {
	      fullWidth: 240,
	      smallWidth: 50
	    };
	  },
	  render:function() {
	    var navbarStyle = assign({
	      position: 'fixed',
	      top: 0,
	      left: 0,
	      height: 100 + '%',
	      borderRadius: 0,
	      border: 0,
	      width: this.props.expanded ? this.props.fullWidth : this.props.smallWidth
	    }, this.props.style);
	
	    var navbarContainerStyle = {
	      padding: 0,
	      width: 100 + '%',
	      height: 100 + '%',
	      position: 'relative'
	    };
	
	    var classes = "navbar navbar-inverse " +
	      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);
	    return (
	      React.createElement("div", {className: classes, style: navbarStyle, role: "navigation"}, 
	        React.createElement("div", {style: navbarContainerStyle}, 
	          React.Children.map(this.props.children, this.renderChild)
	        )
	      )
	    );
	  },
	  renderChild:function(child, i) {
	    return React.addons.cloneWithProps(child, {
	      key: i,
	      expanded: this.props.expanded
	    });
	  },
	});
	
	module.exports = ExpandableNavbar;


/***/ },
/* 239 */
/***/ function(module, exports) {

	/**
	* Copyright 2013-2014, Facebook, Inc.
	* All rights reserved.
	*
	* This file contains an unmodified version of:
	* https://github.com/facebook/react/blob/v0.12.0/src/utils/joinClasses.js
	*
	* This source code is licensed under the BSD-style license found here:
	* https://github.com/facebook/react/blob/v0.12.0/LICENSE
	* An additional grant of patent rights can be found here:
	* https://github.com/facebook/react/blob/v0.12.0/PATENTS
	*/
	"use strict";
	/**
	* Combines multiple className strings into one.
	* http://jsperf.com/joinclasses-args-vs-array
	*
	* @param {...?string} classes
	* @return {string}
	*/
	function joinClasses(className/*, ... */) {
	if (!className) {
	className = '';
	}
	var nextClass;
	var argLength = arguments.length;
	if (argLength > 1) {
	for (var ii = 1; ii < argLength; ii++) {
	nextClass = arguments[ii];
	if (nextClass) {
	className = (className ? className + ' ' : '') + nextClass;
	}
	}
	}
	return className;
	}
	module.exports = joinClasses;


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var baseCreateCallback = __webpack_require__(241),
	    keys = __webpack_require__(256),
	    objectTypes = __webpack_require__(248);
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources will overwrite property assignments of previous
	 * sources. If a callback is provided it will be executed to produce the
	 * assigned values. The callback is bound to `thisArg` and invoked with two
	 * arguments; (objectValue, sourceValue).
	 *
	 * @static
	 * @memberOf _
	 * @type Function
	 * @alias extend
	 * @category Objects
	 * @param {Object} object The destination object.
	 * @param {...Object} [source] The source objects.
	 * @param {Function} [callback] The function to customize assigning values.
	 * @param {*} [thisArg] The `this` binding of `callback`.
	 * @returns {Object} Returns the destination object.
	 * @example
	 *
	 * _.assign({ 'name': 'fred' }, { 'employer': 'slate' });
	 * // => { 'name': 'fred', 'employer': 'slate' }
	 *
	 * var defaults = _.partialRight(_.assign, function(a, b) {
	 *   return typeof a == 'undefined' ? b : a;
	 * });
	 *
	 * var object = { 'name': 'barney' };
	 * defaults(object, { 'name': 'fred', 'employer': 'slate' });
	 * // => { 'name': 'barney', 'employer': 'slate' }
	 */
	var assign = function(object, source, guard) {
	  var index, iterable = object, result = iterable;
	  if (!iterable) return result;
	  var args = arguments,
	      argsIndex = 0,
	      argsLength = typeof guard == 'number' ? 2 : args.length;
	  if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {
	    var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);
	  } else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {
	    callback = args[--argsLength];
	  }
	  while (++argsIndex < argsLength) {
	    iterable = args[argsIndex];
	    if (iterable && objectTypes[typeof iterable]) {
	    var ownIndex = -1,
	        ownProps = objectTypes[typeof iterable] && keys(iterable),
	        length = ownProps ? ownProps.length : 0;
	
	    while (++ownIndex < length) {
	      index = ownProps[ownIndex];
	      result[index] = callback ? callback(result[index], iterable[index]) : iterable[index];
	    }
	    }
	  }
	  return result
	};
	
	module.exports = assign;


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var bind = __webpack_require__(242),
	    identity = __webpack_require__(254),
	    setBindData = __webpack_require__(250),
	    support = __webpack_require__(255);
	
	/** Used to detected named functions */
	var reFuncName = /^\s*function[ \n\r\t]+\w/;
	
	/** Used to detect functions containing a `this` reference */
	var reThis = /\bthis\b/;
	
	/** Native method shortcuts */
	var fnToString = Function.prototype.toString;
	
	/**
	 * The base implementation of `_.createCallback` without support for creating
	 * "_.pluck" or "_.where" style callbacks.
	 *
	 * @private
	 * @param {*} [func=identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of the created callback.
	 * @param {number} [argCount] The number of arguments the callback accepts.
	 * @returns {Function} Returns a callback function.
	 */
	function baseCreateCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  // exit early for no `thisArg` or already bound by `Function#bind`
	  if (typeof thisArg == 'undefined' || !('prototype' in func)) {
	    return func;
	  }
	  var bindData = func.__bindData__;
	  if (typeof bindData == 'undefined') {
	    if (support.funcNames) {
	      bindData = !func.name;
	    }
	    bindData = bindData || !support.funcDecomp;
	    if (!bindData) {
	      var source = fnToString.call(func);
	      if (!support.funcNames) {
	        bindData = !reFuncName.test(source);
	      }
	      if (!bindData) {
	        // checks if `func` references the `this` keyword and stores the result
	        bindData = reThis.test(source);
	        setBindData(func, bindData);
	      }
	    }
	  }
	  // exit early if there are no `this` references or `func` is bound
	  if (bindData === false || (bindData !== true && bindData[1] & 1)) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 2: return function(a, b) {
	      return func.call(thisArg, a, b);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	  }
	  return bind(func, thisArg);
	}
	
	module.exports = baseCreateCallback;


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var createWrapper = __webpack_require__(243),
	    slice = __webpack_require__(251);
	
	/**
	 * Creates a function that, when called, invokes `func` with the `this`
	 * binding of `thisArg` and prepends any additional `bind` arguments to those
	 * provided to the bound function.
	 *
	 * @static
	 * @memberOf _
	 * @category Functions
	 * @param {Function} func The function to bind.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {...*} [arg] Arguments to be partially applied.
	 * @returns {Function} Returns the new bound function.
	 * @example
	 *
	 * var func = function(greeting) {
	 *   return greeting + ' ' + this.name;
	 * };
	 *
	 * func = _.bind(func, { 'name': 'fred' }, 'hi');
	 * func();
	 * // => 'hi fred'
	 */
	function bind(func, thisArg) {
	  return arguments.length > 2
	    ? createWrapper(func, 17, slice(arguments, 2), null, thisArg)
	    : createWrapper(func, 1, null, null, thisArg);
	}
	
	module.exports = bind;


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var baseBind = __webpack_require__(244),
	    baseCreateWrapper = __webpack_require__(252),
	    isFunction = __webpack_require__(253),
	    slice = __webpack_require__(251);
	
	/**
	 * Used for `Array` method references.
	 *
	 * Normally `Array.prototype` would suffice, however, using an array literal
	 * avoids issues in Narwhal.
	 */
	var arrayRef = [];
	
	/** Native method shortcuts */
	var push = arrayRef.push,
	    unshift = arrayRef.unshift;
	
	/**
	 * Creates a function that, when called, either curries or invokes `func`
	 * with an optional `this` binding and partially applied arguments.
	 *
	 * @private
	 * @param {Function|string} func The function or method name to reference.
	 * @param {number} bitmask The bitmask of method flags to compose.
	 *  The bitmask may be composed of the following flags:
	 *  1 - `_.bind`
	 *  2 - `_.bindKey`
	 *  4 - `_.curry`
	 *  8 - `_.curry` (bound)
	 *  16 - `_.partial`
	 *  32 - `_.partialRight`
	 * @param {Array} [partialArgs] An array of arguments to prepend to those
	 *  provided to the new function.
	 * @param {Array} [partialRightArgs] An array of arguments to append to those
	 *  provided to the new function.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [arity] The arity of `func`.
	 * @returns {Function} Returns the new function.
	 */
	function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
	  var isBind = bitmask & 1,
	      isBindKey = bitmask & 2,
	      isCurry = bitmask & 4,
	      isCurryBound = bitmask & 8,
	      isPartial = bitmask & 16,
	      isPartialRight = bitmask & 32;
	
	  if (!isBindKey && !isFunction(func)) {
	    throw new TypeError;
	  }
	  if (isPartial && !partialArgs.length) {
	    bitmask &= ~16;
	    isPartial = partialArgs = false;
	  }
	  if (isPartialRight && !partialRightArgs.length) {
	    bitmask &= ~32;
	    isPartialRight = partialRightArgs = false;
	  }
	  var bindData = func && func.__bindData__;
	  if (bindData && bindData !== true) {
	    // clone `bindData`
	    bindData = slice(bindData);
	    if (bindData[2]) {
	      bindData[2] = slice(bindData[2]);
	    }
	    if (bindData[3]) {
	      bindData[3] = slice(bindData[3]);
	    }
	    // set `thisBinding` is not previously bound
	    if (isBind && !(bindData[1] & 1)) {
	      bindData[4] = thisArg;
	    }
	    // set if previously bound but not currently (subsequent curried functions)
	    if (!isBind && bindData[1] & 1) {
	      bitmask |= 8;
	    }
	    // set curried arity if not yet set
	    if (isCurry && !(bindData[1] & 4)) {
	      bindData[5] = arity;
	    }
	    // append partial left arguments
	    if (isPartial) {
	      push.apply(bindData[2] || (bindData[2] = []), partialArgs);
	    }
	    // append partial right arguments
	    if (isPartialRight) {
	      unshift.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
	    }
	    // merge flags
	    bindData[1] |= bitmask;
	    return createWrapper.apply(null, bindData);
	  }
	  // fast path for `_.bind`
	  var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
	  return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
	}
	
	module.exports = createWrapper;


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var baseCreate = __webpack_require__(245),
	    isObject = __webpack_require__(247),
	    setBindData = __webpack_require__(250),
	    slice = __webpack_require__(251);
	
	/**
	 * Used for `Array` method references.
	 *
	 * Normally `Array.prototype` would suffice, however, using an array literal
	 * avoids issues in Narwhal.
	 */
	var arrayRef = [];
	
	/** Native method shortcuts */
	var push = arrayRef.push;
	
	/**
	 * The base implementation of `_.bind` that creates the bound function and
	 * sets its meta data.
	 *
	 * @private
	 * @param {Array} bindData The bind data array.
	 * @returns {Function} Returns the new bound function.
	 */
	function baseBind(bindData) {
	  var func = bindData[0],
	      partialArgs = bindData[2],
	      thisArg = bindData[4];
	
	  function bound() {
	    // `Function#bind` spec
	    // http://es5.github.io/#x15.3.4.5
	    if (partialArgs) {
	      // avoid `arguments` object deoptimizations by using `slice` instead
	      // of `Array.prototype.slice.call` and not assigning `arguments` to a
	      // variable as a ternary expression
	      var args = slice(partialArgs);
	      push.apply(args, arguments);
	    }
	    // mimic the constructor's `return` behavior
	    // http://es5.github.io/#x13.2.2
	    if (this instanceof bound) {
	      // ensure `new bound` is an instance of `func`
	      var thisBinding = baseCreate(func.prototype),
	          result = func.apply(thisBinding, args || arguments);
	      return isObject(result) ? result : thisBinding;
	    }
	    return func.apply(thisArg, args || arguments);
	  }
	  setBindData(bound, bindData);
	  return bound;
	}
	
	module.exports = baseBind;


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var isNative = __webpack_require__(246),
	    isObject = __webpack_require__(247),
	    noop = __webpack_require__(249);
	
	/* Native method shortcuts for methods with the same name as other `lodash` methods */
	var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate;
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(prototype, properties) {
	  return isObject(prototype) ? nativeCreate(prototype) : {};
	}
	// fallback for browsers without `Object.create`
	if (!nativeCreate) {
	  baseCreate = (function() {
	    function Object() {}
	    return function(prototype) {
	      if (isObject(prototype)) {
	        Object.prototype = prototype;
	        var result = new Object;
	        Object.prototype = null;
	      }
	      return result || global.Object();
	    };
	  }());
	}
	
	module.exports = baseCreate;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 246 */
/***/ function(module, exports) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	
	/** Used for native method references */
	var objectProto = Object.prototype;
	
	/** Used to resolve the internal [[Class]] of values */
	var toString = objectProto.toString;
	
	/** Used to detect if a method is native */
	var reNative = RegExp('^' +
	  String(toString)
	    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	    .replace(/toString| for [^\]]+/g, '.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
	 */
	function isNative(value) {
	  return typeof value == 'function' && reNative.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var objectTypes = __webpack_require__(248);
	
	/**
	 * Checks if `value` is the language type of Object.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Objects
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // check if the value is the ECMAScript language type of Object
	  // http://es5.github.io/#x8
	  // and avoid a V8 bug
	  // http://code.google.com/p/v8/issues/detail?id=2291
	  return !!(value && objectTypes[typeof value]);
	}
	
	module.exports = isObject;


/***/ },
/* 248 */
/***/ function(module, exports) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	
	/** Used to determine if values are of the language type Object */
	var objectTypes = {
	  'boolean': false,
	  'function': true,
	  'object': true,
	  'number': false,
	  'string': false,
	  'undefined': false
	};
	
	module.exports = objectTypes;


/***/ },
/* 249 */
/***/ function(module, exports) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	
	/**
	 * A no-operation function.
	 *
	 * @static
	 * @memberOf _
	 * @category Utilities
	 * @example
	 *
	 * var object = { 'name': 'fred' };
	 * _.noop(object) === undefined;
	 * // => true
	 */
	function noop() {
	  // no operation performed
	}
	
	module.exports = noop;


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var isNative = __webpack_require__(246),
	    noop = __webpack_require__(249);
	
	/** Used as the property descriptor for `__bindData__` */
	var descriptor = {
	  'configurable': false,
	  'enumerable': false,
	  'value': null,
	  'writable': false
	};
	
	/** Used to set meta data on functions */
	var defineProperty = (function() {
	  // IE 8 only accepts DOM elements
	  try {
	    var o = {},
	        func = isNative(func = Object.defineProperty) && func,
	        result = func(o, o, o) && func;
	  } catch(e) { }
	  return result;
	}());
	
	/**
	 * Sets `this` binding data on a given function.
	 *
	 * @private
	 * @param {Function} func The function to set data on.
	 * @param {Array} value The data array to set.
	 */
	var setBindData = !defineProperty ? noop : function(func, value) {
	  descriptor.value = value;
	  defineProperty(func, '__bindData__', descriptor);
	};
	
	module.exports = setBindData;


/***/ },
/* 251 */
/***/ function(module, exports) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	
	/**
	 * Slices the `collection` from the `start` index up to, but not including,
	 * the `end` index.
	 *
	 * Note: This function is used instead of `Array#slice` to support node lists
	 * in IE < 9 and to ensure dense arrays are returned.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to slice.
	 * @param {number} start The start index.
	 * @param {number} end The end index.
	 * @returns {Array} Returns the new array.
	 */
	function slice(array, start, end) {
	  start || (start = 0);
	  if (typeof end == 'undefined') {
	    end = array ? array.length : 0;
	  }
	  var index = -1,
	      length = end - start || 0,
	      result = Array(length < 0 ? 0 : length);
	
	  while (++index < length) {
	    result[index] = array[start + index];
	  }
	  return result;
	}
	
	module.exports = slice;


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var baseCreate = __webpack_require__(245),
	    isObject = __webpack_require__(247),
	    setBindData = __webpack_require__(250),
	    slice = __webpack_require__(251);
	
	/**
	 * Used for `Array` method references.
	 *
	 * Normally `Array.prototype` would suffice, however, using an array literal
	 * avoids issues in Narwhal.
	 */
	var arrayRef = [];
	
	/** Native method shortcuts */
	var push = arrayRef.push;
	
	/**
	 * The base implementation of `createWrapper` that creates the wrapper and
	 * sets its meta data.
	 *
	 * @private
	 * @param {Array} bindData The bind data array.
	 * @returns {Function} Returns the new function.
	 */
	function baseCreateWrapper(bindData) {
	  var func = bindData[0],
	      bitmask = bindData[1],
	      partialArgs = bindData[2],
	      partialRightArgs = bindData[3],
	      thisArg = bindData[4],
	      arity = bindData[5];
	
	  var isBind = bitmask & 1,
	      isBindKey = bitmask & 2,
	      isCurry = bitmask & 4,
	      isCurryBound = bitmask & 8,
	      key = func;
	
	  function bound() {
	    var thisBinding = isBind ? thisArg : this;
	    if (partialArgs) {
	      var args = slice(partialArgs);
	      push.apply(args, arguments);
	    }
	    if (partialRightArgs || isCurry) {
	      args || (args = slice(arguments));
	      if (partialRightArgs) {
	        push.apply(args, partialRightArgs);
	      }
	      if (isCurry && args.length < arity) {
	        bitmask |= 16 & ~32;
	        return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
	      }
	    }
	    args || (args = arguments);
	    if (isBindKey) {
	      func = thisBinding[key];
	    }
	    if (this instanceof bound) {
	      thisBinding = baseCreate(func.prototype);
	      var result = func.apply(thisBinding, args);
	      return isObject(result) ? result : thisBinding;
	    }
	    return func.apply(thisBinding, args);
	  }
	  setBindData(bound, bindData);
	  return bound;
	}
	
	module.exports = baseCreateWrapper;


/***/ },
/* 253 */
/***/ function(module, exports) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	
	/**
	 * Checks if `value` is a function.
	 *
	 * @static
	 * @memberOf _
	 * @category Objects
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 */
	function isFunction(value) {
	  return typeof value == 'function';
	}
	
	module.exports = isFunction;


/***/ },
/* 254 */
/***/ function(module, exports) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	
	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utilities
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'name': 'fred' };
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var isNative = __webpack_require__(246);
	
	/** Used to detect functions containing a `this` reference */
	var reThis = /\bthis\b/;
	
	/**
	 * An object used to flag environments features.
	 *
	 * @static
	 * @memberOf _
	 * @type Object
	 */
	var support = {};
	
	/**
	 * Detect if functions can be decompiled by `Function#toString`
	 * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
	 *
	 * @memberOf _.support
	 * @type boolean
	 */
	support.funcDecomp = !isNative(global.WinRTError) && reThis.test(function() { return this; });
	
	/**
	 * Detect if `Function#name` is supported (all but IE).
	 *
	 * @memberOf _.support
	 * @type boolean
	 */
	support.funcNames = typeof Function.name == 'string';
	
	module.exports = support;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var isNative = __webpack_require__(246),
	    isObject = __webpack_require__(247),
	    shimKeys = __webpack_require__(257);
	
	/* Native method shortcuts for methods with the same name as other `lodash` methods */
	var nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys;
	
	/**
	 * Creates an array composed of the own enumerable property names of an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Objects
	 * @param {Object} object The object to inspect.
	 * @returns {Array} Returns an array of property names.
	 * @example
	 *
	 * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
	 * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  if (!isObject(object)) {
	    return [];
	  }
	  return nativeKeys(object);
	};
	
	module.exports = keys;


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
	 * Build: `lodash modularize modern exports="npm" -o ./npm/`
	 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <http://lodash.com/license>
	 */
	var objectTypes = __webpack_require__(248);
	
	/** Used for native method references */
	var objectProto = Object.prototype;
	
	/** Native method shortcuts */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which produces an array of the
	 * given object's own enumerable property names.
	 *
	 * @private
	 * @type Function
	 * @param {Object} object The object to inspect.
	 * @returns {Array} Returns an array of property names.
	 */
	var shimKeys = function(object) {
	  var index, iterable = object, result = [];
	  if (!iterable) return result;
	  if (!(objectTypes[typeof object])) return result;
	    for (index in iterable) {
	      if (hasOwnProperty.call(iterable, index)) {
	        result.push(index);
	      }
	    }
	  return result
	};
	
	module.exports = shimKeys;


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var assign = __webpack_require__(240),
	    joinClasses = __webpack_require__(239);
	
	var ExpandableNavItem = __webpack_require__(259);
	
	var ExpandableNavHeader = React.createClass({displayName: "ExpandableNavHeader",
	  propTypes: {
	    small: React.PropTypes.element,
	    full: React.PropTypes.element,
	    headerStyle: React.PropTypes.object,
	    smallStyle: React.PropTypes.object,
	    fullStyle: React.PropTypes.object,
	    smallClass: React.PropTypes.string,
	    fullClass: React.PropTypes.string
	  },
	  getDefaultProps:function() {
	    return {
	      headerStyle: {
	        width: 100 + '%',
	        margin: 0
	      },
	    };
	  },
	  render:function() {
	    var headerStyle = assign(this.props.headerStyle, {
	      display: 'block',
	      float: 'none'
	    });
	    var sharedStyle = {
	      display: 'block',
	      fontWeight: 'bold',
	      fontSize: 20,
	    };
	    var smallStyle = assign(this.props.smallStyle, sharedStyle),
	        fullStyle = assign(this.props.fullStyle, sharedStyle);
	
	    var classes = "navbar-header " +
	      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);
	
	    var navItemStyle = {
	      cursor: 'pointer'
	    };
	    return (
	      React.createElement("div", {style: headerStyle, className: classes}, 
	        React.createElement("div", {style: headerStyle, className: "navbar-brand"}, 
	          React.createElement(ExpandableNavItem, {style: navItemStyle, ref: "navItem", 
	            smallStyle: smallStyle, fullStyle: fullStyle, 
	            smallClass: this.props.smallClass, fullClass: this.props.fullClass, 
	            small: this.props.small, full: this.props.full, expanded: this.props.expanded})
	        )
	      )
	    );
	  },
	  getNavItem:function() {
	    return this.refs.navItem;
	  }
	});
	
	module.exports = ExpandableNavHeader;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(219);
	
	var assign = __webpack_require__(240);
	
	var ExpandableNavItem = React.createClass({displayName: "ExpandableNavItem",
	  propTypes: {
	    small: React.PropTypes.element,
	    full: React.PropTypes.element,
	    smallStyle: React.PropTypes.object,
	    fullStyle: React.PropTypes.object
	  },
	  getDefaultProps:function() {
	    return {
	      smallStyle: {},
	      fullStyle: {}
	    };
	  },
	  render:function() {
	    var style = assign(this.props.expanded ? this.props.fullStyle : this.props.smallStyle, this.props.style);
	
	    return (
	      React.createElement("span", {style: style}, this.props.expanded ? this.props.full : this.props.small)
	    );
	  }
	});
	
	module.exports = ExpandableNavItem;


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(219);
	
	var joinClasses = __webpack_require__(239),
	    assign = __webpack_require__(240);
	
	var ExpandableNavMenu = React.createClass({displayName: "ExpandableNavMenu",
	  propTypes: {
	    fullClass: React.PropTypes.string,
	    smallClass: React.PropTypes.string,
	    fullStyle: React.PropTypes.object,
	    smallStyle: React.PropTypes.object
	  },
	  getInitialState:function() {
	    if (!this.props.children) {
	      return {
	        active: 0
	      };
	    }
	
	    for (var i = 0; i < this.props.children.length; i++) {
	      var child = this.props.children[i];
	      if (child.props.active) {
	        return {
	          active: i
	        };
	      }
	    }
	
	    return {
	      active: 0
	    };
	
	  },
	  render:function() {
	    var ulStyle = assign({
	      float: 'none',
	      margin: 0
	    }, this.props.style);
	
	    ulStyle = assign(ulStyle, this.props.expanded ? this.props.fullStyle : this.props.smallStyle);
	
	    var classes = "nav navbar-nav " +
	      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);
	
	    return (
	      React.createElement("ul", {className: classes, style: ulStyle}, 
	        React.Children.map(this.props.children, this.renderMenuItems)
	      )
	    );
	  },
	  handleSelect:function(i) {
	    this.setState({active: i});
	  },
	  renderMenuItems:function(child, i) {
	    return React.addons.cloneWithProps(child, {
	      expanded: this.props.expanded,
	      active: this.state.active === i,
	      key: child.key ? child.key : i,
	      ref: child.ref,
	      onSelect: this.handleSelect.bind(null, i)
	    });
	  }
	});
	
	module.exports = ExpandableNavMenu;


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	
	var assign = __webpack_require__(240),
	    joinClasses = __webpack_require__(239);
	
	var ExpandableNavItem = __webpack_require__(259);
	
	var ExpandableNavMenuItem = React.createClass({displayName: "ExpandableNavMenuItem",
	  propTypes: {
	    small: React.PropTypes.element,
	    full: React.PropTypes.element,
	    smallClass: React.PropTypes.string,
	    fullClass: React.PropTypes.string,
	    smallStyle: React.PropTypes.object,
	    fullStyle: React.PropTypes.object,
	    url: React.PropTypes.string,
	    tooltip: React.PropTypes.string,
	    active: React.PropTypes.bool,
	    onClick: React.PropTypes.func
	  },
	  componentDidUpdate:function() {
	    if (!this.props.tooltip) {
	      return;
	    }
	    var $ = this.props.jquery;
	    if (this.props.expanded) {
	      $(this.refs.link.getDOMNode()).tooltip('disable');
	    } else {
	      $(this.refs.link.getDOMNode()).tooltip('enable');
	    }
	  },
	  getDefaultProps:function() {
	    var sharedStyle = {
	      paddingTop: 13,
	      paddingRight: 15,
	      paddingBottom: 13,
	      paddingLeft: 12
	    };
	    return {
	      smallStyle: sharedStyle,
	      fullStyle: sharedStyle
	    };
	  },
	  handleClick:function(e) {
	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }
	    this.props.onSelect();
	  },
	  render:function() {
	    var $__0=      this.props,active=$__0.active,url=$__0.url,small=$__0.small,full=$__0.full,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{active:1,url:1,small:1,full:1});
	
	    var liStyle = {
	      float: 'none'
	    };
	    var aStyle = {
	      padding: 0
	    };
	    var smallStyle = assign(this.props.smallStyle, {
	      display: 'block',
	      fontSize: 20,
	    });
	    var fullStyle = assign(this.props.fullStyle, {
	      display: 'block',
	      fontSize: 20,
	    });
	    var classes = active ? 'active' : '' +
	      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);
	
	    var link;
	    var navItemStyle = {
	      cursor: 'pointer'
	    };
	    if (this.props.tooltip) {
	      if (!this.props.jquery) {
	        throw new Error('jQuery dependency must be passed to ExpandableNavMenuItem to enable tooltip function');
	      }
	      link = (
	        React.createElement("a", {ref: "link", href: url, onClick: this.handleClick, style: aStyle, "data-toggle": "menuitem-tooltip", "data-placement": "right", title: this.props.tooltip},
	          React.createElement(ExpandableNavItem, React.__spread({style: navItemStyle, small: small, full: full, smallStyle: smallStyle, fullStyle: fullStyle},  props))
	        )
	      );
	    } else {
	      link = (
	        React.createElement("a", {ref: "link", href: url, onClick: this.handleClick, style: aStyle},
	          React.createElement(ExpandableNavItem, React.__spread({style: navItemStyle, small: small, full: full, smallStyle: smallStyle, fullStyle: fullStyle},  props))
	        )
	      );
	    }
	
	    return (
	      React.createElement("li", {className: classes, style: liStyle}, 
	        link
	      )
	    );
	  }
	});
	
	module.exports = ExpandableNavMenuItem;


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1),
	    assign = __webpack_require__(240);
	
	var ExpandableNavPage = React.createClass({displayName: "ExpandableNavPage",
	  propTypes: {
	    fullStyle: React.PropTypes.object,
	    smallStyle: React.PropTypes.object,
	    fullClass: React.PropTypes.string,
	    smallClass: React.PropTypes.string
	  },
	  getDefaultProps:function() {
	    return {
	      fullStyle: {
	        paddingTop: 10,
	        paddingBottom: 10,
	        paddingLeft: 240,
	        paddingRight: 60
	      },
	      smallStyle: {
	        paddingTop: 10,
	        paddingBottom: 10,
	        paddingLeft: 60,
	        paddingRight: 60
	      }
	    };
	  },
	  render:function() {
	    var style = assign(this.props.expanded ? this.props.fullStyle : this.props.smallStyle,
	                      this.props.style);
	    var classes = this.props.expanded ? this.props.fullClass : this.props.smallClass;
	    return (
	      React.createElement("div", {style: style, className: classes}, 
	        this.props.children
	      )
	    );
	  }
	});
	
	module.exports = ExpandableNavPage;


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(219);
	
	var assign = __webpack_require__(240),
	    joinClasses = __webpack_require__(239);
	
	var ExpandableNavToggleButton = React.createClass({displayName: "ExpandableNavToggleButton",
	  propTypes: {
	    small: React.PropTypes.element,
	    full: React.PropTypes.element,
	    smallStyle: React.PropTypes.object,
	    fullStyle: React.PropTypes.object,
	    smallClass: React.PropTypes.string,
	    fullClass: React.PropTypes.string
	  },
	  getDefaultProps:function() {
	    return {
	      small: React.createElement("span", {className: "glyphicon glyphicon-chevron-right"}),
	      full: React.createElement("span", {className: "glyphicon glyphicon-chevron-left"}),
	      smallStyle: {top: 5, left: 55},
	      fullStyle: {top: 5, left: 245}
	    };
	  },
	  render:function() {
	    return (
	      React.createElement("div", null, 
	        this.renderToggleButton()
	      )
	    );
	  },
	  renderToggleButton:function() {
	    var toggleButton, style, classes;
	
	    var sharedStyle = {
	      position: 'fixed',
	    };
	
	    style = assign(sharedStyle, this.props.style || {});
	
	    if (this.props.expanded) {
	      toggleButton = this.props.full;
	      style = assign(style, this.props.fullStyle);
	      classes = this.props.fullClass;
	    } else {
	      toggleButton = this.props.small;
	      style = assign(style, this.props.smallStyle);
	      classes = this.props.smallClass;
	    }
	
	    return React.addons.cloneWithProps(toggleButton, {
	      ref: toggleButton.ref,
	      className: joinClasses(this.props.className, classes),
	      style: style,
	      onClick: this.props.handleToggle
	    });
	  }
	});
	
	module.exports = ExpandableNavToggleButton;


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	
	var BrowseContent = React.createClass({
		displayName: "BrowseContent",
	
		loadCanvas: function (event) {
			console.log(event.which);
			// <script src="components/browse/canvas.js"></script>
		},
		render: function () {
			return React.createElement(
				"a",
				{ href: "#/canvas" },
				React.createElement(
					"div",
					{ className: "browse-canvas", onClick: this.loadCanvas },
					"Canvas"
				)
			);
		}
	});
	
	module.exports = BrowseContent;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	var History = ReactRouter.History;
	
	//header and footer is written in styles/sass/partials/base/_base.scss
	var Tag = React.createClass({
	  displayName: "Tag",
	
	  render: function () {
	
	    return React.createElement(
	      "div",
	      { className: "tag" },
	      React.createElement(
	        "h3",
	        { className: "tagTitle" },
	        "TheNinjaYoshiXWarrior567"
	      ),
	      React.createElement("textarea", { className: "tagPost", placeholder: "Write a comment...", rows: "6", cols: "30" })
	    );
	  }
	});
	
	module.exports = Tag;

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	var Draggable = __webpack_require__(267);
	
	var Tag = React.createClass({
		displayName: "Tag",
	
		getInitialState: function () {
			return { contextMenuLocation: '' };
		},
		componentDidMount: function () {
			this.contextMenu = this.refs.contextMenu;
		},
		render: function () {
			var location = this.state.contextMenuLocation;
			var contentMenuStyle = {
				display: location ? 'block' : 'none',
				position: 'absolute',
				left: location ? location.x : 0,
				top: location ? location.y : 0
			};
			return React.createElement(
				"div",
				null,
				React.createElement(
					Draggable,
					{
						handle: ".tag",
						start: { x: location ? location.x : 1025, y: location ? location.y : 1025 },
						grid: [25, 25],
						draggable: "parent",
						zIndex: 100,
						onStart: this.handleStart,
						onDrag: this.handleDrag,
						onStop: this.handleStop },
					React.createElement(
						"div",
						{ className: "tag" },
						React.createElement(
							"div",
							{ className: "tag-avatar" },
							React.createElement("img", { src: "https://avatars2.githubusercontent.com/u/506980?v=3&s=460" }),
							React.createElement(
								"span",
								{ className: "tagTitle" },
								React.createElement(
									"h3",
									null,
									"Politics"
								)
							)
						),
						React.createElement("textarea", { placeholder: "ZAPMAN1337:  Make murica great again!" })
					)
				),
				React.createElement(
					Draggable,
					{
						handle: ".tag",
						start: { x: 1425, y: 1025 },
						grid: [25, 25],
						draggable: "parent",
						zIndex: 100,
						onStart: this.handleStart,
						onDrag: this.handleDrag,
						onStop: this.handleStop },
					React.createElement(
						"div",
						{ className: "tag" },
						React.createElement(
							"div",
							{ className: "tag-avatar" },
							React.createElement("img", { src: "https://cs.byu.edu/sites/default/files/styles/faculty_listing/public/pictures/picture-17184-1387472506.jpg?itok=n21ljU0a" }),
							React.createElement(
								"span",
								{ className: "tagTitle" },
								React.createElement(
									"h3",
									null,
									"Cooking AI"
								)
							)
						),
						React.createElement("textarea", null)
					)
				),
				React.createElement(
					Draggable,
					{
						handle: ".tag",
						start: { x: 1825, y: 1025 },
						grid: [25, 25],
						draggable: "parent",
						zIndex: 100,
						onStart: this.handleStart,
						onDrag: this.handleDrag,
						onStop: this.handleStop },
					React.createElement(
						"div",
						{ className: "tag" },
						React.createElement(
							"div",
							{ className: "tag-avatar" },
							React.createElement("img", { src: "https://cs.byu.edu/sites/default/files/styles/faculty_listing/public/faculty/Egbert.jpg?itok=hh_CQbxn" }),
							React.createElement(
								"span",
								{ className: "tagTitle" },
								React.createElement(
									"h3",
									null,
									"3D Transformations"
								)
							)
						),
						React.createElement("textarea", null)
					)
				)
			);
		}
	});
	var Canvas = React.createClass({
		displayName: "Canvas",
	
		getInitialState: function () {
			return {};
		},
		_onContextMenu: function (e) {
			this.contextMenu.setState({
				contextMenuLocation: { 'x': e.pageX, 'y': e.pageY }
			});
			return false;
		},
		_onPageClick: function () {},
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
		render: function () {
			return React.createElement(
				"div",
				{ id: "container", onClick: this._onPageClick, onContextMenu: this._onContextMenu },
				React.createElement(
					Draggable,
					{
						handle: ".canvas-container",
						start: { x: -1000, y: -1000 },
						grid: [25, 25],
						zIndex: 0,
						bounds: { left: -2500, top: -2500, right: 0, bottom: 0 },
						onStart: this.handleStart,
						onDrag: this.handleDrag,
						onStop: this.handleStop },
					React.createElement(
						"div",
						{ className: "canvas-container" },
						React.createElement(Tag, { ref: "contextMenu" })
					)
				)
			);
		}
	});
	
	module.exports = Canvas;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(158));
		else if(typeof define === 'function' && define.amd)
			define(["react", "react-dom"], factory);
		else if(typeof exports === 'object')
			exports["ReactDraggable"] = factory(require("react"), require("react-dom"));
		else
			root["ReactDraggable"] = factory(root["React"], root["ReactDOM"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		module.exports = __webpack_require__(1);
		module.exports.DraggableCore = __webpack_require__(10);
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		var _react = __webpack_require__(2);
		
		var _react2 = _interopRequireDefault(_react);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		var _classnames = __webpack_require__(4);
		
		var _classnames2 = _interopRequireDefault(_classnames);
		
		var _objectAssign = __webpack_require__(5);
		
		var _objectAssign2 = _interopRequireDefault(_objectAssign);
		
		var _utilsDomFns = __webpack_require__(6);
		
		var _utilsPositionFns = __webpack_require__(9);
		
		var _utilsShims = __webpack_require__(7);
		
		var _DraggableCore2 = __webpack_require__(10);
		
		var _DraggableCore3 = _interopRequireDefault(_DraggableCore2);
		
		var _utilsLog = __webpack_require__(11);
		
		var _utilsLog2 = _interopRequireDefault(_utilsLog);
		
		//
		// Define <Draggable>
		//
		
		var Draggable = (function (_DraggableCore) {
		  _inherits(Draggable, _DraggableCore);
		
		  function Draggable() {
		    var _this = this;
		
		    _classCallCheck(this, Draggable);
		
		    _get(Object.getPrototypeOf(Draggable.prototype), 'constructor', this).apply(this, arguments);
		
		    this.state = {
		      // Whether or not we are currently dragging.
		      dragging: false,
		
		      // Current transform x and y.
		      clientX: this.props.start.x, clientY: this.props.start.y,
		
		      // Can only determine if SVG after mounting
		      isElementSVG: false
		    };
		
		    this.onDragStart = function (e, coreEvent) {
		      (0, _utilsLog2['default'])('Draggable: onDragStart: %j', coreEvent.position);
		
		      // Short-circuit if user's callback killed it.
		      var shouldStart = _this.props.onStart(e, (0, _utilsDomFns.createUIEvent)(_this, coreEvent));
		      // Kills start event on core as well, so move handlers are never bound.
		      if (shouldStart === false) return false;
		
		      _this.setState({ dragging: true });
		    };
		
		    this.onDrag = function (e, coreEvent) {
		      if (!_this.state.dragging) return false;
		      (0, _utilsLog2['default'])('Draggable: onDrag: %j', coreEvent.position);
		
		      var uiEvent = (0, _utilsDomFns.createUIEvent)(_this, coreEvent);
		
		      // Short-circuit if user's callback killed it.
		      var shouldUpdate = _this.props.onDrag(e, uiEvent);
		      if (shouldUpdate === false) return false;
		
		      var newState = {
		        clientX: uiEvent.position.left,
		        clientY: uiEvent.position.top
		      };
		
		      // Keep within bounds.
		      if (_this.props.bounds) {
		        var _getBoundPosition = (0, _utilsPositionFns.getBoundPosition)(_this, newState.clientX, newState.clientY);
		
		        var _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2);
		
		        newState.clientX = _getBoundPosition2[0];
		        newState.clientY = _getBoundPosition2[1];
		      }
		
		      _this.setState(newState);
		    };
		
		    this.onDragStop = function (e, coreEvent) {
		      if (!_this.state.dragging) return false;
		
		      // Short-circuit if user's callback killed it.
		      var shouldStop = _this.props.onStop(e, (0, _utilsDomFns.createUIEvent)(_this, coreEvent));
		      if (shouldStop === false) return false;
		
		      (0, _utilsLog2['default'])('Draggable: onDragStop: %j', coreEvent.position);
		
		      _this.setState({
		        dragging: false
		      });
		    };
		  }
		
		  _createClass(Draggable, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      // Check to see if the element passed is an instanceof SVGElement
		      if (_reactDom2['default'].findDOMNode(this) instanceof SVGElement) {
		        this.setState({ isElementSVG: true });
		      }
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var style = undefined,
		          svgTransform = null;
		      // Add a CSS transform to move the element around. This allows us to move the element around
		      // without worrying about whether or not it is relatively or absolutely positioned.
		      // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
		      // has a clean slate.
		      style = (0, _utilsDomFns.createTransform)({
		        // Set left if horizontal drag is enabled
		        x: (0, _utilsPositionFns.canDragX)(this) ? this.state.clientX : this.props.start.x,
		
		        // Set top if vertical drag is enabled
		        y: (0, _utilsPositionFns.canDragY)(this) ? this.state.clientY : this.props.start.y
		      }, this.state.isElementSVG);
		
		      // If this element was SVG, we use the `transform` attribute.
		      if (this.state.isElementSVG) {
		        svgTransform = style;
		        style = {};
		      }
		
		      // zIndex option
		      if (this.state.dragging && !isNaN(this.props.zIndex)) {
		        style.zIndex = this.props.zIndex;
		      }
		
		      // Mark with class while dragging
		      var className = (0, _classnames2['default'])(this.props.children.props.className || '', 'react-draggable', {
		        'react-draggable-dragging': this.state.dragging,
		        'react-draggable-dragged': this.state.dragged
		      });
		
		      // Reuse the child provided
		      // This makes it flexible to use whatever element is wanted (div, ul, etc)
		      return _react2['default'].createElement(
		        _DraggableCore3['default'],
		        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
		        _react2['default'].cloneElement(_react2['default'].Children.only(this.props.children), {
		          className: className,
		          style: (0, _objectAssign2['default'])({}, this.props.children.props.style, style),
		          transform: svgTransform
		        })
		      );
		    }
		  }], [{
		    key: 'displayName',
		    value: 'Draggable',
		    enumerable: true
		  }, {
		    key: 'propTypes',
		    value: (0, _objectAssign2['default'])({}, _DraggableCore3['default'].propTypes, {
		      /**
		       * `axis` determines which axis the draggable can move.
		       *
		       * 'both' allows movement horizontally and vertically.
		       * 'x' limits movement to horizontal axis.
		       * 'y' limits movement to vertical axis.
		       *
		       * Defaults to 'both'.
		       */
		      axis: _react.PropTypes.oneOf(['both', 'x', 'y']),
		
		      /**
		       * `bounds` determines the range of movement available to the element.
		       * Available values are:
		       *
		       * 'parent' restricts movement within the Draggable's parent node.
		       *
		       * Alternatively, pass an object with the following properties, all of which are optional:
		       *
		       * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
		       *
		       * All values are in px.
		       *
		       * Example:
		       *
		       * ```jsx
		       *   let App = React.createClass({
		       *       render: function () {
		       *         return (
		       *            <Draggable bounds={{right: 300, bottom: 300}}>
		       *              <div>Content</div>
		       *           </Draggable>
		       *         );
		       *       }
		       *   });
		       * ```
		       */
		      bounds: _react.PropTypes.oneOfType([_react.PropTypes.shape({
		        left: _react.PropTypes.Number,
		        right: _react.PropTypes.Number,
		        top: _react.PropTypes.Number,
		        bottom: _react.PropTypes.Number
		      }), _react.PropTypes.oneOf(['parent', false])]),
		
		      /**
		       * `start` specifies the x and y that the dragged item should start at
		       *
		       * Example:
		       *
		       * ```jsx
		       *      let App = React.createClass({
		       *          render: function () {
		       *              return (
		       *                  <Draggable start={{x: 25, y: 25}}>
		       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
		       *                  </Draggable>
		       *              );
		       *          }
		       *      });
		       * ```
		       */
		      start: _react.PropTypes.shape({
		        x: _react.PropTypes.number,
		        y: _react.PropTypes.number
		      }),
		
		      /**
		       * `zIndex` specifies the zIndex to use while dragging.
		       *
		       * Example:
		       *
		       * ```jsx
		       *   let App = React.createClass({
		       *       render: function () {
		       *           return (
		       *               <Draggable zIndex={100}>
		       *                   <div>I have a zIndex</div>
		       *               </Draggable>
		       *           );
		       *       }
		       *   });
		       * ```
		       */
		      zIndex: _react.PropTypes.number,
		
		      /**
		       * These properties should be defined on the child, not here.
		       */
		      className: _utilsShims.dontSetMe,
		      style: _utilsShims.dontSetMe,
		      transform: _utilsShims.dontSetMe
		    }),
		    enumerable: true
		  }, {
		    key: 'defaultProps',
		    value: (0, _objectAssign2['default'])({}, _DraggableCore3['default'].defaultProps, {
		      axis: 'both',
		      bounds: false,
		      start: { x: 0, y: 0 },
		      zIndex: NaN
		    }),
		    enumerable: true
		  }]);
		
		  return Draggable;
		})(_DraggableCore3['default']);
		
		exports['default'] = Draggable;
		module.exports = exports['default'];
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2015 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/
		/* global define */
		
		(function () {
			'use strict';
		
			var hasOwn = {}.hasOwnProperty;
		
			function classNames () {
				var classes = '';
		
				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;
		
					var argType = typeof arg;
		
					if (argType === 'string' || argType === 'number') {
						classes += ' ' + arg;
					} else if (Array.isArray(arg)) {
						classes += ' ' + classNames.apply(null, arg);
					} else if (argType === 'object') {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes += ' ' + key;
							}
						}
					}
				}
		
				return classes.substr(1);
			}
		
			if (typeof module !== 'undefined' && module.exports) {
				module.exports = classNames;
			} else if (true) {
				// register as 'classnames', consistent with npm package name
				!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
					return classNames;
				}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
				window.classNames = classNames;
			}
		}());
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		/* eslint-disable no-unused-vars */
		'use strict';
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.prototype.propertyIsEnumerable;
		
		function toObject(val) {
			if (val === null || val === undefined) {
				throw new TypeError('Object.assign cannot be called with null or undefined');
			}
		
			return Object(val);
		}
		
		module.exports = Object.assign || function (target, source) {
			var from;
			var to = toObject(target);
			var symbols;
		
			for (var s = 1; s < arguments.length; s++) {
				from = Object(arguments[s]);
		
				for (var key in from) {
					if (hasOwnProperty.call(from, key)) {
						to[key] = from[key];
					}
				}
		
				if (Object.getOwnPropertySymbols) {
					symbols = Object.getOwnPropertySymbols(from);
					for (var i = 0; i < symbols.length; i++) {
						if (propIsEnumerable.call(from, symbols[i])) {
							to[symbols[i]] = from[symbols[i]];
						}
					}
				}
			}
		
			return to;
		};
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		exports.matchesSelector = matchesSelector;
		exports.addEvent = addEvent;
		exports.removeEvent = removeEvent;
		exports.outerHeight = outerHeight;
		exports.outerWidth = outerWidth;
		exports.innerHeight = innerHeight;
		exports.innerWidth = innerWidth;
		exports.createTransform = createTransform;
		exports.createCSSTransform = createCSSTransform;
		exports.createSVGTransform = createSVGTransform;
		exports.addUserSelectStyles = addUserSelectStyles;
		exports.removeUserSelectStyles = removeUserSelectStyles;
		exports.styleHacks = styleHacks;
		exports.createCoreEvent = createCoreEvent;
		exports.createUIEvent = createUIEvent;
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		var _shims = __webpack_require__(7);
		
		var _getPrefix = __webpack_require__(8);
		
		var _getPrefix2 = _interopRequireDefault(_getPrefix);
		
		var _objectAssign = __webpack_require__(5);
		
		var _objectAssign2 = _interopRequireDefault(_objectAssign);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		var matchesSelectorFunc = '';
		
		function matchesSelector(el, selector) {
		  if (!(el instanceof Node)) throw new TypeError('Value of argument \'el\' violates contract, expected Node got ' + (el === null ? 'null' : el instanceof Object && el.constructor ? el.constructor.name : typeof el));
		  if (typeof selector !== 'string') throw new TypeError('Value of argument \'selector\' violates contract, expected string got ' + (selector === null ? 'null' : selector instanceof Object && selector.constructor ? selector.constructor.name : typeof selector));
		
		  if (!matchesSelectorFunc) {
		    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
		      return (0, _shims.isFunction)(el[method]);
		    });
		  }
		
		  return el[matchesSelectorFunc].call(el, selector);
		}
		
		function addEvent(el, event, handler) {
		  if (el != null && !(el instanceof Node)) throw new TypeError('Value of argument \'el\' violates contract, expected null or Node got ' + (el === null ? 'null' : el instanceof Object && el.constructor ? el.constructor.name : typeof el));
		  if (typeof event !== 'string') throw new TypeError('Value of argument \'event\' violates contract, expected string got ' + (event === null ? 'null' : event instanceof Object && event.constructor ? event.constructor.name : typeof event));
		  if (typeof handler !== 'function') throw new TypeError('Value of argument \'handler\' violates contract, expected function got ' + (handler === null ? 'null' : handler instanceof Object && handler.constructor ? handler.constructor.name : typeof handler));
		
		  if (!el) {
		    return;
		  }
		  if (el.attachEvent) {
		    el.attachEvent('on' + event, handler);
		  } else if (el.addEventListener) {
		    el.addEventListener(event, handler, true);
		  } else {
		    el['on' + event] = handler;
		  }
		}
		
		function removeEvent(el, event, handler) {
		  if (el != null && !(el instanceof Node)) throw new TypeError('Value of argument \'el\' violates contract, expected null or Node got ' + (el === null ? 'null' : el instanceof Object && el.constructor ? el.constructor.name : typeof el));
		  if (typeof event !== 'string') throw new TypeError('Value of argument \'event\' violates contract, expected string got ' + (event === null ? 'null' : event instanceof Object && event.constructor ? event.constructor.name : typeof event));
		  if (typeof handler !== 'function') throw new TypeError('Value of argument \'handler\' violates contract, expected function got ' + (handler === null ? 'null' : handler instanceof Object && handler.constructor ? handler.constructor.name : typeof handler));
		
		  if (!el) {
		    return;
		  }
		  if (el.detachEvent) {
		    el.detachEvent('on' + event, handler);
		  } else if (el.removeEventListener) {
		    el.removeEventListener(event, handler, true);
		  } else {
		    el['on' + event] = null;
		  }
		}
		
		function outerHeight(node) {
		  if (!(node instanceof Node)) throw new TypeError('Value of argument \'node\' violates contract, expected Node got ' + (node === null ? 'null' : node instanceof Object && node.constructor ? node.constructor.name : typeof node));
		
		  // This is deliberately excluding margin for our calculations, since we are using
		  // offsetTop which is including margin. See getBoundPosition
		  var height = node.clientHeight;
		  var computedStyle = window.getComputedStyle(node);
		  height += (0, _shims.int)(computedStyle.borderTopWidth);
		  height += (0, _shims.int)(computedStyle.borderBottomWidth);
		  return height;
		}
		
		function outerWidth(node) {
		  if (!(node instanceof Node)) throw new TypeError('Value of argument \'node\' violates contract, expected Node got ' + (node === null ? 'null' : node instanceof Object && node.constructor ? node.constructor.name : typeof node));
		
		  // This is deliberately excluding margin for our calculations, since we are using
		  // offsetLeft which is including margin. See getBoundPosition
		  var width = node.clientWidth;
		  var computedStyle = window.getComputedStyle(node);
		  width += (0, _shims.int)(computedStyle.borderLeftWidth);
		  width += (0, _shims.int)(computedStyle.borderRightWidth);
		  return width;
		}
		
		function innerHeight(node) {
		  if (!(node instanceof Node)) throw new TypeError('Value of argument \'node\' violates contract, expected Node got ' + (node === null ? 'null' : node instanceof Object && node.constructor ? node.constructor.name : typeof node));
		
		  var height = node.clientHeight;
		  var computedStyle = window.getComputedStyle(node);
		  height -= (0, _shims.int)(computedStyle.paddingTop);
		  height -= (0, _shims.int)(computedStyle.paddingBottom);
		  return height;
		}
		
		function innerWidth(node) {
		  if (!(node instanceof Node)) throw new TypeError('Value of argument \'node\' violates contract, expected Node got ' + (node === null ? 'null' : node instanceof Object && node.constructor ? node.constructor.name : typeof node));
		
		  var width = node.clientWidth;
		  var computedStyle = window.getComputedStyle(node);
		  width -= (0, _shims.int)(computedStyle.paddingLeft);
		  width -= (0, _shims.int)(computedStyle.paddingRight);
		  return width;
		}
		
		function createTransform(position, isSVG) {
		  if (typeof position !== 'object') throw new TypeError('Value of argument \'position\' violates contract, expected object got ' + (position === null ? 'null' : position instanceof Object && position.constructor ? position.constructor.name : typeof position));
		  if (isSVG != null && typeof isSVG !== 'boolean') throw new TypeError('Value of argument \'isSVG\' violates contract, expected null or boolean got ' + (isSVG === null ? 'null' : isSVG instanceof Object && isSVG.constructor ? isSVG.constructor.name : typeof isSVG));
		
		  if (isSVG) return createSVGTransform(position);
		  return createCSSTransform(position);
		}
		
		function createCSSTransform(_ref) {
		  var x = _ref.x;
		  var y = _ref.y;
		  return (function () {
		    if ({ x: x, y: y } === null || typeof { x: x, y: y } !== 'object' || typeof { x: x, y: y }.x !== 'number' || typeof { x: x, y: y }.y !== 'number') throw new TypeError('Value of argument \'undefined\' violates contract, expected Object with properties x and y got ' + ({ x: x, y: y } === null ? 'null' : { x: x, y: y } instanceof Object && { x: x, y: y }.constructor ? { x: x, y: y }.constructor.name : typeof { x: x, y: y }));
		
		    // Replace unitless items with px
		    var out = { transform: 'translate(' + x + 'px,' + y + 'px)' };
		    // Add single prefixed property as well
		    if (_getPrefix2['default']) {
		      out[_getPrefix2['default'] + 'Transform'] = out.transform;
		    }
		    return out;
		  })();
		}
		
		function createSVGTransform(_ref2) {
		  var x = _ref2.x;
		  var y = _ref2.y;
		  return (function () {
		    if ({ x: x, y: y } === null || typeof { x: x, y: y } !== 'object' || typeof { x: x, y: y }.x !== 'number' || typeof { x: x, y: y }.y !== 'number') throw new TypeError('Value of argument \'undefined\' violates contract, expected Object with properties x and y got ' + ({ x: x, y: y } === null ? 'null' : { x: x, y: y } instanceof Object && { x: x, y: y }.constructor ? { x: x, y: y }.constructor.name : typeof { x: x, y: y }));
		
		    return 'translate(' + x + ',' + y + ')';
		  })();
		}
		
		// User-select Hacks:
		//
		// Useful for preventing blue highlights all over everything when dragging.
		var userSelectStyle = ';user-select: none;';
		if (_getPrefix2['default']) {
		  userSelectStyle += '-' + _getPrefix2['default'].toLowerCase() + '-user-select: none;';
		}
		
		function addUserSelectStyles() {
		  var style = document.body.getAttribute('style') || '';
		  document.body.setAttribute('style', style + userSelectStyle);
		}
		
		function removeUserSelectStyles() {
		  var style = document.body.getAttribute('style') || '';
		  document.body.setAttribute('style', style.replace(userSelectStyle, ''));
		}
		
		function styleHacks() {
		  var childStyle = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		
		  // Workaround IE pointer events; see #51
		  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
		  var touchHacks = {
		    touchAction: 'none'
		  };
		
		  return (0, _objectAssign2['default'])(touchHacks, childStyle);
		}
		
		// Create an event exposed by <DraggableCore>
		
		function createCoreEvent(draggable, clientX, clientY) {
		  // State changes are often (but not always!) async. We want the latest value.
		  var state = draggable._pendingState || draggable.state;
		  var isStart = !(0, _shims.isNum)(state.lastX);
		
		  return {
		    node: _reactDom2['default'].findDOMNode(draggable),
		    position: isStart ?
		    // If this is our first move, use the clientX and clientY as last coords.
		    {
		      deltaX: 0, deltaY: 0,
		      lastX: clientX, lastY: clientY,
		      clientX: clientX, clientY: clientY
		    } :
		    // Otherwise calculate proper values.
		    {
		      deltaX: clientX - state.lastX, deltaY: clientY - state.lastY,
		      lastX: state.lastX, lastY: state.lastY,
		      clientX: clientX, clientY: clientY
		    }
		  };
		}
		
		// Create an event exposed by <Draggable>
		
		function createUIEvent(draggable, coreEvent) {
		  return {
		    node: _reactDom2['default'].findDOMNode(draggable),
		    position: {
		      left: draggable.state.clientX + coreEvent.position.deltaX,
		      top: draggable.state.clientY + coreEvent.position.deltaY
		    },
		    deltaX: coreEvent.position.deltaX,
		    deltaY: coreEvent.position.deltaY
		  };
		}
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		exports.findInArray = findInArray;
		exports.isFunction = isFunction;
		exports.isNum = isNum;
		exports.int = int;
		exports.dontSetMe = dontSetMe;
		
		function findInArray(array, callback) {
		  for (var i = 0, _length = array.length; i < _length; i++) {
		    if (callback.apply(callback, [array[i], i, array])) return array[i];
		  }
		}
		
		function isFunction(func) {
		  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
		}
		
		function isNum(num) {
		  return typeof num === 'number' && !isNaN(num);
		}
		
		function int(a) {
		  return parseInt(a, 10);
		}
		
		function dontSetMe(props, propName, componentName) {
		  if (props[propName]) {
		    throw new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
		  }
		}
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = (function () {
		  // Checking specifically for 'window.document' is for pseudo-browser server-side
		  // environments that define 'window' as the global context.
		  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
		  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
		
		  // Thanks David Walsh
		  var styles = window.getComputedStyle(document.documentElement, ''),
		      pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];
		  // 'ms' is not titlecased
		  if (pre === undefined || pre === null) return '';
		  if (pre === 'ms') return pre;
		  if (pre === undefined || pre === null) return '';
		  return pre.slice(0, 1).toUpperCase() + pre.slice(1);
		})();
		
		module.exports = exports['default'];
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		exports.getBoundPosition = getBoundPosition;
		exports.snapToGrid = snapToGrid;
		exports.canDragX = canDragX;
		exports.canDragY = canDragY;
		exports.getControlPosition = getControlPosition;
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		var _shims = __webpack_require__(7);
		
		var _reactDom = __webpack_require__(3);
		
		var _reactDom2 = _interopRequireDefault(_reactDom);
		
		var _domFns = __webpack_require__(6);
		
		function getBoundPosition(draggable, clientX, clientY) {
		  // If no bounds, short-circuit and move on
		  if (!draggable.props.bounds) return [clientX, clientY];
		
		  var bounds = JSON.parse(JSON.stringify(draggable.props.bounds));
		  var node = _reactDom2['default'].findDOMNode(draggable);
		  var parent = node.parentNode;
		
		  if (bounds === 'parent') {
		    var nodeStyle = window.getComputedStyle(node);
		    var parentStyle = window.getComputedStyle(parent);
		    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
		    bounds = {
		      left: -node.offsetLeft + (0, _shims.int)(parentStyle.paddingLeft) + (0, _shims.int)(nodeStyle.borderLeftWidth) + (0, _shims.int)(nodeStyle.marginLeft),
		      top: -node.offsetTop + (0, _shims.int)(parentStyle.paddingTop) + (0, _shims.int)(nodeStyle.borderTopWidth) + (0, _shims.int)(nodeStyle.marginTop),
		      right: (0, _domFns.innerWidth)(parent) - (0, _domFns.outerWidth)(node) - node.offsetLeft,
		      bottom: (0, _domFns.innerHeight)(parent) - (0, _domFns.outerHeight)(node) - node.offsetTop
		    };
		  }
		
		  // Keep x and y below right and bottom limits...
		  if ((0, _shims.isNum)(bounds.right)) clientX = Math.min(clientX, bounds.right);
		  if ((0, _shims.isNum)(bounds.bottom)) clientY = Math.min(clientY, bounds.bottom);
		
		  // But above left and top limits.
		  if ((0, _shims.isNum)(bounds.left)) clientX = Math.max(clientX, bounds.left);
		  if ((0, _shims.isNum)(bounds.top)) clientY = Math.max(clientY, bounds.top);
		
		  return [clientX, clientY];
		}
		
		function snapToGrid(grid, pendingX, pendingY) {
		  var x = Math.round(pendingX / grid[0]) * grid[0];
		  var y = Math.round(pendingY / grid[1]) * grid[1];
		  return [x, y];
		}
		
		function canDragX(draggable) {
		  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
		}
		
		function canDragY(draggable) {
		  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
		}
		
		// Get {clientX, clientY} positions from event.
		
		function getControlPosition(e) {
		  var position = e.targetTouches && e.targetTouches[0] || e;
		  return {
		    clientX: position.clientX,
		    clientY: position.clientY
		  };
		}
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		var _react = __webpack_require__(2);
		
		var _react2 = _interopRequireDefault(_react);
		
		var _utilsDomFns = __webpack_require__(6);
		
		var _utilsPositionFns = __webpack_require__(9);
		
		var _utilsShims = __webpack_require__(7);
		
		var _utilsLog = __webpack_require__(11);
		
		var _utilsLog2 = _interopRequireDefault(_utilsLog);
		
		// Simple abstraction for dragging events names.
		var eventsFor = {
		  touch: {
		    start: 'touchstart',
		    move: 'touchmove',
		    stop: 'touchend'
		  },
		  mouse: {
		    start: 'mousedown',
		    move: 'mousemove',
		    stop: 'mouseup'
		  }
		};
		
		// Default to mouse events.
		var dragEventFor = eventsFor.mouse;
		
		//
		// Define <DraggableCore>.
		//
		// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
		// work well with libraries that require more control over the element.
		//
		
		var DraggableCore = (function (_React$Component) {
		  _inherits(DraggableCore, _React$Component);
		
		  function DraggableCore() {
		    var _this = this;
		
		    _classCallCheck(this, DraggableCore);
		
		    _get(Object.getPrototypeOf(DraggableCore.prototype), 'constructor', this).apply(this, arguments);
		
		    this.state = {
		      dragging: false,
		      // Used while dragging to determine deltas.
		      lastX: null, lastY: null
		    };
		
		    this.handleDragStart = function (e) {
		      // Make it possible to attach event handlers on top of this one.
		      _this.props.onMouseDown(e);
		
		      // Only accept left-clicks.
		      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;
		
		      // Short circuit if handle or cancel prop was provided and selector doesn't match.
		      if (_this.props.disabled || _this.props.handle && !(0, _utilsDomFns.matchesSelector)(e.target, _this.props.handle) || _this.props.cancel && (0, _utilsDomFns.matchesSelector)(e.target, _this.props.cancel)) {
		        return;
		      }
		
		      // Set touch identifier in component state if this is a touch event. This allows us to
		      // distinguish between individual touches on multitouch screens by identifying which
		      // touchpoint was set to this element.
		      if (e.targetTouches) {
		        _this.setState({ touchIdentifier: e.targetTouches[0].identifier });
		      }
		
		      // Add a style to the body to disable user-select. This prevents text from
		      // being selected all over the page.
		      if (_this.props.enableUserSelectHack) (0, _utilsDomFns.addUserSelectStyles)();
		
		      // Get the current drag point from the event. This is used as the offset.
		
		      var _getControlPosition = (0, _utilsPositionFns.getControlPosition)(e);
		
		      var clientX = _getControlPosition.clientX;
		      var clientY = _getControlPosition.clientY;
		
		      // Create an event object with all the data parents need to make a decision here.
		      var coreEvent = (0, _utilsDomFns.createCoreEvent)(_this, clientX, clientY);
		
		      (0, _utilsLog2['default'])('DraggableCore: handleDragStart: %j', coreEvent.position);
		
		      // Call event handler. If it returns explicit false, cancel.
		      (0, _utilsLog2['default'])('calling', _this.props.onStart);
		      var shouldUpdate = _this.props.onStart(e, coreEvent);
		      if (shouldUpdate === false) return;
		
		      // Initiate dragging. Set the current x and y as offsets
		      // so we know how much we've moved during the drag. This allows us
		      // to drag elements around even if they have been moved, without issue.
		      _this.setState({
		        dragging: true,
		
		        lastX: clientX,
		        lastY: clientY,
		        // Stored so we can adjust our offset if scrolled.
		        scrollX: document.body.scrollLeft,
		        scrollY: document.body.scrollTop
		      });
		
		      // Translate el on page scroll.
		      (0, _utilsDomFns.addEvent)(document, 'scroll', _this.handleScroll);
		      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
		      // this element. We use different events depending on whether or not we have detected that this
		      // is a touch-capable device.
		      (0, _utilsDomFns.addEvent)(document, dragEventFor.move, _this.handleDrag);
		      (0, _utilsDomFns.addEvent)(document, dragEventFor.stop, _this.handleDragStop);
		    };
		
		    this.handleDrag = function (e) {
		      // Return if this is a touch event, but not the correct one for this element
		      if (e.targetTouches && e.targetTouches[0].identifier !== _this.state.touchIdentifier) return;
		
		      var _getControlPosition2 = (0, _utilsPositionFns.getControlPosition)(e);
		
		      var clientX = _getControlPosition2.clientX;
		      var clientY = _getControlPosition2.clientY;
		
		      // Snap to grid if prop has been provided
		      if (Array.isArray(_this.props.grid)) {
		        var deltaX = clientX - _this.state.lastX,
		            deltaY = clientY - _this.state.lastY;
		
		        var _snapToGrid = (0, _utilsPositionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);
		
		        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);
		
		        deltaX = _snapToGrid2[0];
		        deltaY = _snapToGrid2[1];
		
		        if (!deltaX && !deltaY) return; // skip useless drag
		        clientX = _this.state.lastX + deltaX, clientY = _this.state.lastY + deltaY;
		      }
		
		      var coreEvent = (0, _utilsDomFns.createCoreEvent)(_this, clientX, clientY);
		
		      (0, _utilsLog2['default'])('DraggableCore: handleDrag: %j', coreEvent.position);
		
		      // Call event handler. If it returns explicit false, trigger end.
		      var shouldUpdate = _this.props.onDrag(e, coreEvent);
		      if (shouldUpdate === false) {
		        _this.handleDragStop({});
		        return;
		      }
		
		      _this.setState({
		        lastX: clientX,
		        lastY: clientY
		      });
		    };
		
		    this.handleDragStop = function (e) {
		      if (!_this.state.dragging) return;
		
		      // Short circuit if this is not the correct touch event. `changedTouches` contains all
		      // touch points that have been removed from the surface.
		      if (e.changedTouches && e.changedTouches[0].identifier !== _this.state.touchIdentifier) return;
		
		      // Remove user-select hack
		      if (_this.props.enableUserSelectHack) (0, _utilsDomFns.removeUserSelectStyles)();
		
		      var _getControlPosition3 = (0, _utilsPositionFns.getControlPosition)(e);
		
		      var clientX = _getControlPosition3.clientX;
		      var clientY = _getControlPosition3.clientY;
		
		      var coreEvent = (0, _utilsDomFns.createCoreEvent)(_this, clientX, clientY);
		
		      (0, _utilsLog2['default'])('DraggableCore: handleDragStop: %j', coreEvent.position);
		
		      // Reset the el.
		      _this.setState({
		        dragging: false,
		        lastX: null,
		        lastY: null
		      });
		
		      // Call event handler
		      _this.props.onStop(e, coreEvent);
		
		      // Remove event handlers
		      (0, _utilsLog2['default'])('DraggableCore: Removing handlers');
		      (0, _utilsDomFns.removeEvent)(document, 'scroll', _this.handleScroll);
		      (0, _utilsDomFns.removeEvent)(document, dragEventFor.move, _this.handleDrag);
		      (0, _utilsDomFns.removeEvent)(document, dragEventFor.stop, _this.handleDragStop);
		    };
		
		    this.handleScroll = function (e) {
		      var s = _this.state,
		          x = document.body.scrollLeft,
		          y = document.body.scrollTop;
		
		      // Create the usual event, but make the scroll offset our deltas.
		      var coreEvent = (0, _utilsDomFns.createCoreEvent)(_this);
		      coreEvent.position.deltaX = x - s.scrollX;
		      coreEvent.position.deltaY = y - s.scrollY;
		
		      _this.setState({
		        lastX: s.lastX + coreEvent.position.deltaX,
		        lastY: s.lastY + coreEvent.position.deltaY
		      });
		
		      _this.props.onDrag(e, coreEvent);
		    };
		
		    this.onMouseDown = function (e) {
		      // HACK: Prevent 'ghost click' which happens 300ms after touchstart if the event isn't cancelled.
		      // We don't cancel the event on touchstart because of #37; we might want to make a scrollable item draggable.
		      // More on ghost clicks: http://ariatemplates.com/blog/2014/05/ghost-clicks-in-mobile-browsers/
		      if (dragEventFor === eventsFor.touch) {
		        return e.preventDefault();
		      }
		
		      return _this.handleDragStart(e);
		    };
		
		    this.onTouchStart = function (e) {
		      // We're on a touch device now, so change the event handlers
		      dragEventFor = eventsFor.touch;
		
		      return _this.handleDragStart(e);
		    };
		  }
		
		  _createClass(DraggableCore, [{
		    key: 'componentWillUnmount',
		    value: function componentWillUnmount() {
		      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
		      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
		      (0, _utilsDomFns.removeEvent)(document, eventsFor.mouse.move, this.handleDrag);
		      (0, _utilsDomFns.removeEvent)(document, eventsFor.touch.move, this.handleDrag);
		      (0, _utilsDomFns.removeEvent)(document, eventsFor.mouse.stop, this.handleDragStop);
		      (0, _utilsDomFns.removeEvent)(document, eventsFor.touch.stop, this.handleDragStop);
		      (0, _utilsDomFns.removeEvent)(document, 'scroll', this.handleScroll);
		      if (this.props.enableUserSelectHack) (0, _utilsDomFns.removeUserSelectStyles)();
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      // Reuse the child provided
		      // This makes it flexible to use whatever element is wanted (div, ul, etc)
		      return _react2['default'].cloneElement(_react2['default'].Children.only(this.props.children), {
		        style: (0, _utilsDomFns.styleHacks)(this.props.children.props.style),
		
		        // Note: mouseMove handler is attached to document so it will still function
		        // when the user drags quickly and leaves the bounds of the element.
		        onMouseDown: this.onMouseDown,
		        onTouchStart: this.onTouchStart,
		        onMouseUp: this.handleDragStop,
		        onTouchEnd: this.handleDragStop
		      });
		    }
		  }], [{
		    key: 'displayName',
		    value: 'DraggableCore',
		    enumerable: true
		  }, {
		    key: 'propTypes',
		    value: {
		      /**
		       * `allowAnyClick` allows dragging using any mouse button.
		       * By default, we only accept the left button.
		       *
		       * Defaults to `false`.
		       */
		      allowAnyClick: _react.PropTypes.bool,
		
		      /**
		       * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
		       * with the exception of `onMouseDown`, will not fire.
		       *
		       * Example:
		       *
		       * ```jsx
		       *   let App = React.createClass({
		       *       render: function () {
		       *           return (
		       *               <Draggable disabled={true}>
		       *                   <div>I can't be dragged</div>
		       *               </Draggable>
		       *           );
		       *       }
		       *   });
		       * ```
		       */
		      disabled: _react.PropTypes.bool,
		
		      /**
		       * By default, we add 'user-select:none' attributes to the document body
		       * to prevent ugly text selection during drag. If this is causing problems
		       * for your app, set this to `false`.
		       */
		      enableUserSelectHack: _react.PropTypes.bool,
		
		      /**
		       * `grid` specifies the x and y that dragging should snap to.
		       *
		       * Example:
		       *
		       * ```jsx
		       *   let App = React.createClass({
		       *       render: function () {
		       *           return (
		       *               <Draggable grid={[25, 25]}>
		       *                   <div>I snap to a 25 x 25 grid</div>
		       *               </Draggable>
		       *           );
		       *       }
		       *   });
		       * ```
		       */
		      grid: _react.PropTypes.arrayOf(_react.PropTypes.number),
		
		      /**
		       * `handle` specifies a selector to be used as the handle that initiates drag.
		       *
		       * Example:
		       *
		       * ```jsx
		       *   let App = React.createClass({
		       *       render: function () {
		       *         return (
		       *            <Draggable handle=".handle">
		       *              <div>
		       *                  <div className="handle">Click me to drag</div>
		       *                  <div>This is some other content</div>
		       *              </div>
		       *           </Draggable>
		       *         );
		       *       }
		       *   });
		       * ```
		       */
		      handle: _react.PropTypes.string,
		
		      /**
		       * `cancel` specifies a selector to be used to prevent drag initialization.
		       *
		       * Example:
		       *
		       * ```jsx
		       *   let App = React.createClass({
		       *       render: function () {
		       *           return(
		       *               <Draggable cancel=".cancel">
		       *                   <div>
		       *                     <div className="cancel">You can't drag from here</div>
		       *            <div>Dragging here works fine</div>
		       *                   </div>
		       *               </Draggable>
		       *           );
		       *       }
		       *   });
		       * ```
		       */
		      cancel: _react.PropTypes.string,
		
		      /**
		       * Called when dragging starts.
		       * If this function returns the boolean false, dragging will be canceled.
		       *
		       * Example:
		       *
		       * ```js
		       *  function (event, ui) {}
		       * ```
		       *
		       * `event` is the Event that was triggered.
		       * `ui` is an object:
		       *
		       * ```js
		       *  {
		       *    position: {top: 0, left: 0}
		       *  }
		       * ```
		       */
		      onStart: _react.PropTypes.func,
		
		      /**
		       * Called while dragging.
		       * If this function returns the boolean false, dragging will be canceled.
		       *
		       * Example:
		       *
		       * ```js
		       *  function (event, ui) {}
		       * ```
		       *
		       * `event` is the Event that was triggered.
		       * `ui` is an object:
		       *
		       * ```js
		       *  {
		       *    position: {top: 0, left: 0}
		       *  }
		       * ```
		       */
		      onDrag: _react.PropTypes.func,
		
		      /**
		       * Called when dragging stops.
		       *
		       * Example:
		       *
		       * ```js
		       *  function (event, ui) {}
		       * ```
		       *
		       * `event` is the Event that was triggered.
		       * `ui` is an object:
		       *
		       * ```js
		       *  {
		       *    position: {top: 0, left: 0}
		       *  }
		       * ```
		       */
		      onStop: _react.PropTypes.func,
		
		      /**
		       * A workaround option which can be passed if onMouseDown needs to be accessed,
		       * since it'll always be blocked (due to that there's internal use of onMouseDown)
		       */
		      onMouseDown: _react.PropTypes.func,
		
		      /**
		       * These properties should be defined on the child, not here.
		       */
		      className: _utilsShims.dontSetMe,
		      style: _utilsShims.dontSetMe,
		      transform: _utilsShims.dontSetMe
		    },
		    enumerable: true
		  }, {
		    key: 'defaultProps',
		    value: {
		      allowAnyClick: false, // by default only accept left click
		      cancel: null,
		      disabled: false,
		      enableUserSelectHack: true,
		      handle: null,
		      grid: null,
		      transform: null,
		      onStart: function onStart() {},
		      onDrag: function onDrag() {},
		      onStop: function onStop() {},
		      onMouseDown: function onMouseDown() {}
		    },
		    enumerable: true
		  }]);
		
		  return DraggableCore;
		})(_react2['default'].Component);
		
		exports['default'] = DraggableCore;
		module.exports = exports['default'];
	
		// When the user scrolls, adjust internal state so the draggable moves along the page properly.
		// This only fires when a drag is active.
	
		// On mousedown, consider the drag started.
	
		// Same as onMouseDown (start drag), but now consider this a touch device.
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = log;
		
		function log() {
		  if ((undefined)) console.log.apply(console, arguments);
		}
		
		module.exports = exports["default"];
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=react-draggable.js.map

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	var History = ReactRouter.History;
	
	var auth = __webpack_require__(213);
	
	// Login page, shows the login form and redirects to the list if login is successful
	var Login = React.createClass({
	  displayName: "Login",
	
	  // mixin for navigation
	  mixins: [History],
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // there was an error on logging in
	      error: false
	    };
	  },
	
	  // handle login button submit
	  login: function (event) {
	    // prevent default browser submit
	    event.preventDefault();
	    // get data from form
	    var username = this.refs.username.value;
	    var password = this.refs.password.value;
	    if (!username || !password) {
	      return;
	    }
	    // login via API
	    auth.login(username, password, (function (loggedIn) {
	      // login callback
	      if (!loggedIn) {
	        return this.setState({
	          error: true
	        });
	      }
	      this.history.pushState(null, '/browse');
	    }).bind(this));
	  },
	
	  // show the login form
	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h2",
	        null,
	        "Login"
	      ),
	      React.createElement(
	        "form",
	        { className: "form-vertical", onSubmit: this.login },
	        React.createElement("input", { type: "text", placeholder: "Username", ref: "username", autoFocus: true }),
	        React.createElement("input", { type: "password", placeholder: "Password", ref: "password" }),
	        React.createElement("input", { className: "btn btn-warning", type: "submit", value: "Login" }),
	        this.state.error ? React.createElement(
	          "div",
	          { className: "alert" },
	          "Invalid username or password."
	        ) : null
	      )
	    );
	  }
	});
	
	module.exports = Login;

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactRouter = __webpack_require__(159);
	var History = ReactRouter.History;
	
	var auth = __webpack_require__(213);
	
	// Register page, shows the registration form and redirects to the list if login is successful
	var Register = React.createClass({
	  displayName: "Register",
	
	  // mixin for navigation
	  mixins: [History],
	
	  // initial state
	  getInitialState: function () {
	    return {
	      // there was an error registering
	      error: false
	    };
	  },
	
	  // handle regiser button submit
	  register: function (event) {
	    // prevent default browser submit
	    event.preventDefault();
	    // get data from formx
	    var username = this.refs.username.value;
	    var password = this.refs.password.value;
	
	    if (password < 5 || username > 20) {
	      return this.setState({ error: true });
	    }
	    if (username == password) {
	      return this.setState({ error: true });
	    }
	    if (!username || !password) {
	      return;
	    }
	    // register via the API
	    auth.register(username, password, (function (loggedIn) {
	      // register callback
	      if (!loggedIn) return this.setState({
	        error: true
	      });
	      this.history.pushState(null, '/browse');
	    }).bind(this));
	  },
	
	  // show the registration form
	  render: function () {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "h2",
	        null,
	        "Register"
	      ),
	      React.createElement(
	        "p",
	        null,
	        "Password must be longer than 5 characters and cannot be the same as the username"
	      ),
	      React.createElement(
	        "form",
	        { className: "form-vertical", onSubmit: this.register },
	        React.createElement("input", { type: "text", placeholder: "Username", ref: "username" }),
	        React.createElement("input", { type: "password", placeholder: "Password", ref: "password" }),
	        React.createElement("input", { className: "btn", type: "submit", value: "Register" }),
	        this.state.error ? React.createElement(
	          "div",
	          { className: "alert" },
	          "Invalid username or password."
	        ) : null
	      )
	    );
	  }
	});
	
	module.exports = Register;

/***/ },
/* 270 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);
//# sourceMappingURL=app.js.map