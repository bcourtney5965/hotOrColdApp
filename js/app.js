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
  	/*--- Declaring variables ---*/
  	var userGuess;
  	// To store user's guesses
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
		var randomNumber = Math.floor((Math.random() * 100) + 1);
		secretNumber = randomNumber;
		return randomNumber;
	}
	secretNumber = randomNumberGenerator();

	// #feedback div / hot or cold
	function feedback(guess) {
		var difference = Math.abs(secretNumber - guess);
		var highOrLow = "";
		var closerFarther = "";

		// #feedback div
		// too low/too high
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

		// #feedback div
		// getting hotter/colder relative to last guess
		function gettingHotterColder() {
			var prevGuess = guesses.length - 2;
			var currGuess = guesses.length - 1;
			var prevGuessDist = Math.abs(secretNumber - guesses[prevGuess]);
			var currGuessDist = Math.abs(secretNumber - guesses[currGuess]);
			if (currGuessDist < prevGuessDist) {
				closerFarther = " and getting hotter";
			}
			if (currGuessDist > prevGuessDist) {
				closerFarther = " and getting colder";
			}
		}

		if (guesses.length >= 2) {
			gettingHotterColder();
		}

		if (secretNumber === guess) {
		    $("#feedback").html("You guessed correctly! " + secretNumber + " is correct!");
		} else if (difference >= 50) {
		    $("#feedback").html("Your guess was " + tooLowOrHigh(guess) + "." + "  You are ice cold" + closerFarther + ".");
		} else if (difference >= 30 && difference < 50) {
		    $("#feedback").html("Your guess was " + tooLowOrHigh(guess) + "." + "  You are cold" + closerFarther + ".");
		} else if (difference >= 20 && difference < 30) {
		    $("#feedback").html("Your guess was " + tooLowOrHigh(guess) + "." + "  You are warm" + closerFarther + ".");
		} else if (difference >= 10 && difference < 20) {
		    $("#feedback").html("Your guess was " + tooLowOrHigh(guess) + "." + "  You are hot" + closerFarther + ".");
		} else {
		    $("#feedback").html("Your guess was " + tooLowOrHigh(guess) + "." + "  You are very hot" + closerFarther + ".");
		}
	}

	// append most recent userGuess to ul list
	function listAppender(lastestGuess) {
		$("#guessList").append("<li>" + lastestGuess + "</li>");
	}

	function newGame() {
		guesses = [];
		$("#feedback").html("Make your Guess!");
		$("#guessList").empty();
		$("#count").html(guesses.length);
		randomNumberGenerator();
	}

	$("form").on("submit",function(event){
		event.preventDefault();

		// Obtains value from text-field
		userGuess = +$("#userGuess").val();

		// check user guess
		while (!checkInput(userGuess)) {
			userGuess = +prompt("Please try again");
		}

		// Push userGuess to array
		pushToArray(userGuess);

		// Appends userGuess to html page
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