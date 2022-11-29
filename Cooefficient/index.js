module.exports = function coefficient(n) {
	var count = 0;
	for (var i = 0; i < n; i++) {
		count += 1;
	}
	count += 3;
	return count;
};
