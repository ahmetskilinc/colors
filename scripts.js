document.body.addEventListener("keyup", function (e) {
	if (e.key === "Enter" || e.code === "Enter") {
		runNewColour(true);
	}
});

const runNewColour = (get) => {
	let colour;
	if (get) {
		colour =
			"#" +
			Math.floor(Math.random() * 16777215)
				.toString(16)
				.toUpperCase();
	} else {
		colour = "#" + document.getElementById("hexInput").value;
	}
	getColourAndChangeShit(colour, get);
};

const getColourAndChangeShit = (colour, get) => {
	const colourName = ntc.name(colour)[1];
	document.body.style.background = colour;
	document.getElementById(get ? "colourOutput" : "nameOutput").innerHTML =
		`<p>` + "Name: " + colourName + `</p><p>` + "Hex: " + colour + `</p>`;
	window.document.title = colourName + " - " + colour;
};
