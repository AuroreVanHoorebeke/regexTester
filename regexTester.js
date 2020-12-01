//-----------Create divs-----------------//
const body = document.querySelector("body");

const tester = document.createElement("div");
tester.className = "tester";
body.appendChild(tester);

const inputsDiv = document.createElement("div");
inputsDiv.className = "inputs";
tester.appendChild(inputsDiv);

const fieldsDiv = document.createElement("div");
fieldsDiv.className = "fields";
inputsDiv.appendChild(fieldsDiv);

const checkboxesDiv = document.createElement("div");
checkboxesDiv.className = "checkboxes";
inputsDiv.appendChild(checkboxesDiv);

//*-*-Test case-*-*//
const testDiv = document.createElement("div");
testDiv.className = "testDiv";
fieldsDiv.appendChild(testDiv);

const testInput = document.createElement("input");
testInput.type = "text";
testInput.placeholder = "Case to test";
testInput.innerHTML = "";
testDiv.appendChild(testInput);

//*-*-Pattern to verify-*-*//
const patternDiv = document.createElement("div");
patternDiv.className = "patternDiv";
fieldsDiv.appendChild(patternDiv);

let patternInput = document.createElement("input");
patternInput.type = "text";
patternInput.placeholder = "Regex pattern";
patternInput.innerHTML = "";
patternDiv.appendChild(patternInput);

//*-*-Checkbox I-*-*//
const checkboxIDiv = document.createElement("div");
checkboxIDiv.className = "checkboxIDiv";
checkboxesDiv.appendChild(checkboxIDiv);

const checkboxI = document.createElement("input");
checkboxI.type = "checkbox";
checkboxI.className = "checkboxI";
checkboxI.id = "checkboxI";
checkboxI.name = "insensitive";
checkboxIDiv.appendChild(checkboxI);

const labelCheckboxI = document.createElement("label");
labelCheckboxI.for = "checkboxI";
labelCheckboxI.innerHTML = "case insensitive";
checkboxIDiv.appendChild(labelCheckboxI);

//*-*-Checkbox G-*-*//
const checkboxGDiv = document.createElement("div");
checkboxGDiv.className = "checkboxGDiv";
checkboxesDiv.appendChild(checkboxGDiv);

const checkboxG = document.createElement("input");
checkboxG.type = "checkbox";
checkboxG.className = "checkboxG";
checkboxG.id = "checkboxG";
checkboxG.name = "global";
checkboxGDiv.appendChild(checkboxG);

const labelCheckboxG = document.createElement("label");
labelCheckboxG.for = "checkboxG";
labelCheckboxG.innerHTML = "global";
checkboxGDiv.appendChild(labelCheckboxG);

//*-*-Checkbox m-*-*//
const checkboxMDiv = document.createElement("div");
checkboxMDiv.className = "checkboxIDiv";
checkboxesDiv.appendChild(checkboxMDiv);

const checkboxM = document.createElement("input");
checkboxM.type = "checkbox";
checkboxM.className = "checkboxM";
checkboxM.id = "checkboxM";
checkboxM.name = "multiline";
checkboxMDiv.appendChild(checkboxM);

const labelCheckboxM = document.createElement("label");
labelCheckboxM.for = "checkboxM";
labelCheckboxM.innerHTML = "multiline";
checkboxMDiv.appendChild(labelCheckboxM);

//*-*-Color box-*-*//
const colorBox = document.createElement("div");
colorBox.className = "colorBox";
colorBox.style.width = "100px";
colorBox.style.height = "100px";
colorBox.style.border = "1px solid black";
tester.appendChild(colorBox);


//----Event listeners----//

body.addEventListener("change", function (){
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
        colorBox.style.backgroundColor = "green";
    } else {
        console.log(`${testValue} has an incorrect pattern!`);
        colorBox.style.backgroundColor = "red";
    };

    console.log(pattern);
});