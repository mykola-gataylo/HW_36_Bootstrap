    // GoogleMaps

    function initMap() {
      const mapOptions = {
        center: new google.maps.LatLng(36.69975876585313, -4.4466650226033595),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.roadmap,
        scrollwheel: false,
        draggable: false,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
      };

      const map = new google.maps.Map(document.getElementById("map"), mapOptions);

      new google.maps.Marker({
        position: new google.maps.LatLng(36.69975876585313, -4.4466650226033595),
        map,
        animation: google.maps.Animation.BOUNCE,
      });
    }

    google.maps.event.addDomListener(window, 'load', initMap);

    // class active to navbar-link

    let NavLink = document.getElementsByClassName("nav-link-custom");

    for (let i = 0; i < NavLink.length; i++) {
      NavLink[i].addEventListener('click', function () {
        for (let i = 0; i < NavLink.length; i++) {
          NavLink[i].classList.remove('active');
        }
        this.classList.add('active');
      })
    }

    // animation

    let scroll = scrollY;
    const meetBlock = document.getElementById("meet");

    window.addEventListener("scroll", function () {
      if (scrollY > scroll) {
        meetBlock.classList.add("animate__flip");
      } else {
        meetBlock.classList.remove("animate__flip");
      }
    });