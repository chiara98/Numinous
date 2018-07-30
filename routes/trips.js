const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');
const users = require('./users');
const auth = require('./helpers/auth');


// Trips index
router.get('/', (req,res, next) => {


  console.log("trying to go to main");
  console.log(req.query.city1);
  res.render("trips/index", {layout: 'tripsLayout.hbs', city1: req.query.city1, city2: req.query.city2, city3: req.query.city3,
  city4: req.query.city4, city5: req.query.city5});

});

//Trip new
router.get('/new', auth.requireLogin, (req, res, next) => {
  res.render('trips/new');
})


// Trip create
router.post('/', auth.requireLogin, (req, res, next) => {
  let trip = new Trip(req.body);
  trip.save(function(err, trip) {
    console.log("saving!");
    if(err) {console.error(err)};
    return res.redirect(`/trips?city1=${trip.starting_city}&city2=${trip.ending_city}&city3=${trip.middle_city1}&city4=${trip.middle_city2}&city5=${trip.middle_city3}`);
  });
});

// Trips show
// router.get('/:id', auth.requireLogin, (req, res, next) => {
//   Trip.findById(req.params.id, function(err, room) {
//     if(err) { console.error(err) };
//
//       res.render('rooms/show', { room: room, posts: posts, roomId: req.params.id });
//     });
//   });
// });


module.exports = router;
