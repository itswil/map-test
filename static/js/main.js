var mapModule = (function() {

  var map = L.map('map',{
    animate: true,
  } );

  var init = function() {
    initMap();

    eventHandlers();
  }

  var initMap = function() {
    map.setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'wwong4macmillan.cigmdp4gs00h0wfknt3rsa9i4',
      accessToken: 'pk.eyJ1Ijoid3dvbmc0bWFjbWlsbGFuIiwiYSI6ImNpZ21kcDRtYTAwZjh3amt0eDlldGNhbnMifQ.B_0FAM2oX4eyWsZ7RidYQQ'
    }).addTo(map);
  }

  var eventHandlers = function() {
    var introPanel = $('.intro-panel');

    introPanel.on('click', function() {
      introPanel.fadeOut(500, function() {
        map.panTo(new L.LatLng(52.505, -0.09), {animate: true, duration: 5.0});

      });
      // map.panTo(new L.LatLng(40.737, -73.923));
      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(showPosition);
      // }
    });
  }

  return {
    init: init,
  }

})();

mapModule.init();
