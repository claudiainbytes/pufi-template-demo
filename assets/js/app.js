$(function() {

  /*function pufiViewModel() {

     var self = this;

     self.validateEmail = ko.computed( function() {

     }, self);

     self.loadPufi();

  };

  ko.applyBindings(new pufiViewModel());*/

  var $menu = $('.pf-menu-icon');
  var $foldOut = $('.fold-out');

  $menu.click(function(e){
        e.stopPropagation();
        $(this).toggleClass('change');
        $foldOut.toggleClass('fold-out-open');
  });

});


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("pf-slides");
    var dots = document.getElementsByClassName("slide-dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slide-active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " slide-active";
    setTimeout(showSlides, 5000);
}
