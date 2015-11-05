var mapModule = (function() {

  var init = function() {
    initMap();

    eventHandlers();
  }

  var initMap = function() {
    var map = L.map('map').setView([51.505, -0.09], 13);

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
      // introPanel.addClass('intro-panel-closed');
      console.log('kdkd');
      introPanel.animate({
        'margin-left': '-100px',
      }, {
        step: function() {
          introPanel.css({'margin-left': '-100px'}, 200)
        },
      }, 200);
    });
  }

  return {
    init: init,
  }

})();

mapModule.init();
