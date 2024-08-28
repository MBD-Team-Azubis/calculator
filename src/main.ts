import "./style.css";

const addEL = document.querySelectorAll("section button");

let speicher: number | string = "";

for (let i = 0; i < addEL.length; i++) {
  let itemOfList = addEL[i].id;
  (<HTMLButtonElement>document.getElementById(itemOfList)).addEventListener(
    "click",
    () => input(itemOfList),
    true
  );
}

function input(InputId: string) {
  if (InputId === "clear") {
    speicher = "";
  } else {
    speicher += InputId;
    console.log(speicher);
  }
}

// function updateNumber() {
//   (<HTMLButtonElement>document.getElementById("start")).innerHTML = speicher;
// }
