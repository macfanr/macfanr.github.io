// Themeswitcher for Themeforest

imgPathStart = "images/backgrounds/";
imgPathEnd = new Array("bg_1.png","bg_2.png","bg_3.png","bg_4.png","bg_5.png","bg_6.png","bg_7.png","bg_8.png","bg_9.png");

$(".selector li img").click(function() {
	// Save BackgroundNr
	backgroundNumber = $(this).attr("data-nr");
	// change background settings
	$("body").css({background:"url('"+imgPathStart+imgPathEnd[backgroundNumber]+"')"});
});