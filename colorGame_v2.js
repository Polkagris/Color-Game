
var colors = [randomArr(), randomArr(), randomArr(), randomArr(), randomArr(), randomArr()];
var allColor = document.querySelectorAll(".square"); 	//put array of all squares into allColor variable
var oneS = document.querySelector(".oneS"); 
var correctColor;										//One correct color generated each game
var pickedColor = 0;									//initialize to zero
var winningColor = document.querySelector("h2");
var losingColor = document.querySelector("h2"); 
var h2 = document.querySelector("h2");
var correct = document.querySelector("#correct");
var header2 = document.querySelector("h2 span");
var h2display = document.querySelector(".h2display");
var h1 = document.querySelector(".displayH1");
var h2span = document.querySelector(".h2span");



for(var i=0; i < allColor.length; i++){							//loop squares
		allColor[i].style.backgroundColor = colors[i];			//give each square (allColor[i]) the color of colors[i]
		correctColor = colors[Math.floor(Math.random()*6)];		//Random number between 0 and 5
		correct.textContent = correctColor;						//display correct color

			 		
		allColor[i].addEventListener("click", function(){		//when correct: turn color of allColor[i] to background color
			pickedColor = this.style.backgroundColor;			//THIS is the element that is clicked.


				if(pickedColor == correctColor){				//IF picked and correct are the same: turn body color to square color
				 	winningColor.textContent = this.style.backgroundColor + " You Are Correct!"; //Display color in the header
				 	changeColor(correctColor);					//turn all colors to correctColor
				 	h1.style.backgroundColor = correctColor;
				 	

			 	}else{
			 		losingColor.textContent = "That is the Color " + this.style.backgroundColor + " Try Again"; //display losing color
			 		this.style.backgroundColor = "rgb(35, 35, 35)";		//Turn clicked color to background color gray
			  	}

			  	retryButton.addEventListener("click", function(){			//click event for reset button
			  		colors = [randomArr(), randomArr(), randomArr(), randomArr(), randomArr(), randomArr()]; //Reset random colors
				 	changeColorBack(colors);								//call changeColorBack function
				 	winningColor.textContent = this.style.backgroundColor;  //Display winning color
				 	h1.style.backgroundColor = "#ccd4e2";					//Reset background
				 	losingColor.style.color = "#414a5b";				//Make text turn to blue

				});
			losingColor.style.color = "white";						//Make text turn back to white
		});
}

function changeColor(colors){										//change all colors into one color
	for(i = 0; i < allColor.length; i++){
		allColor[i].style.backgroundColor = colors;
	}
}

function changeColorBack(colors){									//change all colors back
	for(i = 0; i < allColor.length; i++){
		allColor[i].style.backgroundColor = colors[i];
		correctColor = colors[Math.floor(Math.random()*6)];			//changes the correct color to be random again
		correct.textContent = correctColor;							//update correct color on display

		
	}
}
var arr = [];
//create random number for r, g and b
function randomRgb() {												//random color function (0-255)
	var r =  Math.floor(Math.random() * 256);						//red
	var g =  Math.floor(Math.random() * 256);						//green
	var b =  Math.floor(Math.random() * 256);						//blue
	var colorString = "rgb(" + r + ", " + g + ", " + b + ")";
	return colorString;
}

function randomArr(){					//Array of random colors
	for(var i = 0; i < 6; i++){
		var arr = [];
		arr.push(randomRgb());			//push string with rgb(x, y, z) into array of 6 places
	}
	return arr;							//function returns the array when called
}
