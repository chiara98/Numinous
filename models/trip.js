const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TripSchema = new Schema({
  // startingDate: {type: String, required true},
  // endingDate: {type: String, required: true},
  starting_city: {type: String, required: true},
  ending_city: {type: String, required: true},
  middle_city1: {type: String, required: false},
  middle_city2: {type: String, required: false},
  middle_city3: {type: String, required: false},

});

module.exports = mongoose.model('Trip', TripSchema);
