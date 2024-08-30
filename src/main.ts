import "./style.css";

const button = document.querySelectorAll("section input");
const operators = document.querySelectorAll("section button");

let display = "";
let output = "";
let counter = 0;
let numberSpeicher: number[] = [];
let operatorSpeicher: string[] = [];
let speicherStage: number | string = 0;
let teilzeitOp = "";
let greatOutput: (number | string)[] = [];
let finalDisplay = "";

for (let i = 0; i < button.length; i++) {
  const itemOfList = button[i].id;
  const change = parseInt(itemOfList);
  (<HTMLInputElement>document.getElementById(itemOfList)).addEventListener(
    "click",
    () => input(change)
  );
}

for (let i = 0; i < operators.length; i++) {
  const operatorList = operators[i].id;
  (<HTMLButtonElement>document.getElementById(operatorList)).addEventListener(
    "click",
    () => operatorUse(operatorList)
  );
}

// sorgt für den Input im display.
function input(InputId: number) {
  display = display + InputId.toString();
  output = display;

  (<HTMLDivElement>document.getElementById("output")).innerHTML = output;
  input;
}

function newOutput() {
  for (let h = 0; h < numberSpeicher.length; h++) {
    greatOutput.push(numberSpeicher[h]);
    for (let k = 0; k < operatorSpeicher.length; k++) {
      greatOutput.push(operatorSpeicher[k]);
    }
  }
  finalDisplay = finalDisplay + greatOutput.join();
  (<HTMLDivElement>document.getElementById("output")).innerHTML = finalDisplay;
}

function operatorUse(opInput: string) {
  if (opInput === "clear") {
    (<HTMLDivElement>document.getElementById("output")).innerHTML = output;
    console.log(output);
  } else if (opInput === "-") {
    speicherStage = parseInt(output);
    numberSpeicher[counter] = speicherStage;
    speicherStage = 0;
    teilzeitOp = "-";
    operatorSpeicher[counter] = teilzeitOp;
    teilzeitOp = "";
    counter++;
    newOutput();
  } else if (opInput === "+") {
    speicherStage = parseInt(output);
    numberSpeicher[counter] = speicherStage;
    speicherStage = 0;
    teilzeitOp = "+";
    operatorSpeicher[counter] = teilzeitOp;
    teilzeitOp = "";
    counter++;
    newOutput();
  } else if (opInput === "/") {
    speicherStage = parseInt(output);
    numberSpeicher[counter] = speicherStage;
    speicherStage = 0;
    teilzeitOp = "/";
    operatorSpeicher[counter] = teilzeitOp;
    teilzeitOp = "";
    counter++;
    newOutput();
  } else if (opInput === "*") {
    speicherStage = parseInt(output);
    numberSpeicher[counter] = speicherStage;
    speicherStage = 0;
    teilzeitOp = "*";
    operatorSpeicher[counter] = teilzeitOp;
    teilzeitOp = "";
    counter++;
    newOutput();
  } else if (opInput === "=") {
  } else if (opInput === "delete") {
  } else {
    newOutput();
  }
}
