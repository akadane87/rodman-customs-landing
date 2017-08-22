$(document).ready(function() {
if ($(window).width() > 540) {

  $('a[href="#footer"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $('#footer');

     $('html').stop().animate({
         'scrollTop': $target.offset().top
      }, 1100, 'linear', function () {
         window.location.hash = target;
     });
  });

  // TOP
  // Begin Scroll
  $('a[href="#start-line"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $('#start-line');

     $('html').stop().animate({
         'scrollTop': $target.offset().top
      }, 7000, 'linear', function () {
         window.location.hash = target;
     });
  });

/////////////////  START LINE  /////////////////

  // Start Line --> Power /// FORWARD button
    $('a[href="#power"]').on('click',function (e) {
       e.preventDefault();

       var target = this.hash;
       var $target = $('#power');

       $('html').stop().animate({
           'scrollTop': $target.offset().top
       }, 1100, 'swing', function () {
           window.location.hash = target;
    });
});
///////////////////END///////////////////


/////////////////  POWER  /////////////////
  // Power --> Start Line /// BACK button
    $('a[href="#start-line-back"]').on('click',function (e) {
       e.preventDefault();

       var target = this.hash;
       var $target = $('#start-line-back');

       $('html').stop().animate({
           'scrollTop': $target.offset().top
       }, 1100, 'swing', function () {
           window.location.hash = target;
    });
});

// Power --> Style /// FORWARD button
$('a[href="#style"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $('#style');

     $('html').stop().animate({
         'scrollTop': $target.offset().top
     }, 1100, 'swing', function () {
         window.location.hash = target;
  });

});
///////////////////END///////////////////

/////////////////  STYLE  /////////////////
  // Style --> Power /// BACK button
  $('a[href="#power-back"]').on('click',function (e) {
       e.preventDefault();

       var target = this.hash;
       var $target = $('#power-back');

       $('html').stop().animate({
           'scrollTop': $target.offset().top
       }, 1100, 'swing', function () {
           window.location.hash = target;
    });
});

// Style --> Interior /// FORWARD button
$('a[href="#interior"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $('#interior');

     $('html').stop().animate({
         'scrollTop': $target.offset().top
     }, 1100, 'swing', function () {
         window.location.hash = target;
  });
});
///////////////////END///////////////////


/////////////////  INTERIOR  /////////////////
  // Interior --> Style /// BACK button
  $('a[href="#style-back"]').on('click',function (e) {
       e.preventDefault();

       var target = this.hash;
       var $target = $('#style-back');

       $('html').stop().animate({
           'scrollTop': $target.offset().top
       }, 1100, 'swing', function () {
           window.location.hash = target;
    });
});


// Interior --> Show-Room /// FORWARD button
$('a[href="#show-room"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $('#show-room');

     $('html').stop().animate({
         'scrollTop': $target.offset().top
     }, 1100, 'swing', function () {
         window.location.hash = target;
  });
 });
///////////////////END///////////////////


//////////////////// IN VIEWPORT FUNCTION///////////////////////
;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));



$("#car-one-specs").inViewport(function(px){
    console.log(this.id+' '+px);
    if(px) {
      // window.scrollBy({
      //   top: 10, // could be negative value
      //   left: 0,
      //   behavior: 'smooth'
      // });
      $("#car-one-specs li").removeClass("hide-list") ;
      $("#car-one-specs li").addClass("right-show") ;
    }
    else {
      $("#car-one-specs li").addClass("hide-list") ;
      $("#car-one-specs li").removeClass("right-show") ;
    }
});


$("#car-two-specs").inViewport(function(px){
    console.log(this.id+' '+px);
    if(px) {
      // window.scrollBy({
      //   top: 10, // could be negative value
      //   left: 0,
      //   behavior: 'smooth'
      // });
      $("#car-two-specs li").removeClass("hide-list") ;
      $("#car-two-specs li").addClass("right-show") ;
    }
    else {
      $("#car-two-specs li").addClass("hide-list") ;
      $("#car-two-specs li").removeClass("right-show") ;
    }
});

