function activePlacesSearch() {
    var input = document.getElementById('starting_city');
  var autocomplete = new google.maps.places.Autocomplete(input);
  console.log(autocomplete);
}
var map;
function initialize() {
  var myLatLong= new google.maps.LatLng(9.9312328, 76.2673041);
  var myOptions = {
    zoom: 8,
    center: myLatLong;
  };

 map = new google.maps.Map(getElementById("map_canvas"),myOptions);
}
