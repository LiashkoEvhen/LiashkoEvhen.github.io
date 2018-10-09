$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }

})
  $('#burger-link').click(function(event) {
  	$('.dropleft__menu').css({
  		"display": 'inline-block',
  		'width': '100%'
  	});
  });
  $('#close').click(function(event) {
  	  
  	  $('.dropleft__menu').css({
  		'width': '0',
  		"display": 'none'
  		
  	});});
	});