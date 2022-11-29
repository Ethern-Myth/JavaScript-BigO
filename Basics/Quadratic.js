module.exports = function Quadratic(n) {
	let line1 = "",
		line2 = "";
	for (var i = 0; i < n; i++) {
		line1 += i + " ";
		console.log(line1);
		for (var j = i; j < n; j++) {
			line2 += j + " ";
		}
		console.log(line2);
		line2 = "";
	}
};
