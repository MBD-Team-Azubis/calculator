import "./style.css";

//liest inhalt aller elemente in "section input" in Node Liste ein
const button = document.querySelectorAll("section input");

let output = "";
let numberConversion = 0;

// pro button ein eventlistener anlegen
for (let i = 0; i < button.length; i++) {
	const item = button[i].id;
	(<HTMLInputElement>document.getElementById(item)).addEventListener(
		"click",
		() => input(item)
	);
}

function input(InputId: string) {
	//Ergebnisausgabe nach "="
	if (InputId === "=") {
		//output wird an evaluate übergeben
		output = evaluate(output);
		//output wird ausgegeben
		(<HTMLDivElement>document.getElementById("output")).innerText = output;
	} else if (InputId === "clear") {
		// Löchen aller Eingaben
		(<HTMLDivElement>document.getElementById("output")).innerText = "0";
		output = "";
	} else if (InputId === "delete") {
		//letztes Zeichen löschen
		output = output.slice(0, -1);
		(<HTMLDivElement>document.getElementById("output")).innerText = output;

		//Wurzel scheint noch nicht zu funktionieren
	} else if (InputId === "sqrt") {
		numberConversion = parseInt(output);
		numberConversion = Math.sqrt(numberConversion);
		output = numberConversion.toString();
		(<HTMLDivElement>document.getElementById("output")).innerText = output;
	} else {
		//output text wird um eingegebenes verlängert
		output += InputId;
		(<HTMLDivElement>document.getElementById("output")).innerText = output;
	}
}

function evaluate(fn: string) {
	//text in output wird übergeben und ausgewertet
	return new Function("return " + fn)();
}
