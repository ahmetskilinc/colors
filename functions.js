var hex = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f"
];
var colorHex = document.getElementById("colorhex");

function gimmeColor() {
	var color = "#";
	for (var i = 0; i < 6; i++) {
		var ranNum = Math.floor(Math.random() * 16);
		color = color + hex[ranNum];
	}
	var n_match = ntc.name(color);
	n_name = n_match[1];
	colorHex.style.display = "block";
	colorHex.innerHTML = color + " - " + n_name;
	colorHex.style.display = "block";
	colorHex.style.background = color;
	colorHex.style.boxShadow = "0px 10px 68px -10px rgba(0,0,0,0.75)";
	document.getElementById("button").style.color = color;
	colorHex.style.color = color;
	// 	console.log(color);
}
