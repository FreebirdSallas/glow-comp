const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema ({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model ('Event', eventSchema);
module.exports = Event;
