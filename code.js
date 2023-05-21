// Shyon Seyed-Emami, CSC102 Assignment 2.1
// General game rules modeled from CSC102 class session 5/15/23 
function restart() 
    // Generates two random numbers beween 1 and 10
{   
    var number1  = Math.ceil(Math.random() *10);
    var number2  = Math.ceil(Math.random() *10);
    // Calculates the sum of two random numbers
    var sum = number1 + number2;
    // Checks if number1 is even and equal to number2
    if (number1 % 2 == 0  && number1 == number2)
    {
        // Displays game result for WIN if the above (if) statement is true
        document.getElementById("result").innerHTML = "Even and Equal: YOU WIN"
    }
    // Checks if number2 is 6 or the sum of both numbers is 6
    else if (number2 == 6 || sum == 6)
    {
        // Displays game result for WIN if the above (else if) statement is true
        document.getElementById("result").innerHTML = "number2 = 6 or sum = 6: YOU WIN"
    }
    else
    {
        // Displays game result for LOSS if the (if/else if) statements above are false
        document.getElementById("result").innerHTML = "Conditions for win not met: YOU LOSE"
    }
    // Displays the value of number1
    document.getElementById("number1").innerHTML = "number1 = " + number1;
    // Displays the value of number2
    document.getElementById("number2").innerHTML = "number2 = " + number2;
}
