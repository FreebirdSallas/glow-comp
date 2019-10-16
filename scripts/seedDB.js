const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/infiniteWellness"
);

const userSeed = [
  {
    name: "Joe Smith",
    email: "joe.smith@email.net",
    date: new Date(Date.now())
  },
  {
    name: "Bilbo Baggins",
    email: "nowyouseeme@email.net",
    date: new Date(Date.now())
  },
  {
    name: "Hulk",
    email: "hulksmash@hulk.com",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
