//import readline module
const readline = require("readline");

//create interface for input and output
const rl = readline.createInterface(
    {
    input: process.stdin,
    output:process.stdout,
    }
);
input.question("Enter students marks: ", function (mark){
    let marks = parseInt(mark, 10);
     if (isNaN(marks)){
        process.stdout.write("please Enter a valid number\n")
        process.exit(1)
     }else if{
        if (marks > 79) {
            process.stdout.write("A\n");
        } else if (marks > 60) {
            process.stdout.write("B\n");
        } else if(marks > 49) {
            process.stdout.write("C\n");
        } else if(marks > 40) {
            process.stdout.write("E\n");
        }
     }
     input.close();
     });
    