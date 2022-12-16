const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

passport.serializeUser(function(user, cb){
    cb(null, user);
})

passport.deserializeUser(function(user, cb) {
    cb(null, user);
});

passport.use(new LinkedInStrategy({
        clientID: process.env.LINKEDIN_CLIENT_ID,
        clientSecret: process.env.LINKEDIN_SECRET,
        callbackURL: "http://localhost:3000/linkedin/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
    }
));

