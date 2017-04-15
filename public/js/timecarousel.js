
console.log('=============================================================');
console.log('tiemcarousel.js                                                  ');
console.log('=============================================================');
$(document).ready(function() {
   $('.item').each(function() {
       if (!$(this).hasClass("active")) {
               $(this).addClass("active");
       } else {
           $(this).removeClass("active");
       }
    });
});