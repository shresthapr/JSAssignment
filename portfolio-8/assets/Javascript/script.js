(function ($) {
  // Mobile Responsive Dropdown
  const mobilemenu = () => {
    const menu = document.querySelector("ul");
    menu.classList.toggle("mobilemenu");
    document.getElementsByClassName(".Tryme").style.visibility = "hidden";
  };

  //popup

  var modal = document.getElementById("id01");

  //close popup when clicked anywhere outside modal div
  document.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  //Show user's location

  $("#location-button").click(function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var platform = new H.service.Platform({
          apikey: "Oz4m4ODU37Rrb0TVb3qZqYXEpWVMoI44qKCTRD0xl2s",
        });
        var defaultLayers = platform.createDefaultLayers();
        var map = new H.Map(
          document.getElementById("mapContainer"),
          defaultLayers.vector.normal.map,
          {
            zoom: 15,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          }
        );
      });
    }
  });

  // hide map when clicked outside
  var mapbox = document.getElementById("mapmodel");

  document.addEventListener("click", function (remove) {
    if (remove.target === mapbox) {
      mapbox.style.display = "none";
    }
  });
})(window.jQuery);
