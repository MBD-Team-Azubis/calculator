import "./style.css";

const button = document.querySelectorAll("section input");

let speicher = 0;
let display = "";
let output = "";

for (let i = 0; i < button.length; i++) {
  const itemOfList = button[i].id;
  const change = parseInt(itemOfList);

  (<HTMLInputElement>document.getElementById(itemOfList)).addEventListener(
    "click",
    () => inputCheck(change),
    true
  );
}

function inputCheck(InputId: number) {
  display = display + InputId.toString();
  output = display;
  (<HTMLDivElement>document.getElementById("output")).innerHTML = output;
  console.log(display);
}
