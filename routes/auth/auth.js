const router = require ('express').Router ();
const passport = require ('../../passport');

// matches auth/user
router.route ('/').get ((req, res, next) => {
  if (req.user) {
    console.log ('found user, logging in');
    res.json ({user: req.user});
  } else {
    res.status (422).json ({user: null});
  }
});

// match POST /auth/user/login
router.route ('/login').post ((req, res, next) => {
  console.log (`login, req.body: ${req.body}`);
  next ();
}, passport.authenticate ('local'), (req, res) => {
  console.log ('logged in', req.user);
  var userInfo = {
    email: req.user.email,
  };
  res.send (userInfo);
});

//match post /auth/user/logout
router.route ('/logout').post ((req, res, next) => {
  if (req.user) {
    req.logout ();
    res.send ({msg: 'logging out'});
  } else {
    res.send ({msg: 'no user to logout'});
  }
});

module.exports = router;
