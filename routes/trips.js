const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');
const users = require('./users');
const auth = require('./helpers/auth');
// const User = require('../models/user');



// router.use(function(req, res, next) {
//   res.locals.currentUserId = req.session.userId;
// });
// Trips index
router.get('/', (req,res, next) => {

  res.render("trips/index", {layout: 'tripsLayout.hbs', city1: req.query.city1, city2: req.query.city2, city3: req.query.city3,
  city4: req.query.city4, city5: req.query.city5, date1: req.query.date1, date2: req.query.date2});

});

//Trip new
router.get('/new', auth.requireLogin, (req, res, next) => {
  res.render('trips/new', {layout: 'newLayout.hbs'});
})


// Trip create
router.post('/', auth.requireLogin, (req, res, next) => {
  let trip = new Trip(req.body);
  trip.save(function(err, trip) {
    console.log("saving!");
    if(err) {console.error(err)};

    return res.redirect(`/trips?city1=${trip.starting_city}&city2=${trip.ending_city}&city3=${trip.middle_city1}&city4=${trip.middle_city2}&city5=${trip.middle_city3}&date1=${trip.starting_Date}&date2=${trip.ending_Date}`);

  });
});

// router.get('/show', auth.requireLogin, (req,res,next) => {
//   const currentUserId = req.session.userId;
//   User.findById(currentUserId.exec((err, user ) => {
//     if(err) {console.error(err)};
//
//     Trip.findById(currentUserId.exec((err, trip) => {
//       if(err) { console.error(err) };
//
//       console.log("going to show!");
//       console.log(user.trips);
//       res.render('trips/show', { user: user, trips: user.trips});
//     }));
//   }));
// });







module.exports = router;
