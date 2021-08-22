$.fn.carousel.Constructor.prototype.cycle = function (event) {  
    if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval)
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
          
        var $ele = $('.carousel-item-next');
        var newInterval = $ele.data('interval') || this._config.interval;
        this._interval = setInterval(
          (document.visibilityState ? this.nextWhenVisible : this.next).bind(this),
          newInterval
        );
      }
};

$('#slides').carousel({
  pause: false
})

//Remember slide on page refresh
$('#slides').on('slid.bs.carousel', function () {
var currentSlide = $('#slides div.active').index();
sessionStorage.setItem('lastSlide', currentSlide);   
});
if(sessionStorage.lastSlide){
  $("#slides").carousel(sessionStorage.lastSlide*1);
}