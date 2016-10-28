$(document).ready(function() {

$(window).scroll(function() {
       if ($(window).scrollTop() > 0) {
           $('.globalHeader').addClass('stick');
           $('.logo').addClass('stick1');
       }
       if ($(window).scrollTop() < 1) {
           $('.globalHeader').removeClass('stick');
           $('.logo').removeClass('stick1');
       }
   });

$('.grid-img').hover(function() {
   $('.grid-img').addClass('greenify');
 },
  function() {
    $('.grid-img').removeClass('greenify');
 });

 });
