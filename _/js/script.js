$( document ).ready(function() {
	//if window resizes
	$(window).resize(function() {
 	//check to see if window is greater than or less than 772px
		  if($(window).width() > 772){
	//if window is greater than 772, append .bottom div	to intro 	
				$('.bottom').appendTo('.intro'); 
	//else if window is less than 772, append .bottom div to wrapper 	
		   }else{
				$('.bottom').appendTo('.wrapper'); 
				
		   }
   });
	$(".input").hide();
	$("#clicked").click(function(){
		$(".input").toggle()
	});

});//document.ready*/
