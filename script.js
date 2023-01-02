$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

var cur = document.querySelector('.cursor');
var cur2 = document.querySelector('.cursor2')
document.addEventListener('mousemove', function(e){
cur.style.left = e.clientX + 'px';
cur.style.top = e.clientY + 'px';
cur2.style.left = e.clientX + 'px';
cur2.style.top = e.clientY + 'px';
})