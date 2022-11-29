module.exports = function sum(n) {
	var count = 0;
	for (var i = 0; i < n; i++) {
		count += 1;
	}
	for (var i = 0; i < 5 * n; i++) {
		count += 1;
	}
	return count;
};
