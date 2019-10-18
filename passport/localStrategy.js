const db = require("../database");
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
                return done(null, false, { message: 'Incorrect username bruh'} )
            }
            if(!user.checkPassword(password)){
                return done(null, false, { message: 'wrong pass bud'})
            }
            return done(null, user)
        })
    }
)

module.exports = strat;