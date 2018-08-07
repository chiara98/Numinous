const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TripSchema = new Schema({
   starting_Date: {type: Date, required: true},
   ending_Date: {type: Date, required: true},
  starting_city: {type: String, required: true},
  ending_city: {type: String, required: true},
  middle_city1: {type: String, required: false},
  middle_city2: {type: String, required: false},
  middle_city3: {type: String, required: false},
 });

module.exports = mongoose.model('Trip', TripSchema);
