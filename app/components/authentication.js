var $ = require("jquery");

// authentication object
var auth = {
	register: function(username, password, cb) 
	{
		// submit request to server, call the callback when complete
    	var url = "/users/register";
    	$.ajax
    	({
    		url: url,
      		dataType: 'json',
      		type: 'POST',
      		data: {
        		username: username,
        		password: password
      		},
      		// on success, store a login token
      		success: function(res) 
      		{
        		localStorage.token = res.token;
        		localStorage.name = res.username;
        		this.onChange(true);
        		if (cb)
          		cb(true);

      		}.bind(this),
      		
      		error: function(xhr, status, err) 
      		{
        		// if there is an error, remove any login token
        		delete localStorage.token;
        		this.onChange(false);
        		if (cb)
          		cb(false);
      		}.bind(this)
    	});
  	},

  // login the user
  login: function(username, password, cb) 
  {
    console.log("login in");
    // submit login request to server, call callback when complete
    cb = arguments[arguments.length - 1];
    // check if token in local storage
    if (localStorage.token) 
    {
      this.onChange(true);
      if (cb)
        cb(true);
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
      success: function(res) {
        // on success, store a login token
        localStorage.token = res.token;
        localStorage.name = res.username;
        this.onChange(true);
        if (cb)
          cb(true);
      }.bind(this),
      error: function(xhr, status, err) {
        // if there is an error, remove any login token
        delete localStorage.token;
        this.onChange(false);
        if (cb)
          cb(false);
      }.bind(this)
    });
  },
  // get the token from local storage
  getToken: function() {
    return localStorage.token;
  },
  // get the name from local storage
  getName: function() {
    return localStorage.name;
  },
  // logout the user, call the callback when complete
  logout: function(cb) {
    delete localStorage.token;
    this.onChange(false);
    if (cb) cb();
  },
  // check if user is logged in
  loggedIn: function()
  {
    return !!localStorage.token;
  },
  // default onChange function
  onChange: function() {},
};

module.exports = auth;