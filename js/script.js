$(document).ready(function () {
  // hero bg swipe
  $(function () {
    var transTime = 8000;
    setInterval(function () {
      if ($(".bg-grad.active").index() == $(".bg-grad").length - 1) {
        $(".bg-grad.active").removeClass("active");
        $(".bg-grad").eq(0).addClass("active");
      } else {
        var curIndex = $(".bg-grad.active").index();
        $(".bg-grad.active").removeClass("active");
        $(".bg-grad")
          .eq(curIndex + 1)
          .addClass("active");
      }
    }, transTime);
  });

  var owl = $("#firstCarous");
  var owl2 = $("#secondCarous");
  $("#firstCarous").owlCarousel({
    loop: true,
    nav: false,
    smartSpeed: 1000,
    margin: 10,
    autoWidth: true,
    items: 5,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 5,
      },
    },
  });
  $("#secondCarous").owlCarousel({
    loop: true,
    nav: false,
    smartSpeed: 1000,
    margin: 10,
    autoWidth: true,
    items: 5,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 5,
      },
    },
  });
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
  });
  owl2.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owl2.trigger("next.owl");
    } else {
      owl2.trigger("prev.owl");
    }
    e.preventDefault();
  });

  AOS.init({
    disable: function () {
      var maxWidth = 800;
      return window.innerWidth < maxWidth;
    },
  });
});
