import "./style.css";

const addEL = document.querySelectorAll("section button");

let speicher = 0;
let oldspeicher = 0;
let display = "";
let result = 0;

for (let i = 0; i < addEL.length; i++) {
  let itemOfList = addEL[i].id;
  (<HTMLButtonElement>document.getElementById(itemOfList)).addEventListener(
    "click",
    () => input(itemOfList),
    true
  );
  (<HTMLSpanElement>document.getElementById(itemOfList)).addEventListener(
    "click",
    () => updateNumber(itemOfList),
    true
  );
}

function input(InputId: string) {
  if (InputId === "clear") {
    window.location.reload();
  } else if (InputId === " + ") {
    speicher = parseInt(display);
    result = oldspeicher + speicher;
    oldspeicher = result;
  } else {
    speicher += InputId;
    console.log(speicher);
  }
}
