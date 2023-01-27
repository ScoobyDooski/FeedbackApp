const passport = require('passport');

module.exports = (app) => {
    //Express JS Route handler to send user to passport authentication with google
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );

    //when users visit this route they will have the code given by the OAuth and feth the profile
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req,res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req,res)=> {
        res.send(req.user);
    });
};

