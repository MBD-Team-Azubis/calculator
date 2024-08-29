import "./style.css";

let input = document.getElementById("inputbox");
let button = document.querySelectorAll("button");

let speicher: "";
let arr = Array.from(button);

arr.forEach((button) =>
  button.addEventListener("click", () => inputCheck(), true)
);

function inputCheck() {}
