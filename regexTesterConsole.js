let readlineSync = require("readline-sync");

let testInput = readlineSync.question("Test case: ")
let patternInput = readlineSync.question("Pattern to test: ")

checker(testInput, patternInput);

function checker(testInput, patternInput){

    let testValue = testInput.value;
    
    console.log('change')
    let flag = "";

    if (checkboxI.checked){
        flag += "i";

    };
    if (checkboxG.checked) {
        flag += "g";

    };
    if (checkboxM.checked) {
        flag += "m";

    };

    let pattern = new RegExp(patternInput.value, flag);
    
    if (testValue.match(pattern)) {
        console.log(`${testValue} has the correct pattern!`);

    } else {
        console.log(`${testValue} has an incorrect pattern!`);

    };

    console.log(pattern);
}