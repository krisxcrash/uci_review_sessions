$(".nav li").on("click", function() {
	
	var color = $(this).attr("data-type");

	$('.objects li').hide();

	if(!color) {
		$('.objects li').hide().fadeIn(625);
	}
	else {
		$('li[data-type="' + color + '"]').fadeIn(625);
	}

	$('.active').removeClass('active');
	$(this).addClass('active');
})