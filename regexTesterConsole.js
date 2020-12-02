let readlineSync = require("readline-sync");

let testInput = readlineSync.question("Test case: ")
let patternInput = readlineSync.question("Pattern to test: ")
let flags = readlineSync.question("RegEx flag(s): ")

checker(testInput, patternInput);

function checker(testInput, patternInput){

    console.log('change')

    let pattern = new RegExp(patternInput, flags);

    if (testInput.match(pattern)) {
        console.log(`${testInput} has the correct pattern!`);

    } else {
        console.log(`${testInput} has an incorrect pattern!`);

    };

    console.log(pattern);
}