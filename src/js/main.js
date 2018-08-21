$(document).ready(function() {

	if ($(window).width() < 768) {
	  $('#header').css('opacity', '1'); 
	}
	else {
	  $('#header').delay(5250).queue(function (next) { 
	   	$(this).css('opacity', '1'); 
	  	next(); 
	  });
	}
  
});