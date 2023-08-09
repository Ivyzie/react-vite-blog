import $ from "jquery";

function Index() {
  if (window.addEventListener)
    window.addEventListener("DOMMouseScroll", wheel, false);
  window.onmousewheel = document.onmousewheel = wheel;

  function wheel(event) {
    var delta = 0;
    if (event.wheelDelta)
      delta = event.wheelDelta / 20; //controls the scroll wheel range/speed
    else if (event.detail) delta = -event.detail / 20;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
  }

  var goUp = true;
  var end = null;
  var interval = null;

  function handle(delta) {
    var animationInterval = 20; //controls the scroll animation after scroll is done
    var scrollSpeed = 40; //controls the scroll animation after scroll is done (increase to make it faster)

    if (end == null) {
      end = $(window).scrollTop();
    }
    end -= 20 * delta;
    goUp = delta > 0;

    if (interval == null) {
      interval = setInterval(function () {
        var scrollTop = $(window).scrollTop();
        var step = Math.round((end - scrollTop) / scrollSpeed);
        if (
          scrollTop <= 0 ||
          scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
          (goUp && step > -1) ||
          (!goUp && step < 1)
        ) {
          clearInterval(interval);
          interval = null;
          end = null;
        }
        $(window).scrollTop(scrollTop + step);
      }, animationInterval);
    }
  }
}

export default Index;
