
// "playerChoice" perameter inside function to pass down value of playerChoice to rest of function.I got this information online somewhere but source is unknown
function playGame(playerChoice) {   
    // Define an array of choices
    var choices = ['rock', 'paper', 'scissors']; 
  
    // Generate a random index to select a choice from the array
    var randomIndex = Math.floor(Math.random() * 3);
  
    // Use the random index to get the computer's choice from the array. Syntax for choices[randomIndex] was found online as well. 
    var computerChoice = choices[randomIndex];
  
    // Check if the player's choice is the same as the computer's choice, indicating a tie
    if (playerChoice == computerChoice) {
      // Display a tie message in the HTML element
      document.getElementById("result").innerHTML = "It's a tie!";
    }
    // Check for win conditions: player beats computer
    else if (
      (playerChoice == 'rock' && computerChoice == 'scissors') ||
      (playerChoice == 'paper' && computerChoice == 'rock') ||
      (playerChoice == 'scissors' && computerChoice == 'paper')
    ) {
      // Display a win message in the HTML element
      document.getElementById("result").innerHTML = 'You win!';
    }
    // If neither tie nor win conditions are met, it's a loss: computer beats player
    else {
      // Display a loss message in the HTML element
      document.getElementById("result").innerHTML = 'You lose!';
    }
    document.getElementById("playerChoice").innerHTML = "Player Choice = " + playerChoice;
    document.getElementById("computerChoice").innerHTML = "Computer Choice = " + computerChoice;
  }
  
  
  
  
