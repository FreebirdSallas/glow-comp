const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema ({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  massType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const Event = mongoose.model ('Event', eventSchema);
module.exports = Event;
