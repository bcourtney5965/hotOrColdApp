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
  	// An array to store user's guesses
	var guesses = [];
	var secretNumber;

	// Filter User Input Types
	function checkInput(userInput) {
		var inputType, newNum;
		// Filter User Input Types
		inputType = (function (userInput) {
			if (userInput !== undefined && userInput <= 100 && userInput >= 1) {
				return true
			}
			return false;		
		}(userInput));

		// Verify it wasn't already guessed
		newNum = (function (userInput) {
			if (guesses.indexOf(userInput) === -1) {
				return true;
			} else {
				return false;
			}
		}(userInput));

		return (inputType && newNum);
	}

	// Pushes user's guess to array 
	function pushToArray(guess) {
		guesses.push(guess);
	}

	// Function to get randomly generated secret number
	function randomNumberGenerator() {
		return Math.floor((Math.random() * 100) + 1);
	}
	secretNumber = randomNumberGenerator();

	// #feedback div / hot or cold
	function feedback(guess) {
		var difference = Math.abs(secretNumber - guess);
		var highOrLow = "";
		// #feedback div / too low/too high
		if (secretNumber !== guess) {
			function tooLowOrHigh(guess) {
				var output = "";
				if (guess > secretNumber) {
					output = "too high";
				}
				if (guess < secretNumber) {
					output = "too low";
				}
				return output;
			}
			highOrLow = tooLowOrHigh(guess);
		}

		if (secretNumber === guess) {
			alert("new game?")
		    $("#feedback").html("You guessed correctly! " + secretNumber + " is correct!");
		} else if (difference >= 50) {
		    $("#feedback").html("You are " + highOrLow + " and ice cold");
		} else if (difference >= 30 && difference < 50) {
		    $("#feedback").html("You are " + highOrLow + " and cold");
		} else if (difference >= 20 && difference < 30) {
		    $("#feedback").html("You are " + highOrLow + " and warm");
		} else if (difference >= 10 && difference < 20) {
		    $("#feedback").html("You are " + highOrLow + " and hot");
		} else {
		    $("#feedback").html("You are " + highOrLow + " and very hot");
		}
	}

	// append to guess list
	function listAppender(lastestGuess) {
		$("#guessList").append("<li>" + lastestGuess + "</li>");
	}

	function newGame() {
		guesses = [];
		$("#feedback").html("Make your Guess!");
		$("#guessList").empty();
		$("#count").html(guesses.length);
	}

	$("form").on("submit",function(event){
		event.preventDefault();

		// Obtains value from text-field
		userGuess = +$("#userGuess").val();

		// check user guess
		while (!checkInput(userGuess)) {
			userGuess = +prompt("Please try again");
		}

		// // Ensures proper input
		// while (!(checkInputType(userGuess))) {
		// 	userGuess = +prompt("Please provide a whole integer from 1 -100");
		// }

		// // Prevents someone making the same guess twice
		// while (alreadyGuessed(userGuess)) {
		// 	userGuess = +prompt("Number already guessed, try again");
		// }

		// Pushes guesses to array
		pushToArray(userGuess);

		// Appends guess to html page
		listAppender(userGuess);

		// #feedback provides feedback
		feedback(userGuess);

		// #count - Number of guesses that have been made
		$("#count").html(guesses.length);

		// clears form-field after each submission
		$("form")[0].reset();
	});

	$("a.new").click(function() {
		newGame();
	});

	

});
// enter a number

// secret number

// display hot/cold
// display GETTING hotter/colder

// push guess to array
// append to guess webpage
// alter number of guesses

// clears form-field after each submission











































/* --- Program's orger/logic --- */

// prevent submitting ""
// prevent guessing the same number twice
// Utilize more rigorous logic for screening user input

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


