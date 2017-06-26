
$(document).ready(function () {

	/*
	Simple toggle for brand selection. 
	*/
	$("#select-Hyusong").click(function(){
		$("#brand1-selection").fadeToggle("slow","linear");
		$("#brand2-selection").css("display","none");
	})

	$("#select-Triton").click(function(){
		console.log("Hey");
		$("#brand2-selection").fadeToggle("slow","linear");
		$("#brand1-selection").css("display","none");	
	})
	/*
	Simple toggle using. Ensures that only one 'overlay' is visible at one instance
	*/
	//First Image
	$("#img-1").click(function () {
		$("#overlay-1").fadeToggle( "slow", "linear" );
		$("#overlay-2").css("display","none");
		$("#overlay-3").css("display","none");
		$("#overlay-4").css("display","none");
	});
	$("#overlay-1").click(function () {
		$("#overlay-1").fadeToggle( "slow", "linear" );
		$("#overlay-2").css("display","none");
		$("#overlay-3").css("display","none");
		$("#overlay-4").css("display","none");
	});
  //Second Image
  $("#img-2").click(function () {
  	$("#overlay-2").fadeToggle( "slow", "linear" );
  	$("#overlay-1").css("display","none");
  	$("#overlay-3").css("display","none");
  	$("#overlay-4").css("display","none");
  });
  $("#overlay-2").click(function () {
  	$("#overlay-2").fadeToggle( "slow", "linear" );
  	$("#overlay-1").css("display","none");
  	$("#overlay-3").css("display","none");
  	$("#overlay-4").css("display","none");
  });
  //Third Image
  $("#img-3").click(function () {
  	$("#overlay-3").fadeToggle( "slow", "linear" );
  	$("#overlay-1").css("display","none");
  	$("#overlay-2").css("display","none");
  	$("#overlay-4").css("display","none");
  });
  $("#overlay-3").click(function () {
  	$("#overlay-3").fadeToggle( "slow", "linear" );
  	$("#overlay-1").css("display","none");
  	$("#overlay-2").css("display","none");
  	$("#overlay-4").css("display","none");
  });
  //Fourth Image
  $("#img-4").click(function () {
  	$("#overlay-4").fadeToggle( "slow", "linear" );
  	$("#overlay-1").css("display","none");
  	$("#overlay-3").css("display","none");
  	$("#overlay-2").css("display","none");
  });
  $("#overlay-4").click(function () {
  	$("#overlay-4").fadeToggle( "slow", "linear" );
  	$("#overlay-1").css("display","none");
  	$("#overlay-3").css("display","none");
  	$("#overlay-2").css("display","none");
  });

  	//Fifth Image
  	$("#img-5").click(function () {
  		$("#overlay-5").fadeToggle( "slow", "linear" );
  		$("#overlay-6").css("display","none");
  		$("#overlay-7").css("display","none");
  		$("#overlay-8").css("display","none");
  	});
  	$("#overlay-5").click(function () {
  		$("#overlay-5").fadeToggle( "slow", "linear" );
  		$("#overlay-6").css("display","none");
  		$("#overlay-7").css("display","none");
  		$("#overlay-8").css("display","none");
  	});
    //Fifth Image
    $("#img-6").click(function () {
    	$("#overlay-6").fadeToggle( "slow", "linear" );
    	$("#overlay-5").css("display","none");
    	$("#overlay-7").css("display","none");
    	$("#overlay-8").css("display","none");
    });
    $("#overlay-6").click(function () {
    	$("#overlay-6").fadeToggle( "slow", "linear" );
    	$("#overlay-5").css("display","none");
    	$("#overlay-7").css("display","none");
    	$("#overlay-8").css("display","none");
    });
      //Seventh Image
      $("#img-7").click(function () {
      	$("#overlay-7").fadeToggle( "slow", "linear" );
      	$("#overlay-6").css("display","none");
      	$("#overlay-5").css("display","none");
      	$("#overlay-8").css("display","none");
      });
      $("#overlay-7").click(function () {
      	$("#overlay-7").fadeToggle( "slow", "linear" );
      	$("#overlay-6").css("display","none");
      	$("#overlay-5").css("display","none");
      	$("#overlay-8").css("display","none");
      });
      	//Eigth Image
      	$("#img-8").click(function () {
      		$("#overlay-8").fadeToggle( "slow", "linear" );
      		$("#overlay-6").css("display","none");
      		$("#overlay-7").css("display","none");
      		$("#overlay-5").css("display","none");
      	});
      	$("#overlay-8").click(function () {
      		$("#overlay-8").fadeToggle( "slow", "linear" );
      		$("#overlay-6").css("display","none");
      		$("#overlay-7").css("display","none");
      		$("#overlay-5").css("display","none");
      	});
    });