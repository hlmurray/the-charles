// Hannah Murray ; The Charles

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    slideshow: true
  });
});

$(function() {
    $( "#datepicker" ).datepicker();
  });

$(document).scroll(function(event){
	if ($(this).scrollTop() > 1) {
		$(".header-logo").css('display', 'none');
		$(".header-nav").css('display', 'none');
		$(".masthead--sticky").css({
			'display': 'block',
			'z-index': '99999999',
			'top':'0'
		});
		$(".masthead").addClass("sticky");
	}
	else {
		$(".masthead").removeClass("sticky");
		$(".masthead--sticky").css('display', 'none');
		$(".header-logo").css('display', 'inline-block');
		$(".header-nav").css('display', 'block');
	}
});