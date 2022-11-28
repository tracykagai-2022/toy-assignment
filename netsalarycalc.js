//import readline module
const readline = require("readline");

//create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter name
rl.question("What is your salary ?\n", function (string) {
    // use of parseInt or parseFloat to turn string to a number
    let userSalary = parseInt(string);

    // calculate the user gross salary using 'grossSalaryCalculator'
     let grossSalary = grossSalaryCalculator(userSalary);

    console.log(`Your gross salary is ${grossSalary}`);
// let userSalary = Number
    //close input stream
    rl.close();
});

function grossSalaryCalculator(salary){
    // calculator the gross salary
    let grossSalary = 0 // salary -tax -deduction+relief;
    return grossSalary
}