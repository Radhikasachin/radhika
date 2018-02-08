
 /*nav scrollTop function*/

$(document).on('click',function() { //click function

	$('#project').on('click',function(){ //scrollTop for post-one nav ID
		$('html,body').animate({         //call animatemation function
			scrollTop: $('#postOne').offset().top //select section ID 
		}) 
	}) 


$('#agile').on('click',function(){ // scrollTop for post-two
		$('html,body').animate({  
			scrollTop: $('#postTwo').offset().top
		})
	})

$('#lean').on('click',function(){ // scrollTop for post-three
		$('html,body').animate({
			scrollTop: $('#postThree').offset().top
		})
	})


});//end

/*ScrollTop End*/


//  hide and show effect for section
(function ($){ 
  
  $(document).ready(function(){ //call function
  $('#project').click(function(){ // apply click function
    console.log('Hello I am working well'); // it work
    $('#postOne').hide().show(1000); // hide and show and mention time as well
   }); // for click fun

  $('#agile').click(function(){ // call click function
    console.log('Hello I am working well'); //it work
    $('#postTwo').hide().show(1000); // hide and show and mention time as well
   }); // for click fun

  $('#lean').click(function(){ // call click function
    console.log('Hello I am working well'); //it work
    $('#postThree').hide().show(1000); //hide and show and mention time as well
   }); // for click fun

  }); // for document
})(jQuery) // end








