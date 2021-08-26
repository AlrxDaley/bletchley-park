      
      // https://developers.google.com/maps/documentation/javascript/overview?hl=en_GB followed this tutorial to get the desried embeded map
      // Initialize and add the map
      function initMap() {
        // The location of bletchley
        const bletchley = { lat: 51.99787108114173, lng: -0.7406433846536573 };
        // The map, centered at bletchley
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: bletchley,
        });
        // The marker, positioned at bletchley
        const marker = new google.maps.Marker({
          position: bletchley,
          map: map,
    });
}