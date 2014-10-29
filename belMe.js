
	

var pos = false

// ALS JE KLIKT OP LABEL (belInUit)
$("#belMeInUit").click(function(e) {
	e.preventDefault();
	if(pos){ // AlS MENU AL UIT IS GA 100PX NAAR LINKS
		pos = false;

		$("#belMe,#belMeInUit").animate({
			left: "-=100px"
		  }, 1200, "easeInOutCubic", function() {
		  	//$("#belMe").hide();
		  	
		  });				
	} 
	else { // ALS MENU NOG NIET UIT IS GA 100PX NAAR RECHTS
		pos = true;
		//$("#belMe").show(); 
		$("#belMe,#belMeInUit").animate({
			left: "+=100px"
		  }, 1200, "easeInOutCubic");
		
	}

		 });