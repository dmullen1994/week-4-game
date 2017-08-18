
$( document ).ready(function() {
	var targetNumber = Math.floor(Math.random()*101) + 19;
	var counter = 0;
	var wins = 0;
	var losses = 0;


	 $("#number-to-guess").text(targetNumber); 	

	for (var i = 0; i <4; i++) {
		console.log("crystal")
		var imageCrystal = $("<img>");
		imageCrystal.addClass("crystal-image");
		imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
		imageCrystal.attr("data-crystalvalue", Math.floor(Math.random()*12) + 1);
		$("#crystals").append(imageCrystal);
		console.log(imageCrystal);
	}

	function myReset() {
		targetNumber = Math.floor(Math.random()*101) + 19;
		counter = 0;

		$("#number-to-guess").text(targetNumber); 
		$("#myScore").text("score: ");	
		$("#myGame").empty();
		$('.crystal-image').each(function() {
        var value = Math.floor(Math.random() * 12) + 1;
          $(this).attr('data-crystalvalue',value);
     	});
	}

	$(".crystal-image").click(function() {
		console.log("click");
		var crystalValue = parseInt($(this).attr("data-crystalvalue"));
		// crystalValule = parseInt(crystalValue);
		console.log(crystalValue);
		counter += crystalValue;
		console.log(counter);
		$("#myScore").text("score: " + counter);
		if (counter === targetNumber) {
			$("#myScore").text("score: " + counter);
			$("#myGame").text("You won click here to play again.")
			wins += 1;
			$("#myWins").text("Wins: " + wins);
		}
		else if (counter > targetNumber) {
			$("#myScore").text("score: " + counter);
			$("#myGame").text("You lost click here to play again.")
			losses += 1;
			$("#myLoss").text("Losses: " + losses);
		}
		
	})

	$("#myGame").click(function() {
		myReset();
	})

	

});