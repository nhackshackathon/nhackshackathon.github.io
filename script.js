function scrollTo(selector){
	$([document.documentElement, document.body]).animate({
		scrollTop: $(selector).offset().top - 160
	}, 800);
}

$(function(){
	$('.scroll').click(function(evt){
		scrollTo($(this).data("href"));
	});
});