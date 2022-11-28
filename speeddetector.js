//import readline module
const readline = require("readline");

//create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter speed
rl.question("What is your speed ?\n", function (string) {
    // use of parseInt or parseFloat to turn string to a number
    let userSpeed = parseInt(string);

    // calculate the user speed using 'speed detector'
     let speed = speedcalculate(speeddetector);

    console.log(`Your speed is ${speeddetector}`);
// let speed = Number
    //close input stream
    rl.close();
});

function speeddetector(speed){
    // calculate speed
    let speed = 0 // For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.;
    return speed
}