$("#car-three-specs").inViewport(function(px){
    console.log(this.id+' '+px);
    if(px) {
      // window.scrollBy({
      //   top: 10, // could be negative value
      //   left: 0,
      //   behavior: 'smooth'
      // });
      $("#car-three-specs li").removeClass("hide-list") ;
      $("#car-three-specs li").addClass("right-show") ;
    }
    else {
      $("#car-three-specs li").addClass("hide-list") ;
      $("#car-three-specs li").removeClass("right-show") ;
    }
});

$("#footer").inViewport(function(px){
    console.log(this.id+' '+px);
    if(px) {
      $("#skip-to-end-btn").removeClass("skip-to-end") ;
      $("#skip-to-end-btn").addClass("skip-to-end-hide") ;
    }
    // else {
    //   $("#skip-to-end-btn").addClass("skip-to-end-hide") ;
    //   $("#skip-to-end-btn").removeClass("skip-to-end") ;
    // }
});

///////////////////// END /////////////////////

/////////////////  SHOWROOM START  /////////////////
// Show-Room --> Interior /// Back button
$('a[href="#interior-back"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $('#interior-back');

     $('html').stop().animate({
         'scrollTop': $target.offset().top
     }, 1100, 'swing', function () {
         window.location.hash = target;
  });
 });

 // Show-Room --> Interior /// Back button
 $('a[href="#car-one"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $('#car-one');

      $('html').stop().animate({
          'scrollTop': $target.offset().top
      }, 1100, 'swing', function () {
          window.location.hash = target;
          window.scrollBy({
            top: 500, // could be negative value
            left: 0,
            behavior: 'smooth'
          });
   });
  });

/////////////////  PROJECT 1  /////////////////
// F-150 --> Show-Room /// Back button
$('a[href="#show-room-back"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $('#show-room-back');

     $('html').stop().animate({
         'scrollTop': $target.offset().top
     }, 1100, 'swing', function () {
         window.location.hash = target;
  });
 });

// F-150 --> Raptor /// Forward button
 $('a[href="#car-two"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $('#car-two');

      // $('html').stop().animate({
        $('html').stop().animate({
          'scrollTop': $target.offset().top
      }, 1100, 'swing', function () {
          window.location.hash = target;
          window.scrollBy({
            top: 500, // could be negative value
            left: 0,
            behavior: 'smooth'
          });
   });
  });
///////////////////END///////////////////

/////////////////  PROJECT 2  /////////////////
// Raptor --> F-150 /// Back button
$('a[href="#car-one-back"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $('#car-one-back');

     $('html').animate({
         'scrollTop': $target.offset().top
     }, 1100, 'swing', function () {
         window.location.hash = target;
         window.scrollBy({
           top: 500, // could be negative value
           left: 0,
           behavior: 'smooth'
         });
  });
 });

// F-150 --> Raptor /// Forward button
 $('a[href="#car-three"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $('#car-three');

      $('html').stop().animate({
          'scrollTop': $target.offset().top
      }, 1100, 'swing', function () {
          window.location.hash = target;
          window.scrollBy({
            top: 500, // could be negative value
            left: 0,
            behavior: 'smooth'
          });
   });
  });
///////////////////END///////////////////


/////////////////  PROJECT 3  /////////////////
// Cobra --> F-150 /// Back button
$('a[href="#car-two-back"]').on('click',function (e) {
     e.preventDefault();

     var target = this.hash;
     var $target = $('#car-two-back');

     $('html').stop().animate({
         'scrollTop': $target.offset().top
     }, 1100, 'swing', function () {
         window.location.hash = target;
  });
 });

// F-150 --> Raptor /// Forward button
 $('a[href="#lion-contact"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $('#lion-contact');

      $('html').stop().animate({
          'scrollTop': $target.offset().top
      }, 1100, 'swing', function () {
          window.location.hash = target;
   });
  });
///////////////////END///////////////////
}
});
