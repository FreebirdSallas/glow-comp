const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema ({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  massType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: Date,
    //required: true
  },
  endTime: {
    type: Date,
    //required: true
  },
});

const Event = mongoose.model ('Event', eventSchema);
module.exports = Event;
