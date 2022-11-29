module.exports = function polynomial(n) {
	var count = 0;
	for (var i = 0; i < n * n; i++) {
		count += 1;
	}
	return count;
};
