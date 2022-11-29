module.exports = function Cubic(n) {
	let line1 = "",
		line2 = "",
		line3 = "";
	for (var i = 0; i < n; i++) {
		line1 += i + " ";
		console.log(line1);
		for (var j = i; j < n; j++) {
			line2 += j + " ";
			for (var k = j; j < n; j++) {
				line3 += k + " ";
			}
			console.log(line2);
			line2 = "";
		}
		console.log(line3);
		line3 = "";
	}
};
