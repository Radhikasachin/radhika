
/*we can change nav bar color and fontsize*/

var header = document.getElementById("project"); // By ID
	header.style.color="white";   //style color
	header.style.fontsize="30px"; // style fontsize

var header = document.getElementById("agile"); // By ID
	header.style.color="white";   //style color
	header.style.fontsize="30px"; //style fount size

var header = document.getElementById("lean"); // By ID
	header.style.color="white";   //style color
	header.style.fontsize="30px";	//style fontsize

	//end style 

//nav 
//mouseover function and change color on hover for nav bar

$('#project').mouseover(function(event) { // mouseOver event on navigation
  $('#project').css({background:"rgba(255,255,255, 0.6)"}); // reset all buttons' color rgba(255,255,255, 0.6) default 
});

$('#agile').mouseover(function(event) { // mouseOver event on navigation
$('#agile').css({background:"rgba(255,255,255, 0.6)"}); // reset all buttons' color rgba(255,255,255, 0.6) default 
});

$('#lean').mouseover(function(event) { // mouseOver event on navigation
   $('#lean').css({background:"rgba(255,255,255, 0.6)"}); // reset all buttons' color rgba(255,255,255, 0.6) default 
});

// mouseout function for nav bar
$('#project').mouseout(function(event) { // mouseOut event on navigation
  $('#project').css({background:"#111"}); // reset all buttons' color default 
});

$('#agile').mouseout(function(event) { // mouseOut event on navigation
$('#agile').css({background:"#111"}); // reset all buttons' color default 
});

$('#lean').mouseout(function(event) { // mouseOut event on navigation
   $('#lean').css({background:"#111"}); // reset all buttons' color default 
});

//nav end


//section 
//mouseout function and mouseover function for section tag
$(document).ready(function(){  //call function
    $("section").mouseover(function(){ // select mouseover function
        $("section").css("background-color", "#e6fff7");// style it
    });//end mouseover
    $("section").mouseout(function(){ //select mouseout function
        $("section").css("background-color", "lightgray");//style it.
    }); //end mouseout 
});// end function

 //end section


//loop In jquery for p tag sets their color property.

$( document.body ).click(function() { //click function
  $( "p" ).each(function( i ) { 
    if ( this.style.color !== "black" ) { //if statment 
      this.style.color = "black"; 
    } 
    else {                           //Else
      this.style.color = "#00134d"; 
    }
  }); 
});

//End loop
