const db = require ('../database/models');

module.exports = {
  findAll: function (req, res) {
    db.Event
      .find (req.query)
      .sort ({date: -1})
      .then (dbEvent => res.json (dbEvent))
      .catch (err => res.status (422).json (err));
  },
  findById: function (req, res) {
    db.Event
      .findById (req.params.id)
      .then (dbModel => res.json (dbModel))
      .catch (err => res.status (422).json (err));
  },
  create: function (req, res) {
    db.Event
      .create (req.body)
      .then (dbModel => {
      console.log(dbModel)
      return db.User.findOneAndUpdate({_id: dbModel.customer}, { $push: { events: dbModel._id }} )
      
      }).then(resp => {
        res.json(resp)
      })
      .catch (err => res.status (422).json (err));
  },
  update: function (req, res) {
    db.Event
      .findOneAndUpdate ({_id: req.params.id}, req.body)
      .then (dbModel => res.json (dbModel))
      .catch (err => res.status (422).json (err));
  },
  remove: function (req, res) {
    db.Event
      .findById ({_id: req.params.id})
      .then (dbModel => dbModel.remove ())
      .then (dbModel => res.json (dbModel))
      .catch (err => res.status (422).json (err));
  },
  // technically uses the user database, but I put it here. returns events tied to a users ID
  findUserEvents: function (req, res) {
    db.User.findById (req.params.id).then (response => {
      console.log (response);
      res.json (response);
    });
  },
};
