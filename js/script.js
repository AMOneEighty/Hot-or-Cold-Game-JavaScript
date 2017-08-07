// Produce a random number
var answer= (Math.floor(Math.random() * 100) +1 );

//counter for guesses
var i = 0;

// Check number from user input
$('#enter').click(function(){
 var guess = $ ('#field').val();
 var diff = Math.abs(guess-answer);
 // If text is empty or is not a number

 if(isNaN(guess)) {
 	$('#display').text("Please enter a number between 1 and 100");
}

//if number is or below 0 or over 100

else if (guess > 1 || guess < 100) {
	$('#display').("it is between 1 and 100")\

	/* if user guess the number correclty disabler "Enter" and the 
	"get answer" buttons */
	else if(diff == 0) {
   $('#count').text(++i);
   $('#enter').prop('disable', true);
   $('#getAnswer').prop('disable',true);
   $('#display').text("You got it!");

   // all ranges of guess and hints

   else if (diff <2) {
   	$('#counter').text(++i);
   	$('#display').text("Burn it up!")
   }
	}
	else if (diff <20) {
		$('#counter').text(++i);
		$('#display').text("Almost Warm");
	}
}
else if (diff < 40) {
	$(#'counter').text(++i);
	$('#display').text("it's freezing in here!")
}
else if (diff)
});

//Restarts the game and enables "Enter" and "get answer" buttons

$('#restart').click(function(){
	$('#enter').prop('disable', false);
	$('#getAnswer').prop('disable', false);
	$('#field').val(" ");
     location.reload();
});

//SHow correct answer

$('#getAnswer').click(function(){
	($'#count').text("THe answer is " + answer);
});

//