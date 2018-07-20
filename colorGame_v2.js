	//The colored squares
	var colors = [randomArr(), randomArr(), randomArr(), randomArr(), randomArr(), randomArr()];
	var allColor = document.querySelectorAll(".square"); 	//put array of all squares into allColor variable

	//Different color-indicators
	var correctColor;
	var pickedColor = 0;
	var winningColor = document.querySelector("h2");
	var losingColor = document.querySelector("h2");

	//Display tags
	var h2 = document.querySelector("h2");
	var correct = document.querySelector("#correct");
	var header2 = document.querySelector("h2 span");
	var h2display = document.querySelector(".h2display");
	var h1 = document.querySelector(".displayH1");
	var h2span = document.querySelector(".h2span");



	//Check if the chosen color == the right color
	for(var i=0; i < allColor.length; i++){
		//Give each square (allColor[i]) the random color from the randomArr func in colors[i]
		allColor[i].style.backgroundColor = colors[i];
		//The correct color is one of the elements in the color array - Random number between 0 and 5
		correctColor = colors[Math.floor(Math.random()*6)];
		//Display correct color
		correct.textContent = correctColor;

		//When correct: turn color of allColor[i] to background color
		allColor[i].addEventListener("click", function(){
			//Set backgroundcolor of pickedColor to the clicked square
			pickedColor = this.style.backgroundColor;



				//IF picked and correct are the same: turn body color to square color
				if(pickedColor == correctColor){
					//Display the correct color in the header
				 	winningColor.textContent = this.style.backgroundColor + " You Are Correct!";
					//Turn all colors to the correct color with a function
				 	changeColor(correctColor);
					//Make the background color in the header the same as correctColor
				 	h1.style.backgroundColor = correctColor;

				//If pickedColor is not the same as correctColor
			 	}
				else{
					//Promt the user to try again and set the background to gray color
			 		losingColor.textContent = "That is the Color " + this.style.backgroundColor + " Try Again";
			 		this.style.backgroundColor = "rgb(35, 35, 35)";
			  }

					//Event for resetting the game with a button
			  	retryButton.addEventListener("click", function(){
						//Resets the colors array to new random numbers by calling the function inside the array
			  		colors = [randomArr(), randomArr(), randomArr(), randomArr(), randomArr(), randomArr()];
						//Call changeColorBack function - resets the squares to new random colors
					 	changeColorBack(colors);
					 	winningColor.textContent = this.style.backgroundColor;  //Display winning color
					 	h1.style.backgroundColor = "#ccd4e2";					//Reset background
					 	losingColor.style.color = "#414a5b";				//Make text turn to blue
					});

					losingColor.style.color = "white";						//Make text turn back to white
		});
	//End of main-program loop
	}

	//Function: that change all colors into one color - takes the argument of the correct color and sets all squares to that color
	function changeColor(oneColor){
		for(i = 0; i < allColor.length; i++){
			//For each square set it's color to the correct color
			allColor[i].style.backgroundColor = oneColor;
		}
	}

	//Function: change the squares to new random color - takes in the colors array as argument (here referred to as newRandomColors) with the random number functions
	function changeColorBack(newRandomColors){
		for(i = 0; i < allColor.length; i++){
			//Set each square to the new random color
			allColor[i].style.backgroundColor = newRandomColors[i];
			//Re-set the correctColor to a new part of the colors array
			correctColor = newRandomColors[Math.floor(Math.random()*6)];
			//Update the correct color on display
			correct.textContent = correctColor;
		}
	}
	// //Initialize global variable
	// var arr = [];
	//Function: create random number for r, g and b - pass numbers as strings into colorString wich functions as a rgb color string
	function randomRgb() {
		//Red
		var r =  Math.floor(Math.random() * 256);
		//Green
		var g =  Math.floor(Math.random() * 256);
		//Blue
		var b =  Math.floor(Math.random() * 256);
		//Functioning rgb string
		var colorString = "rgb(" + r + ", " + g + ", " + b + ")";
		//Return the rgb string
		return colorString;
	}

	//Function: appends the colorString-string to each element of the arr-array
	function randomArr(){
		for(var i = 0; i < 6; i++){
			var arr = [];
			//Appen colorString with the format of "rgb(r, g, b)", where r,g,b are random rumbers
			arr.push(randomRgb());
		}
		//Array of six strings
		return arr;
	}
