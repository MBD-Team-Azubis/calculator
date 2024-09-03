import "./style.css";

const button = document.querySelectorAll("section input");

let output = "";
let numberConversion = 0;

for (let i = 0; i < button.length; i++) {
  const item = button[i].id;
  (<HTMLInputElement>document.getElementById(item)).addEventListener(
    "click",
    () => input(item)
  );
}

function input(InputId: string) {
  if (InputId === "=") {
    output = evaluate(output);
    (<HTMLDivElement>document.getElementById("output")).innerText = output;
  } else if (InputId === "clear") {
    (<HTMLDivElement>document.getElementById("output")).innerText = "0";
    output = "";
  } else if (InputId === "delete") {
    output = output.slice(0, -1);
    (<HTMLDivElement>document.getElementById("output")).innerText = output;
  } else if (InputId === "sqrt") {
    numberConversion = parseInt(output);
    numberConversion = Math.sqrt(numberConversion);
    output = numberConversion.toString();
    (<HTMLDivElement>document.getElementById("output")).innerText = output;
  } else {
    output += InputId;
    (<HTMLDivElement>document.getElementById("output")).innerText = output;
  }
}

function evaluate(fn: string) {
  return new Function("return " + fn)();
}
