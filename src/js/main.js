
if ($(window).width() < 768) {
  $('#header').css('opacity', '1'); 
}
else {

	$(document).ready(function() {
	  $('#header').delay(5250).queue(function (next) { 
	   	$(this).css('opacity', '1'); 
	  	next(); 
	  });
	});

}

