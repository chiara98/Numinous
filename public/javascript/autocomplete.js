var latlng;
var latlng1;
var latlng2;
var latlng3;
var latlng4;
var address1 = '{{city1}}';
var address2 = '{{city2}}';
var address3 = '{{city3}}';
var address4 = '{{city4}}';
var address5 = '{{city5}}';
var geocoder;
var geocoder1;
var geocoder2;
var geocoder3;
var geocoder4;

function geocodeAddresses(){

geocoder.geocode({ 'address' : address1}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
    var latitude = results[0].geometry.location.lat();
    var longitude = results[0].geometry.location.lng();
  }


  console.log(latitude);
  console.log(longitude);
  LatLng = {lat: latitude, lng: longitude};
}
geocoder1.geocode({ 'address' : address2}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
    var latitude = results[0].geometry.location.lat();
    var longitude = results[0].geometry.location.lng();
  }


  console.log(latitude);
  console.log(longitude);
 LatLng1 = {lat: latitude, lng: longitude};
}
geocoder2.geocode({ 'address' : address3}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
    var latitude = results[0].geometry.location.lat();
    var longitude = results[0].geometry.location.lng();
  }


  console.log(latitude);
  console.log(longitude);
  LatLng2 = {lat: latitude, lng: longitude};
}

geocoder3.geocode({ 'address' : address4}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
    var latitude = results[0].geometry.location.lat();
    var longitude = results[0].geometry.location.lng();
  }


  console.log(latitude);
  console.log(longitude);
   LatLng3 = {lat: latitude, lng: longitude};
}

geocoder4.geocode({ 'address' : address5}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
    var latitude = results[0].geometry.location.lat();
    var longitude = results[0].geometry.location.lng();
  }


  console.log(latitude);
  console.log(longitude);
   LatLng4 = {lat: latitude, lng: longitude};
}


}
console.log(LatLng);
