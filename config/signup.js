
// var mongoose = require('mongoose');
// // set Promise provider to bluebird
// mongoose.Promise = require('bluebird');
var User = require('../app/models/user');

exports.signUp = (email, password) => 

	new Promise((resolve,reject) => {

		const newUser = new User();
		newUser.local.email    = email;
        newUser.local.password = newUser.generateHash(password);
		console.log(password)
		newUser.save(function(err) {
		    // yet another err object to deal with
		    if (err) {
		      reject({ status: 500, message: 'Internal Server Error !' });
		    }
		    resolve({ status: 201, message: 'User Registered Sucessfully !' })
		    // do something with updated user
		  });

	});