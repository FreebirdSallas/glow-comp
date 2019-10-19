const passport = require("passport");
const db = require('../database/models');
const LocalStrategy = require("./localStrategy");

passport.serializeUser((user, done) => {
    console.log("serializing");
    console.log(user);
    console.log("*********");
    done(null, { _id: user._id })
});

passport.deserializeUser((id, done) => {
    console.log("DECEREALIZING");
    db.User.findOne({_id:id}, 'username', (err, user) => {
        console.log("DEserialize user")
        console.log(user);
        console.log('-------');
        done(null, user)
    })
})

passport.use(LocalStrategy)

module.exports = passport;