const express = require('express');
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const dbConnection = require("./database");
const routes = require('./routes');
const passport = require("./passport");
const app = express();

const PORT = process.env.PORT || 3001;

var sess = {
  secret: 'your mother doesn"t love you',
  store: new MongoStore({ mongooseConnection: dbConnection }),
  cookie:{},
  resave: false,
  saveUninitialized: false
}

if(app.get('env') === 'production'){
  app.set('trust proxy', 1)
  sess.cookie.secure = true
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(session(sess));
app.use(passport.initialize())
app.use(passport.session());


// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})