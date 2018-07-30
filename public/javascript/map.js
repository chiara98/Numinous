const mongoose = require('mongoose');
var address = req.params.starting_city;
var geocoder;
 var map;

 function codeAddress() {
   var address = req.params.starting_city;
   geocoder.geocode( { 'address': address}, function(results, status) {
     if (status == 'OK') {

           return results[0].geometry.location;

     } else {
       alert('Geocode was not successful for the following reason: ' + status);
     }
   });
 }


 function returnPlace(){
   var address = req.params.starting_city;
   return address;
 }
