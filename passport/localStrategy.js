const db = require("../database/models");
const LocalStrategy = require("passport-local").Strategy;


const strat = new LocalStrategy(
    {
        usernameField: "email"
    },
    function(username, password, done) {
        db.User.findOne( { email: username }, (err, user) => {
            if(err) {
                return done(err)
            }
            if(!user) {
                return done(null, false, { message: 'User Not Found'} )
            }
            if(!user.checkPass(password)){
                return done(null, false, { message: 'Incorrect Password'})
            }
            return done(null, user)
        })
    }
)

module.exports = strat;