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
	// An array to store user's guesses
	var guesses = [];

	// Filter User Input Types
	function checkInputType(userinput) {
		var boolTest = userinput;
		var convertedNumber = +userinput;
		var checkNaN = isNaN(convertedNumber);
		// This "catches" strings & booleans
		if(checkNaN || typeof boolTest === "boolean") {
			alert("That is not a number");
		}
		// This "catches" wrong sized numbers
		if(convertedNumber >= 101 || convertedNumber <= 0) {
			alert("Please enter a number between 1- 100");
		}
		// clears form-field after each submission
		$("form")[0].reset();
	}

	// Pushes user's guess to array 
	function pushToArray(guess) {
		guesses.push(guess);
	}

	// append to guess list
	// function listAppender(lastestGuess) {
	// 	alert("47");
	// 	$("ul #guessList").append("<li>" + lastestGuess + "</li>"):
	// }

	$("form").on("submit",function(event){
		event.preventDefault();
		// Obtains value from text-field
		userGuess = $("#userGuess").val();
		// Screens for data type
		checkInputType(userGuess);
		// Pushes guesses to array
		pushToArray(userGuess);
		alert("58");
		// Appends guess to html page
		// listAppender(userGuess);
	});

	$("a.new").click(function(){
		alert(guesses);
	});

	/*

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
// prevent larger numbers appending to "guesses" arrray


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