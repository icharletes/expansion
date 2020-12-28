jQuery(document).ready(function($){

   $("#botonocultamuestra04, #botonocultamuestra05").click(function(){
      $("#divocultamuestra01").each(function() {
        displaying = $(this).css("display");
        if(displaying == "block") {
          $(this).fadeOut('slow',function() {
           $(this).css("display","none");
          });
        } else {
          $(this).fadeIn('slow',function() {
            $(this).css("display","block");
          });
        }
      });
    });


   $("#botonocultamuestra").click(function(){
      $("#divocultamuestra").each(function() {
        displaying = $(this).css("display");
        if(displaying == "block") {
          $(this).slideUp('slow',function() {
           $(this).css("display","none");
          });
        } else {
          $(this).slideDown('slow',function() {
            $(this).css("display","block");
          });
        }
      });
    });//fin

   $("#botonocultamuestra02").click(function(){
      $("#divocultamuestra02").each(function() {
        displaying = $(this).css("display");
        if(displaying == "block") {
          $(this).slideUp('slow',function() {
           $(this).css("display","none");
          });
        } else {
          $(this).slideDown('slow',function() {
            $(this).css("display","block");
          });
        }
      });
    });//fin

   $("#botonocultamuestra03").click(function(){
      $("#divocultamuestra03").each(function() {
        displaying = $(this).css("display");
        if(displaying == "block") {
          $(this).slideUp('slow',function() {
           $(this).css("display","none");
          });
        } else {
          $(this).slideDown('slow',function() {
            $(this).css("display","block");
          });
        }
      });
    });//fin



function setDots(){
  $("#precios .owl-dots").removeClass('disabled');
}
            "use strict";
            //  TESTIMONIALS CAROUSEL HOOK
      $("#precios").owlCarousel({
          nav:true,
          loop:true,
          center:true,
          navText: ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
          margin:10,
          autoHeight:true,
          responsive: {
            0: {
              items: 1
            },
            480: {
              items: 2
            },

            768: {
              items: 3
            },
            992: {
              items: 3
            }
          }
      });






  });