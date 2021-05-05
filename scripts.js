document.body.addEventListener("keyup", function (e) {
	if (e.keyCode == 13) {
		newColour();
	}
});

function newColour() {
	const colour =
		"#" +
		Math.floor(Math.random() * 16777215)
			.toString(16)
			.toUpperCase();
	const colourName = ntc.name(colour)[1];
	document.body.style.background = colour;
	document.getElementById("colourOutput").innerHTML = "Name: " + colourName + `<br/>` + "Hex: " + colour;
	window.document.title = colourName + " - " + colour;
}

function getHexName() {
	const colour = "#" + document.getElementById("hexInput").value;
	console.log(colour);
	const colourName = ntc.name(colour)[1];
	document.body.style.background = colour;
	document.getElementById("nameOutput").innerHTML = "Name: " + colourName + `<br/>` + "Hex: " + colour;
	window.document.title = colourName + " - " + colour;
}
