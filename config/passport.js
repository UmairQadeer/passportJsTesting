// // config/passport.js

// // load all the things we need
// var LocalStrategy   = require('passport-local').Strategy;

// // load up the user model
// var User = require('../app/models/user');

// // expose this function to our app using module.exports
// module.exports = function(passport) {

//     // =========================================================================
//     // passport session setup ==================================================
//     // =========================================================================
 
   
//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//     });

//     // used to deserialize the user
//     passport.deserializeUser(function(id, done) {
//         User.findById(id, function(err, user) {
//             done(err, user);
//         });
//     });

//     // =========================================================================
//     // LOCAL SIGNUP ============================================================
//     // =========================================================================

//     // function def(){
//     //     abc().then(function(){

//     //     })
//     //     .catch(funct)
//     // }


//     function abc(email, password){
//        return new Promise((resolve,reject) => {
//             User.findOne({ 'local.email' :  email }, function(err, user) {
//             // if there are any errors, return the error
//             if (err)
//                 reject({message: 'User Already Registered !' })

//             // check to see if theres already a user with that email
//             if (user) {
//                 reject({message: 'User Already Registered !' })
//             } else {

//                 // if there is no user with that email
//                 // create the user
//                 var newUser            = new User();

//                 // set the user's local credentials
//                 newUser.local.email    = email;
//                 newUser.local.password = newUser.generateHash(password);

//                 // save the user
//                 newUser.save(function(err) {
//                     if (err)
//                         reject({message: 'User Already Registered !' })
//                     resolve({newUser})
//                 });
//             }

//         }); 
//        })
//     }

//     passport.use('local-signup', new LocalStrategy({
//         usernameField : 'email',
//         passwordField : 'password',
//         passReqToCallback : true 
//     },
//     function(req, email, password, done) {

//         process.nextTick(function() {
//              User.findOne({ 'local.email' :  email }, function(err, user) {
//             // if there are any errors, return the error
//             if (err)
//                 return done(err);

//             // check to see if theres already a user with that email
//             if (user) {
//                 return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
//             } else {

//                 // if there is no user with that email
//                 // create the user
//                 var newUser            = new User();

//                 // set the user's local credentials
//                 newUser.local.email    = email;
//                 newUser.local.password = newUser.generateHash(password);

//                 // save the user
//                 newUser.save(function(err) {
//                     if (err)
//                         throw err;
//                     return done(null, newUser);
//                 });
//             }

//         });
//         });

//     }));
//      // =========================================================================
//     // LOCAL LOGIN =============================================================
//     // =========================================================================

//     passport.use('local-login', new LocalStrategy({
//         // by default, local strategy uses username and password, we will override with email
//         usernameField : 'email',
//         passwordField : 'password',
//         passReqToCallback : true 
//     },
//     function(req, email, password, done) { 

//         User.findOne({ 'local.email' :  email }, function(err, user) {
//             // if there are any errors, return the error before anything else
//             if (err)
//                 return done(err);

//             // if no user is found, return the message
//             if (!user)
//                 return done(null, false, req.flash('loginMessage', 'No user found.')); 

//             // if the user is found but the password is wrong
//             if (!user.validPassword(password))
//                 return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); 

//             // all is well, return successful user
//             return done(null, user);
//         });

//     }));

// };

