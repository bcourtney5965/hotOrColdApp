$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- The start of my code ---*/
    //-------------------------------------------
  	/*--- Declaring var's & cloning some initial info for later re-setting ---*/
  	var userGuess;
  	var feedbackClone = $("#feedback").clone();
	var countClone = $("#count").clone();

	// Filter User Input Types
	function checkInputType(userinput) {
		var boolTest = userinput;
		var convertedNumber = +userinput;
		var checkNaN = isNaN(convertedNumber);
		if(checkNaN || typeof boolTest === "boolean") {
			alert("That is not a number");
		}
		if(convertedNumber >= 101 || convertedNumber <= 0) {
			alert("Please enter a number between 1- 100");
		}
	}

	$("form").on("submit",function(event){
		event.preventDefault();
		userGuess = $("#userGuess").val();
		checkInputType(userGuess);
		if (userinput(userGuess) === userGuess) {
			alert("goodtimes!");
		}
	});

	/*
	// An array to store user's guesses
	var guesses = [];

	// Function gets random number between 1 - 100
	// And saved is to a variable
	var secretNumber = (function() {
		return Math.floor((Math.random() * 100) + 1);
	}());

	// Append user guess to website

	// Push to guesses array
	guesses.push($("#userGuess").val());

	// Determine if Hot/Cold

	// Determine if getting Hott(er)/Cold(er)

	*/

});

/* --- Program's orger/logic --- */
// Screen User Input Types
// Append user guess
// Push to guesses array


/* --- Button Functionality Requirements --- */
// Guess Button
//     - Hot/Cold feedback
//     - Clear field
// 	   - Append Guesses
// $("#guessButton").click(function(event){
// 			event.preventDefault();
// + New Game Button
//     reset:
//     - Hot/Cold feedback
//     - Clear field
// 	   - Appended Guesses

// Requirements















// When the user guesses the secret number, the app lets them know, 
// and they’ll have the option to start a new game