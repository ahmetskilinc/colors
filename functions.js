var hex = [
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f'
];

function gimmeColor() {
	var color = '#';
	for (var i = 0; i < 6; i++) {
		var ranNum = Math.floor(Math.random() * 16);
		color = color + hex[ranNum];
	}
	var n_match = ntc.name(color);
	n_name = n_match[1];
	document.getElementById('colorhex').style.display = 'block';
	document.getElementById('colorhex').innerHTML = color + ' - ' + n_name;
	document.getElementById('colorbox').style.display = 'block';
	document.getElementById('colorbox').style.background = color;
	document.getElementById('colorbox').style.boxShadow =
		'0px 10px 68px -10px rgba(0,0,0,0.75)';
	document.getElementById('button').style.color = color;
	document.getElementById('colorhex').style.color = color;
	document.title = color;
	console.log(color);
}
