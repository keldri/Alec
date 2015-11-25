$( document ).ready(function() {
	//if window resizes
	$(window).resize(function() {
 	//check to see if window is greater than or less than 772px
		  if($(window).width() > 772){
	//if window is greater than 772, hide register button, show form,append .bottom div	to intro	
				$("#clicked").hide();
				$(".input").show();
				$('.bottom').appendTo('.intro'); 
				$(".hiring p span").show();
				//$(".hiring p span").text('Interested in being part of the team?').after("<br />");
	//else if window is less than 772, append .bottom div to wrapper, return above to original state
		   }else{
				$('.bottom').appendTo('.wrapper'); 
				$("#clicked").show();
				$(".input").hide();
				$(".hiring p span").hide();
				$(".hiring p span").empty();
		   }
   });
	
	//toggle show/hide of input form on click
	$("#clicked").click(function(){
		$(".input").toggle()
	});

});//document.ready*/

//$.("hiring p span").text("Interested in being part of the team? ");