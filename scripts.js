document.body.addEventListener("keyup", function (e) {
	if (e.key === "Enter" || e.code === "Enter") {
		runNewColour(true);
	}
});

const runNewColour = (get) => {
	let colour;
	const hexInput = document.getElementById("hexInput").value;
	const hexCheck = /^([0-9a-f]{3}|[0-9a-f]{6})$/i;

	if (get) {
		colour =
			"#" +
			Math.floor(Math.random() * 16777215)
				.toString(16)
				.toUpperCase();
		getColourAndChangeShit(colour, get);
	} else {
		colour = "#" + hexInput;
		if (hexInput.match(hexCheck)) {
			getColourAndChangeShit(colour, get);
		} else {
			document.getElementById(
				get ? "colourOutput" : "nameOutput"
			).innerHTML = `<p style="color:red;">Please enter a valid hex value</p><p style="color:red;">(length: 3 or 6 characters)</p>`;
		}
	}
};

const getColourAndChangeShit = (colour, get) => {
	const colourName = ntc.name(colour)[1];
	document.body.style.background = colour;
	document.getElementById(get ? "colourOutput" : "nameOutput").innerHTML =
		`<p>` + "Name: " + colourName + `</p><p>` + "Hex: " + colour + `</p>`;
	window.document.title = colourName + " - " + colour;
};
