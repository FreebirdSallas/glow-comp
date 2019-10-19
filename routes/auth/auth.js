const router = require('express').Router();
const passport = require('../../passport');

// matches auth/user
router.route('/').get((req, res, next) => {
    console.log('user');
    console.log(req.user);
    if(req.user){
        res.json({ user: req.user })
    } else {
        res.json({ user: null });
    }
})

// match POST /auth/user/login
router.route('/login').post((req, res, next) => {
    console.log(`login, req.body: ${req.body}`);
    next();
}, passport.authenticate('local'), (req, res) => {
    console.log('logged in', req.user);
    var userInfo = {
        email: req.user.email
    };
    res.send(userInfo);
});

module.exports = router;