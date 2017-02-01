$(document).ready(function() {

  // scroll to about section
  $('a[href="#about"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $('#about');

     $('html, body').stop().animate({
         'scrollTop': $target.offset().top
      }, 1100, 'swing', function () {
         window.location.hash = target;
     });
  });

  // scroll to contact section
  $('a[href="#contact"]').on('click',function (e) {
       e.preventDefault();

       var target = this.hash;
       var $target = $('#contact');

       $('html, body').stop().animate({
           'scrollTop': $target.offset().top
       }, 1100, 'swing', function () {
           window.location.hash = target;
       });
   });
});