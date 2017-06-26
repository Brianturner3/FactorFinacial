$(document).ready(function(){
	$('.slick-next').click(function(){
		$("#holder").animate({
			"borderTopColor" : "red"
		},250 );
		$("#holder").animate({
			"borderRightColor" : "red"
		},250 );
		$("#holder").animate({
			"borderBottomColor" : "red"
		},250 );
		$("#holder").animate({
			"borderLeftColor" : "red"
		},250 );
	})
});