import "./style.css";

const button = document.querySelectorAll("section input");
const operators = document.querySelectorAll("section button");

let output = "";
let numberSpeicher: number[] = [];
let operatorSpeicher: string[] = [];
let speicherStage = 0;
let greatOutput: (number | string)[] = [];
let finalDisplay = "";

for (let i = 0; i < button.length; i++) {
  const item = button[i].id;
  (<HTMLInputElement>document.getElementById(item)).addEventListener(
    "click",
    () => input(item)
  );
}

for (let d = 0; d < operators.length; d++) {
  const operator = operators[d].id;
  (<HTMLButtonElement>document.getElementById(operator)).addEventListener(
    "click",
    () => operatorUse(operator)
  );
}

// sorgt für den Input im display.
function input(InputId: string) {
  output += InputId;
  (<HTMLDivElement>document.getElementById("output")).innerText = output;
}

function newOutput() {
  for (let h = 0; h < numberSpeicher.length; h++) {
    greatOutput.push(numberSpeicher[h]);
    for (let k = 0; k < operatorSpeicher.length; k++) {
      greatOutput.push(operatorSpeicher[k]);
    }
  }

  finalDisplay = finalDisplay + greatOutput.join(",");
  console.log(finalDisplay);
  (<HTMLDivElement>document.getElementById("output")).innerText = finalDisplay;
}

function operatorUse(opInput: string) {
  if (opInput === "clear") {
    (<HTMLDivElement>document.getElementById("output")).innerText = "0";
  } else if (opInput === "-") {
    speicherStage = parseInt(output);
    numberSpeicher.push(speicherStage);
    operatorSpeicher.push(opInput);
    newOutput();
  } else if (opInput === "+") {
    speicherStage = parseInt(output);
    numberSpeicher.push(speicherStage);
    operatorSpeicher.push(opInput);
    newOutput();
  } else if (opInput === "/") {
    speicherStage = parseInt(output);
    numberSpeicher.push(speicherStage);
    operatorSpeicher.push(opInput);
    newOutput();
  } else if (opInput === "*") {
    speicherStage = parseInt(output);
    numberSpeicher.push(speicherStage);
    operatorSpeicher.push(opInput);
    newOutput();
  } else if (opInput === "=") {
  } else if (opInput === "delete") {
  } else {
    newOutput();
  }
}
