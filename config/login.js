
const User = require('../app/models/user');

exports.loginUser = (email, password) => 

	new Promise((resolve,reject) => {
		console.log(password)
		User.findOne({ 'local.email' :  email }, function(err, user) {
			if (err){
	            reject({ status: 404, message: 'User Not Found !' });
			}
	            // if no user is found, return the message
	        if (!user|| user == null){
	            reject({ status: 401, message: 'Invalid Credentials !' }); 
	        }
			if (user.validPassword(password)){
					resolve({ status: 200, message: email });
			}else{
				reject({ status: 401, message: 'Invalid password!' }); 
			}
		});
});