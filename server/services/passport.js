const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


//The mongoose model Class that creates the collection for us to inherit from
const User = mongoose.model('users');

//user = user mongoose model turned into id to place in cookie
passport.serializeUser((user, done) => {
    //user.id is the database id, every user is guarnteed to have this id, not every user may have a google id
    done(null, user.id);
});


passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null,user);
  });
});

//creating a google strategy to be used by passport JS in the authentication. This is the setup before authenticating users.
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id}).then((existingUser) => {
            if(existingUser) {
                done(null, existingUser);
            } else {
                new User({googleId: profile.id})
                    .save()
                    .then(user => done(null, user));
            }
        });
    })
);