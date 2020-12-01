let readlineSync = require("readline-sync");

let testInput = readlineSync.question("Test case: ")
let patternInput = readlineSync.question("Pattern to test: ")

checker();

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

// body.addEventListener("change", checker(testInput, checkboxI, checkboxG, checkboxM, patternInput,colorBox));

// body.addEventListener("change", function (testInput, checkboxI, checkboxG, checkboxM, patternInput){
//     let testValue = testInput.value;
    
//     console.log('change')
//     let flag = "";

//     if (checkboxI.checked){
//         flag += "i";

//     };
//     if (checkboxG.checked) {
//         flag += "g";

//     };
//     if (checkboxM.checked) {
//         flag += "m";

//     };

//     let pattern = new RegExp(patternInput.value, flag);
    
//     if (testValue.match(pattern)) {
//         console.log(`${testValue} has the correct pattern!`);
//         colorBox.style.backgroundColor = "green";
//     } else {
//         console.log(`${testValue} has an incorrect pattern!`);
//         colorBox.style.backgroundColor = "red";
//     };

//     console.log(pattern);
// });